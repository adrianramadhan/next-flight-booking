import { FlightSeat, TypeSet } from "@prisma/client";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import dayjs from "dayjs";

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

export const dateFormat = (
  date: Date | string,
  format = "DD MMM YYYY HH:mm"
) => {
  if (!date) {
    return "";
  }

  const dateformat = dayjs(date).format(format);

  return dateformat;
};

export const rupiahFormat = (value: number) => {
  return Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(value);
};

export const objectToParams = (obj: { [key: string]: unknown }) => {
  const queryParams = Object.keys(obj)
    .map((key) => {
      if (obj[key] !== null) {
        return `${key}=${obj[key]}`;
      }

      return "";
    })
    .filter((item) => item !== "")
    .join("&");

  return queryParams;
};

export const mappingSeats = (seats: FlightSeat[]) => {
  const totalSeatEconomy = seats.filter(
    (seat) => seat.type === "ECONOMY"
  ).length;
  const totalSeatBusiness = seats.filter(
    (seat) => seat.type === "BUSINESS"
  ).length;
  const totalSeatFirst = seats.filter((seat) => seat.type === "FIRST").length;

  const economy = seats.filter(
    (item) => item.type === "ECONOMY" && item.isBooked
  ).length;
  const business = seats.filter(
    (item) => item.type === "BUSINESS" && item.isBooked
  ).length;
  const first = seats.filter(
    (item) => item.type === "FIRST" && item.isBooked
  ).length;

  return {
    economy,
    business,
    first,

    totalSeatEconomy,
    totalSeatBusiness,
    totalSeatFirst,
  };
};
