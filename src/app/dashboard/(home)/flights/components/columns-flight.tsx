"use client";

import { Button } from "@/components/ui/button";
import { getUrlFile } from "@/lib/supabase";
import { Airplane, Flight, FlightSeat } from "@prisma/client";
import type { ColumnDef } from "@tanstack/react-table";
import { Pencil } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ColumnRouteFlight from "./column-route-flight";
import ColumnSeatPrice from "./column-seatprice";

export type FlightColumn = Flight & {
  plane: Airplane;
  seats: FlightSeat[];
};

export const columns: ColumnDef<FlightColumn>[] = [
  {
    accessorKey: "planeId",
    header: "Pesawat",
    cell: ({ row }) => {
      const flight = row.original;

      return (
        <div className="flex items-center gap-2">
          <Image
            src={getUrlFile(flight.plane?.image)}
            alt={flight.plane.name}
            className=" object-cover rounded-xl"
            width={120}
            height={120}
            style={{ width: "auto", height: "auto" }}
            priority
          />
          <div>
            <div className="font-semibold">{flight.plane.name}</div>
            <div>{flight.plane.code}</div>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "departureCity",
    header: "Rute",
    cell: ({ row }) => {
      const flight = row.original;

      return <ColumnRouteFlight flight={flight} />;
    },
  },
  {
    accessorKey: "price",
    header: "Harga / Kursi",
    cell: ({ row }) => {
      const flight = row.original;

      return <ColumnSeatPrice flight={flight} />;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const flight = row.original;

      return (
        <div className="inline-flex gap-5 items-center">
          <Button variant="secondary" size="sm" asChild>
            <Link href={`flights/edit/${flight.id}`}>
              <Pencil className="mr-2 h-4 w-4" />
              Edit
            </Link>
          </Button>
          {/* <DeleteAirplane id={plane.id} /> */}
        </div>
      );
    },
  },
];
