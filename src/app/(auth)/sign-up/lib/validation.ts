import { z } from "zod";

export const userSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(4, { message: "Name must be at least 4 characters" }),
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Invalid email address" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(4, { message: "Password must be at least 4 characters" }),
  passport: z.string({ required_error: "Passport is required" }),
});
