import { z } from "zod";

export const registerSchema = z.object({
    email: z.string().min(1),
    password: z.string().min(1),
    passwordConfirm: z.string().min(1)
});