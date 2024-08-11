"use client";

import type { ActionResult } from "@/app/dashboard/(auth)/signin/form/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { type FC } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { saveAirplane } from "../lib/actions";

interface FormAirplaneProps {}

const initialFormState: ActionResult = {
  errorTitle: null,
  errorDesc: [],
};

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} className="w-full" type="submit">
      {pending ? "Loading..." : "Submit"}
    </Button>
  );
};

const FormAirplane: FC = () => {
  const [state, formAction] = useFormState(saveAirplane, initialFormState);

  return (
    <form action={formAction} className="w-[40%] space-y-4 ml-2">
      {state.errorTitle !== null && (
        <div className=" my-7 bg-red-500 w-full p-4 rounded-lg text-white">
          <div className="font-bold mb-4">Error</div>
          <ul className="list-disc list-inside">
            {state.errorDesc?.map((value, index) => (
              <li key={index + value}>{value}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="code">Kode Pesawat</Label>
        <Input placeholder="Kode pesawat..." name="code" id="code" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="name">Nama Pesawat</Label>
        <Input placeholder="Nama Pesawat..." name="name" id="name" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="image">Upload Foto</Label>
        <Input
          type="file"
          placeholder="Upload Foto..."
          name="image"
          id="image"
          required
        />
      </div>

      <SubmitButton />
    </form>
  );
};

export default FormAirplane;
