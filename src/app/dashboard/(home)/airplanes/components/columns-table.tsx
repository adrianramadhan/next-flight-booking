"use client";

import { Button } from "@/components/ui/button";
import { getUrlFile } from "@/lib/supabase";
import type { Airplane } from "@prisma/client";
import type { ColumnDef } from "@tanstack/react-table";
import { Pencil } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const columns: ColumnDef<Airplane>[] = [
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      const plane = row.original;

      return (
        <Image
          src={getUrlFile(plane.image)}
          alt="Image Airplane"
          width={180}
          height={180}
          className="rounded-lg object-cover"
        />
      );
    },
  },
  {
    accessorKey: "code",
    header: "Code",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const plane = row.original;

      return (
        <div className="inline-flex gap-5 items-center">
          <Button variant="secondary" size="sm" asChild>
            <Link href={`airplanes/edit/${plane.id}`}>
              <Pencil className="mr-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      );
    },
  },
];
