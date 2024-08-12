"use client";

import { Label } from "@/components/ui/label";
import React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import SubmitButtonForm from "../../component/submit-form-button";
import type { Airplane } from "@prisma/client";
import type { ActionResult } from "@/app/dashboard/(auth)/signin/form/actions";
import { useFormState } from "react-dom";
import { saveFlight } from "../lib/actions";

interface FormFlightProps {
  airplanes: Airplane[];
}

const initialFormState: ActionResult = {
  errorTitle: null,
  errorDesc: [],
};

export default function FormFlight({ airplanes }: FormFlightProps) {
  const [state, formAction] = useFormState(saveFlight, initialFormState);

  return (
    <form action={formAction} className="ml-2 space-y-6">
      {state?.errorTitle !== null && (
        <div className=" my-7 bg-red-500 w-full p-4 rounded-lg text-white">
          <div className="font-bold mb-4">Error</div>
          <ul className="list-disc list-inside">
            {state.errorDesc?.map((value, index) => (
              <li key={index + value}>{value}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="planeId">Pilih Pesawat</Label>
          <Select name="planeId">
            <SelectTrigger id="planeId">
              <SelectValue placeholder="Pilih Pesawat" />
            </SelectTrigger>
            <SelectContent>
              {airplanes.map((airplane) => (
                <SelectItem key={airplane.id} value={airplane.id}>
                  {airplane.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="price">Harga Tiket</Label>
          <Input
            placeholder="Harga Tiket..."
            name="price"
            id="price"
            type="number"
            min={0}
            required
          />
          <span className="text-xs text-gray-900">
            Harga untuk kelas business bertambah Rp 500.000 dan Kelas First
            bertambah Rp 750.000
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="departureCity">Kota Keberangkatan</Label>
          <Input
            placeholder="Kota Keberangkatan..."
            name="departureCity"
            id="departureCity"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="departureDate">Tanggal Keberangkatan</Label>
          <Input
            type="datetime-local"
            placeholder="Tanggal Keberangkatan..."
            name="departureDate"
            id="departureDate"
            className="block"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="departureCityCode">Kode Kota</Label>
          <Input
            placeholder="Kode Kota..."
            name="departureCityCode"
            id="departureCityCode"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="destinationCity">Kota Tujuan</Label>
          <Input
            placeholder="Kota Tujuan..."
            name="destinationCity"
            id="destinationCity"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="arrivalDate">Tanggal Tiba</Label>
          <Input
            type="datetime-local"
            placeholder="Tanggal Tiba..."
            name="arrivalDate"
            id="arrivalDate"
            className="block"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="destinationCityCode">Kode Kota</Label>
          <Input
            placeholder="Kode Kota..."
            name="destinationCityCode"
            id="destinationCityCode"
            required
          />
        </div>
      </div>

      <SubmitButtonForm />
    </form>
  );
}
