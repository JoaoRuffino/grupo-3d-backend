import { z } from 'zod';

export const travelCreationSchema = z.object({
  title: z.string().nonempty(),
  initialDate: z.string().date(),
  plate: z.string().min(7).max(7),
  contractor: z.string().nonempty()
});