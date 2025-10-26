import { z } from "zod";

export const advertiserSchema = z.object({
    phone: z.string().min(7, "Teléfono inválido"),
    
    social_links: z.record(
        z.string(),
        z.union([z.url("URL inválida"), z.literal(''), z.undefined(),z.null()]).optional()
    ).optional(),

});
