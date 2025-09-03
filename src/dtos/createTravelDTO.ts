import type { Travel } from "../models/travel";

export interface CreateTravelDTO {
  title: string;
  initialDate: Date;
  plate: string;
  contractor: string;
}

export type UpdateTravelDTO = Partial<Omit<Travel, "id">>;
