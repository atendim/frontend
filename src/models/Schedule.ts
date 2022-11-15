import { Customer } from "./Customer";
import { User } from "./User";

export interface ISchedule {
  id: string;
  description: string;
  observation?: string;
  price?: number;
  appointment: Date;
  finished: boolean;
  userId?: string,
  customerId: string
}

export class Schedule implements ISchedule {
  id: string;
  description: string;
  observation?: string | undefined;
  price?: number | undefined;
  appointment: Date;
  finished: boolean;
  userId?: string;
  customerId: string;

  constructor() {
    this.finished = false;
    this.price = 0.00;
    this.appointment = new Date();
  }
}