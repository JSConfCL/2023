import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Camera, Type, Search, Loader, Image } from "react-feather";
import { QRCode } from "react-qrcode-logo";
import { useZxing } from "react-zxing";

import { searchTicketId } from "../../src/helpers/API";
import { colors } from "../../styles/theme";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: white;
  color: black;
  overflow-y: scroll;
  padding-bottom: 80px;
`;

const Container = styled.div`
  padding: 16px;
`;

const H1 = styled.h1``;

const H2 = styled.h2`
  margin-top: 32px;
`;

const Button = styled.button`
  text-align: center;
  padding: 16px;
`;

const Actions = styled.div`
  display: flex;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: 2px solid #ddd;
  background: #efefef;
  ${Button} {
    flex: 1 1;

    &:last-child {
      border: 0;
    }
  }
`;

const Input = styled.input`
  border: 1px solid #ddd;
  padding: 8px;
  width: 100%;
`;

const StyledTicket = styled.div<{ color: string }>`
  border: 1px solid #ddd;
  border-left: 10px solid ${({ color }) => color};
  padding: 8px;
  margin-bottom: 8px;
`;

const StyledSearch = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

const MODES = {
  text: "TEXT",
  qr: "QR",
  tickets: "TICKETS",
};

const KEY = "user_ticket_";

interface TicketSummaryProps {
  ticketType: string;
  ticketName: string;
  ticketDescription: string;
  userUsername: string;
  userName: string;
}

interface UserTicketSummary {
  id: string;
  owner: {
    email: string;
    name: string;
    photo: string;
    username: string;
  };
  ticket: {
    description: string;
    id: string;
    name: string;
    type: string;
  };
}

const TicketSummary = ({
  ticketType,
  ticketName,
  ticketDescription,
  userUsername,
  userName,
}: TicketSummaryProps) => {
  const ticketOptions =
    ticketType === "workshop"
      ? {
          title: "Workshop",
          subtitle: ticketDescription,
          selectedTheme: "workshop",
          color: colors.black,
        }
      : ticketType === "meetup"
      ? {
          title: ticketName,
          subtitle: ticketDescription,
          selectedTheme: "meetup",
          color: colors.jsconfRed,
        }
      : {
          title: "JSConf Chile",
          selectedTheme: "jsconf",
          color: colors.jsconfYellow,
        };

  return (
    <StyledTicket color={ticketOptions.color}>
      @{userUsername} - {userName}
      <br />
      {ticketOptions.title}
      <br />
      {ticketOptions.subtitle}
    </StyledTicket>
  );
};

const Watchman: NextPage = (props) => {
  const router = useRouter();
  const initialMode = router.query.mode as string;
  const [text, setText] = useState("");
  const [mode, setMode] = useState(initialMode ?? "");
  const [page, setPage] = useState("");

  const {
    data: ticketList,
    refetch,
    isFetching: isLoadingTicketList,
  } = useQuery({
    queryKey: ["ticketList"],
    queryFn: async () => await searchTicketId(text),
    retry: false,
    cacheTime: 0,
    enabled: false,
  });
  const { ref } = useZxing({
    async onResult(result) {
      const possibleText = result?.getText();
      if (possibleText?.startsWith(KEY)) {
        const route = `/watchman/${possibleText}`;
        await router.push(route);
      }
    },
  });

  const handleSearch = async (e: any) => {
    e?.preventDefault();
    await refetch();
  };

  const handleClick = async (ticketId: string) => {
    await router.push(`/watchman/${ticketId}`);
  };

  useEffect(() => {
    setPage(`${window.location.origin}/mytickets`);
  }, [setPage]);

  return (
    <Wrapper>
      <Container>
        <H1>Busqueda</H1>
        {mode === MODES.text ? (
          <>
            <form
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onSubmit={handleSearch}
            >
              <StyledSearch>
                <Input
                  type="text"
                  placeholder="Buscar por nombre, email o username"
                  onChange={(e) => setText(e.target.value)}
                  value={text}
                />
                <Button
                  // eslint-disable-next-line @typescript-eslint/no-misused-promises
                  onClick={handleSearch}
                >
                  <Search size={18} />
                </Button>
              </StyledSearch>
            </form>
            {isLoadingTicketList ? (
              <div>
                <Loader size={24} />
              </div>
            ) : null}
            {typeof ticketList !== "undefined" && !ticketList.length ? (
              <div>
                <H2>Resultados</H2>
                <div>No hay resultados.</div>
              </div>
            ) : null}
            {!isLoadingTicketList && ticketList?.length ? (
              <div>
                <H2>Resultados</H2>
                {ticketList?.map((ticket: UserTicketSummary) => (
                  <div
                    key={ticket.id}
                    // eslint-disable-next-line @typescript-eslint/no-misused-promises
                    onClick={async () => await handleClick(ticket.id)}
                  >
                    <TicketSummary
                      ticketType={ticket.ticket.type}
                      ticketName={ticket.ticket.name}
                      ticketDescription={ticket.ticket.description}
                      userUsername={ticket.owner.username}
                      userName={ticket.owner.name}
                    />
                  </div>
                ))}
              </div>
            ) : null}
          </>
        ) : null}
        <div style={{ display: mode === MODES.qr ? "block" : "none" }}>
          <video width="100%" ref={ref} />
        </div>
        {mode === MODES.tickets || mode === "" ? (
          <>
            <p style={{ padding: "8px" }}>Escanea QR hacia Mis Tickets</p>
            <QRCode
              value={page}
              logoImage="images/qr-images/logo-yellow.jpg"
              size={350}
              bgColor="#fff"
              fgColor="#000"
            />
          </>
        ) : null}
        <Actions>
          <Button
            onClick={() => {
              setMode(MODES.tickets);
            }}
          >
            <Image size={24} />
          </Button>
          <Button
            onClick={() => {
              setMode(MODES.text);
            }}
          >
            <Type size={24} />
          </Button>
          <Button
            onClick={() => {
              setMode(MODES.qr);
            }}
          >
            <Camera size={24} />
          </Button>
        </Actions>
      </Container>
    </Wrapper>
  );
};

export default Watchman;
