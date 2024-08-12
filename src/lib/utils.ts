import { TypeSet } from "@prisma/client";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateSeatPerClass = (flightId: string) => {
  const SEAT_CLASS: TypeSet[] = ["ECONOMY", "BUSINESS", "FIRST"];
  const SEAT_CODE = ["A", "B", "C", "D"];

  const seats: { seatNumber: string; type: TypeSet; flightId: string }[] = [];

  for (const className of SEAT_CLASS) {
    for (const seat of SEAT_CODE) {
      for (let i = 1; i <= 5; i++) {
        seats.push({
          seatNumber: seat + i,
          type: className as TypeSet,
          flightId,
        });
      }
    }
  }

  return seats;
};
