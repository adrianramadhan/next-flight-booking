"use server";

import type { ActionResult } from "@/app/dashboard/(auth)/signin/form/actions";
import { userSchema } from "../../sign-up/lib/validation";
import prisma from "../../../../../lib/prisma";
import { lucia } from "@/lib/auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { revalidatePath } from "next/cache";

export async function SignInUser(
  prevState: unknown,
  formData: FormData
): Promise<ActionResult> {
  const signInSchema = userSchema.pick({ email: true, password: true });

  const validate = signInSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validate.success) {
    const errorDesc = validate.error.issues.map((issue) => issue.message);

    return {
      errorTitle: "Error Validation",
      errorDesc,
    };
  }

  const existingUser = await prisma.user.findFirst({
    where: {
      email: validate.data.email,
    },
  });

  if (!existingUser) {
    return {
      errorTitle: "Error",
      errorDesc: ["User not found"],
    };
  }

  const validPassword = await bcrypt.compare(
    validate.data.password,
    existingUser.password
  );

  if (!validPassword) {
    return {
      errorTitle: "Error",
      errorDesc: ["Invalid password"],
    };
  }

  const session = await lucia.createSession(existingUser.id, {});
  const sessionCookie = lucia.createSessionCookie(session.id);

  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );

  revalidatePath("/");
  return redirect("/");
}
