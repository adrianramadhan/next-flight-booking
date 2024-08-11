import { z } from "zod";

const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

const MAX_IMAGE_SIZE = 1024 * 1024 * 2; // 2MB

export const airplaneFormSchema = z.object({
  name: z
    .string({ required_error: "Nama Pesawat tidak boleh kosong" })
    .min(4, { message: "Nama Pesawat minimal 4 karakter" }),
  code: z
    .string({ required_error: "Kode Pesawat tidak boleh kosong" })
    .regex(/^[A-Z]{3}-[0-9]{3}$/, "Format kode haruss [XXX-111]"),
  image: z
    .any()
    .refine(
      (file: File) => ACCEPTED_IMAGE_TYPES.includes(file.type),
      "Image haurs berekstensi .jpg, .jpeg, atau .png"
    )
    .refine(
      (file: File) => file.size <= MAX_IMAGE_SIZE,
      "Ukuran file tidak boleh lebih dari 2MB"
    ),
});
