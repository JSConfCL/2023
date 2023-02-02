import styled from "@emotion/styled";
import { useQuery, useMutation } from "@tanstack/react-query";
import type { NextPage } from "next";
import { useRouter } from "next/router";

import { useState } from "react";
import {
  Camera,
  Type,
  Square,
  CheckSquare,
  Loader,
  AlertCircle,
  Image,
} from "react-feather";

import {
  publicTicketNoTicket as publicTicket,
  redeemsForTicket,
  redeemForId,
} from "../../src/helpers/API";
import { colors } from "../../styles/theme";

const FlexWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  background: white;
  color: black;
  flex-direction: column;
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: white;
  color: black;
`;

const Container = styled.div`
  padding: 16px;
`;

const H2 = styled.h2`
  margin-top: 32px;
`;

const RedemptionRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const RedemptionName = styled.div``;
const RedemptionStatus = styled.div``;
const StyledRedeemed = styled.div`
  color: green;
`;

const StyledRedeem = styled.button`
  color: red;

  &:disabled,
  &:disabled:hover {
    color: #ddd;
  }
`;

const Button = styled.button`
  text-align: center;
  padding: 16px;
  border: 1px solid #ddd;
  background: #eee;
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
    flex: 1 1 50%;
  }
`;

const StyledTicket = styled.div<{ color: string }>`
  border: 1px solid #ddd;
  border-left: 10px solid ${({ color }) => color};
  padding: 8px;
  margin-bottom: 16px;
`;

const NOT_REDEEMED = "not_redeemed";

interface Hash {
  [key: string]: boolean;
}

interface TicketSummaryProps {
  ticketType: string;
  ticketName: string;
  ticketDescription: string;
  userUsername: string;
  userName: string;
}

interface RedemptionSummary {
  id: string;
  redemptionType: {
    description: string;
    id: string;
    name: string;
  };
  status: string;
  userTicketId: string;
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
  const ticketId = router.query.ticketId as string;

  const { isLoading: isLoadingDataTicketInfo, data: ticketInfo } = useQuery({
    queryKey: ["redeemsForTicket", ticketId],
    queryFn: async () => await redeemsForTicket(ticketId),
    retry: false,
    cacheTime: 0,
  }) as { isLoading: boolean; data?: any };
  const { isLoading: isLoadingOneTicket, data: publicTicketData } = useQuery({
    queryKey: ["publicTicket", ticketId],
    queryFn: async () => await publicTicket(ticketId),
    retry: false,
    cacheTime: 0,
  }) as { isLoading: boolean; data?: any };

  const mutation = useMutation(
    async (redeemId: string) => {
      return await redeemForId(redeemId);
    },
    {
      onSuccess: (_, redeemId, __) => {
        setRedeems((tmpRedeems) => ({ ...tmpRedeems, [redeemId]: true }));
      },
      onSettled: (_, redeemId, __) => {
        setLoadings((tmpLoadings) => ({
          ...tmpLoadings,
          [redeemId as string]: false,
        }));
      },
    }
  );

  const [redeems, setRedeems] = useState<Hash>({});
  const [loadings, setLoadings] = useState<Hash>({});

  const handleReedem = (redeemId: string) => {
    mutation.mutate(redeemId);
    setLoadings((tmpLoadings) => ({ ...tmpLoadings, [redeemId]: true }));
  };

  const handleSearch = async (mode: string) => {
    const route = `/watchman?mode=${mode}`;
    await router.push(route);
  };

  if (isLoadingDataTicketInfo || isLoadingOneTicket) {
    return (
      <FlexWrapper>
        <Loader size={128} />
      </FlexWrapper>
    );
  }

  if (!ticketInfo) {
    return (
      <FlexWrapper>
        <div>
          <AlertCircle size={64} />
        </div>
        <div>
          <Button
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onClick={async () => {
              await handleSearch("");
            }}
          >
            Volver al buscador
          </Button>
        </div>
      </FlexWrapper>
    );
  }

  return (
    <Wrapper>
      <Container>
        <h1>Ticket</h1>
        <TicketSummary
          ticketType={publicTicketData.ticketType}
          ticketName={publicTicketData.ticketName}
          ticketDescription={publicTicketData.ticketDescription}
          userUsername={publicTicketData.username}
          userName={publicTicketData.name}
        />
        <H2>Redemptions</H2>
        {ticketInfo?.redemptions?.map((r: RedemptionSummary) => (
          <RedemptionRow key={r.id}>
            <RedemptionName>{r.redemptionType.name}</RedemptionName>
            <RedemptionStatus>
              {redeems[r.id] || r.status !== NOT_REDEEMED ? (
                <StyledRedeemed>
                  <CheckSquare size={24} />
                </StyledRedeemed>
              ) : (
                <StyledRedeem
                  disabled={loadings[r.id]}
                  onClick={() => {
                    handleReedem(r.id);
                  }}
                >
                  <Square size={24} />
                </StyledRedeem>
              )}
            </RedemptionStatus>
          </RedemptionRow>
        ))}

        <Actions>
          <Button
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onClick={async () => {
              await handleSearch("TICKETS");
            }}
          >
            <Image size={24} />
          </Button>
          <Button
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onClick={async () => {
              await handleSearch("TEXT");
            }}
          >
            <Type size={24} />
          </Button>
          <Button
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onClick={async () => {
              await handleSearch("QR");
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
