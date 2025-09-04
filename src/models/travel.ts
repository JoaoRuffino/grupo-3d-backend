import type { Expense } from "./expense";

export interface Travel {
    id: number;
    title: string;
    plate: string;
    contractor: string;
    parking?: Expense;
    inverter?: Expense;
    blueZone?: Expense;
    lunch?: Expense;
    initialDate: Date;
    endDate?: Date;
    initialKm: number;
    endKm?: number;
    distance?: number;
    isActive: boolean;
}