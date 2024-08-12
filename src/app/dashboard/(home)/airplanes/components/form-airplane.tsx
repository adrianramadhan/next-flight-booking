"use client";

import type { ActionResult } from "@/app/dashboard/(auth)/signin/form/actions";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { type FC } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { saveAirplane, updateAirplane } from "../lib/actions";
import type { Airplane } from "@prisma/client";
import Image from "next/image";
import { getUrlFile } from "@/lib/supabase";
import SubmitButtonForm from "../../component/submit-form-button";

interface FormAirplaneProps {
  type?: "ADD" | "EDIT";
  defaultValues?: Airplane | null;
}

const initialFormState: ActionResult = {
  errorTitle: null,
  errorDesc: [],
};

const FormAirplane: FC<FormAirplaneProps> = ({ type, defaultValues }) => {
  const updateAirplaneWithId = async (
    _state: ActionResult,
    formData: FormData
  ) => updateAirplane(null, defaultValues?.id!!, formData);

  const [state, formAction] = useFormState(
    type === "ADD" ? saveAirplane : updateAirplaneWithId,
    initialFormState
  );

  return (
    <form action={formAction} className="w-[40%] space-y-4 ml-2 ">
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
        <Input
          placeholder="Kode pesawat..."
          name="code"
          id="code"
          defaultValue={defaultValues?.code}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="name">Nama Pesawat</Label>
        <Input
          placeholder="Nama Pesawat..."
          name="name"
          id="name"
          defaultValue={defaultValues?.name}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="image">Upload Foto</Label>
        {defaultValues?.image && (
          <Image
            src={getUrlFile(defaultValues?.image)}
            alt="Existing Image"
            width={180}
            height={180}
          />
        )}
        <Input
          type="file"
          placeholder="Upload Foto..."
          name="image"
          id="image"
        />
      </div>

      <SubmitButtonForm />
    </form>
  );
};

export default FormAirplane;
