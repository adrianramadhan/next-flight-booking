"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { type FC } from "react";

interface FormAirplaneProps {}

const FormAirplane: FC = () => {
  return (
    <form className="w-[40%] space-y-4 ml-2">
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
      <Button className="w-full" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default FormAirplane;
