import { atom, Atom } from "jotai";
import { selectAtom, splitAtom } from "jotai/utils";
export interface Entrada {
  createdAt: string;
  description: string;
  id: string;
  name: string;
  price: number;
  priceUSD: number;
  quantity: number;
  season: string;
  status: string;
  stripePriceId: string;
  type: string;
  updatedAt: string;
  currentQuantity: number;
}

export interface EntradaMapType {
  [entradaId: Entrada["id"]]: Entrada;
}
export const ticketsAtom = atom<Entrada[]>([]);
export const ticketsAtomsAtom = splitAtom(ticketsAtom);
export const ticketSummaryAtom = selectAtom(ticketsAtom, (ticketsAtom) => {
  return ticketsAtom
    .filter((ticket) => ticket.currentQuantity > 0)
    .map((ticket) => ({
      id: ticket.id,
      price: ticket.price,
      quantity: ticket.currentQuantity,
      subTotal: ticket.currentQuantity * ticket.price,
      name: ticket.name,
    }));
});
export const totalPriceAtom = atom<number>((get) =>
  get(ticketsAtom).reduce(
    (prev, next) => prev + next.currentQuantity * next.price,
    0
  )
);
export const hasticketsAtom = atom(
  (get) => Object.keys(get(ticketsAtom)).length > 0
);
export const hasBoughtTicketsAtom = atom((get) =>
  Boolean(
    get(ticketsAtom).filter((ticket) => ticket.currentQuantity > 0).length
  )
);

export interface EntradaFormType {
  [entradaId: Entrada["id"]]: Atom<number>;
}
export const subNavigationAtom = atom<
  "ticket_selection" | "agreements" | "payment_selection"
>("ticket_selection");

export const codeOfConductAgreedAtom = atom(false);
export const policyAgreedAtom = atom(false);

export const paymentSelectedAtom = atom<"stripe" | "mercadopago" | null>(null);
