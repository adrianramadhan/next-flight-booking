import { TypeSet } from "@prisma/client";
import React from "react";

const SEAT_OPTIONS: TypeSet[] = ["ECONOMY", "BUSINESS", "FIRST"];

export default function FilterClass() {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-semibold">Seat className</p>
      {SEAT_OPTIONS.map((val, i) => (
        <label
          htmlFor={val}
          key={`${val + i}`}
          className="font-semibold flex items-center gap-[10px] has-[:checked]:text-white"
        >
          <input
            type="radio"
            name="seat"
            value={val}
            className="w-[18px] h-[18px] appearance-none checked:border-[3px] checked:border-solid checked:border-flysha-black rounded-full checked:bg-flysha-light-purple ring-2 ring-flysha-off-purple checked:ring-white"
          />
          {val}
        </label>
      ))}
    </div>
  );
}
