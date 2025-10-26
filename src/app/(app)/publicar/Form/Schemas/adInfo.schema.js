import { z } from "zod";

export const adInfoSchema = z.object({
  title: z.string().min(1, "Este campo es obligatorio"),
  categories: z.array(z.int()).min(1, "Elije al menos una categoría"),
  description: z.string().min(1, "Este campo es obligatorio"),
  ubication: z.string().min(1, "Este campo es obligatorio"),
  images: z
    .any()
    .refine(files => files?.length <= 2, "Máximo 2 imágenes permitidas")
});