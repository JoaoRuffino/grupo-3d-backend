import type { Response, Request } from "express";
import type { CreateTravelDTO } from "../dtos/createTravelDTO";
import type { Travel } from "../models/travel";
import type { UpdateTravelDTO } from "../dtos/createTravelDTO";
let travels: Travel[] = [];
let nextId = 1;

export const createTravel = (req: Request, res: Response) => {
  const data: CreateTravelDTO = req.body;

  if (!data.title || !data.initialDate || !data.plate || !data.contractor) {
    return res.status(400).json({ error: "Campos de informações faltando!" });
  }
  const newTravel: Travel = {
    id: nextId++,
    title: data.title,
    initialDate: new Date(data.initialDate),
    isActive: true,
    plate: data.plate,
    contractor: data.contractor
  };

  travels.push(newTravel);
  return res.status(201).json(newTravel);
}

export const updateTravel = (req: Request, res: Response) => {
  const id = Number(req.params.id); //ID DA URL
  const data: UpdateTravelDTO = req.body;

  const travel = travels.find(t => t.id === id);
  if (!travel) return res.status(404).json({ error: "Viagem não encontrada" });

  Object.assign(travel, data);
  return res.json(travel);
};