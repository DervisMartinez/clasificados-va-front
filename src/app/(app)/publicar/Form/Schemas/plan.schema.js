import { z } from "zod";

export const planSchema = z.object({
    plan_id: z.string().min(1,'Debes selccionar un plan.'),
});
