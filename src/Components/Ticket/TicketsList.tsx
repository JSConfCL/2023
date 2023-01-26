import { UserType, OwnTicket } from "../../helpers/API/types";

import { Ticket } from "./Ticket";

export const TicketsList = ({
  user,
  tickets,
}: {
  user: UserType;
  tickets?: OwnTicket[];
}) => {
  if (!tickets?.length) {
    return <div>No hay tickets.</div>;
  }

  return (
    <>
      {tickets?.map((ticket: OwnTicket) => (
        <Ticket
          key={ticket.id}
          userTicketId={ticket.id}
          userTicketStatus={ticket.status}
          userPhoto={user.photo}
          userUsername={user.username}
          userName={user.name}
          ticketName={ticket.ticket.name}
          ticketType={ticket.ticket.type}
          ticketSeason={ticket.ticket.season}
          showSocialLinks={
            ticket.ticket.type !== "workshop" && ticket.ticket.type !== "meetup"
          }
          fadeIn
        />
      ))}
    </>
  );
};
