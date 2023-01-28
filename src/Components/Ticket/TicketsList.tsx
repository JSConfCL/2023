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
      {tickets?.map((ticket: OwnTicket) => {
        const ticketOptions =
          ticket.ticket.type === "workshop"
            ? {
                title: "Workshop",
                subtitle: ticket.ticket.description,
                selectedTheme: "workshop",
                showSocialLinks: false,
              }
            : ticket.ticket.type === "meetup"
            ? {
                title: ticket.ticket.name,
                subtitle: ticket.ticket.description,
                selectedTheme: "meetup",
                showSocialLinks: false,
              }
            : {
                selectedTheme: "jsconf",
                showSocialLinks: true,
              };

        return (
          <Ticket
            key={ticket.id}
            title={ticketOptions.title}
            subtitle={ticketOptions.subtitle}
            userTicketId={ticket.id}
            userTicketStatus={ticket.status}
            userPhoto={user.photo}
            userUsername={user.username}
            userName={user.name}
            ticketName={ticket.ticket.name}
            ticketType={ticket.ticket.type}
            ticketSeason={ticket.ticket.season}
            showSocialLinks={ticketOptions.showSocialLinks}
            selectedTheme={
              ticketOptions.selectedTheme as "workshop" | "meetup" | "jsconf"
            }
            fadeIn
          />
        );
      })}
    </>
  );
};
