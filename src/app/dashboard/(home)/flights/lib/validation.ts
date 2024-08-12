import { z } from "zod";

export const formFlightSchema = z.object({
  planeId: z.string({ required_error: "Please select a plane" }),
  price: z.string({ required_error: "Please enter a price" }),
  departureCity: z.string({ required_error: "Please enter a departure city" }),
  departureDate: z.date({ required_error: "Please enter a departure date" }),
  departureCityCode: z
    .string({
      required_error: "Please enter a departure city code",
    })
    .min(3, "City code must be 3 characters long")
    .max(3, "City code must be 3 characters long"),

  destinationCity: z.string({ required_error: "Please enter a destination" }),
  arrivalDate: z.date({ required_error: "Please enter a departure date" }),
  destinationCityCode: z
    .string({
      required_error: "Please enter a destination code",
    })
    .min(3, "City code must be 3 characters long")
    .max(3, "City code must be 3 characters long"),
});
