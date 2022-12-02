import { Entrada } from "../../Components/Cart/CartAtom";

export type UserType = {
  error: any;
  company: null | string;
  country: null | string;
  email: null | string;
  gender: null | string;
  id: string;
  name: null | string;
  photo: null | string;
  position: null | string;
  provider: null | string;
  providerId: null | string;
  seniority: null | string;
  username: null | string;
  yearsOfExperience: null | number;
};

export interface UserPayload {
  name: string;
  username: string;
  company: string;
  position: string;
  seniority: string;
  yearsOfExperience: number;
  country: string;
  gender: string;
}

export interface VolunteerPayload {
  email: string;
  name: string;
  lastName: string;
  why: string;
}

export interface OwnTicket {
  id: string;
  ownerId: string;
  paymentId: string;
  status: string;
  ticket: Entrada;
  ticketId: string;
  updated_at: string;
}
