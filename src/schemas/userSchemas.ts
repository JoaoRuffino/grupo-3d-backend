import { z } from 'zod';

export const userRegistrationSchema = z.object({
  username: z.string().nonempty(),
  email: z.string().email().min(5),
  password: z.string().min(8).regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/, "Senha deve ter pelo menos uma letra minúscula, uma maiúscula e um caractere especial"),
});

export const userLoginSchema = z.object({
  email: z.string().email().min(5),
  password: z.string().min(8),
});