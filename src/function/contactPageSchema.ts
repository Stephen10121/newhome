import { z } from "zod";

export const newSchema = z.object({
    name: z.string().min(1),
    contactMethod: z.string().min(1),
    aboutContact: z.string().min(1)
});
