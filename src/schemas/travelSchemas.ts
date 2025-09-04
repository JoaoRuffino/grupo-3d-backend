import { z } from 'zod';

export const travelCreationSchema = z.object({
  title: z.string().nonempty(),
  initialDate: z.iso.date(),
  plate: z.string().min(7).max(7),
  contractor: z.string().nonempty()
});

const travelExpense = z.object({
  used: z.boolean(),
  value: z.number()
})

export const travelUpdateSchema = z.object({
  title: z.string().optional,
  initialDate: z.iso.date().optional(),
  plate: z.string().min(7).max(7).optional(),
  contractor: z.string().nonempty().optional(),
  parking: travelExpense.optional(),
  inverter: travelExpense.optional(),
  blueZone: travelExpense.optional(),
  lunch: travelExpense.optional(),
  endDate: z.iso.date().optional(),
  distance: z.number().optional()
});