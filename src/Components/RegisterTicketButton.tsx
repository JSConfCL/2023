import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";
import confetti from "canvas-confetti";
import { useState, useRef, useEffect } from "react";
import { Loader } from "react-feather";

import { ViewportSizes } from "../../styles/theme";
import {
  anonymousMe,
  anonymousTickets,
  getTicket,
  redeemTicket,
} from "../helpers/API";

import { UpdateButton } from "./Form/components";
import { PrimaryStyledLink } from "./Links";
interface RedeemedTicket {
  burnedAt?: string;
  created_at: string;
  id: string;
  ownerId: string;
  paymentId: string;
  status: string;
  ticketId: string;
  updated_at: string;
}

interface AlreadyTicket {
  burnedAt?: string;
  created_at: string;
  id: string;
  ownerId: string;
  paymentId: string;
  payment_id: string;
  status: string;
  ticket: any;
  ticketId: string;
  updated_at: string;
}

interface TicketInfo {
  canRedeem: boolean;
  description: string;
  id: string;
  name: string;
  price: number;
  priceUSD: number;
  quantity: number;
  season: string;
  status: string;
  type: string;
}

const LoaderWrapperWrapper = styled.div`
  position: relative;
  margin-top: 100px;
`;

const LoaderWrapper = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 120px;
  height: 120px;
  margin: -60px 0 0 -60px;
  color: ${({ theme }) => theme.colors.altColor};
  -webkit-animation: spin 4s linear infinite;
  -moz-animation: spin 4s linear infinite;
  animation: spin 4s linear infinite;

  @-moz-keyframes spin {
    100% {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

const StyledCanvas = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  height: 99vh;
  width: 100vw;
  overflow: hidden;
  z-index: 10;
`;

const StyledAvailability = styled.div`
  font-size: 1.2em;
  margin-bottom: 8px;

  b {
    color: ${({ theme }) => theme.colors.altColor};
    font-size: 1.2em;
    font-weight: 700;
  }

  @media (min-width: ${ViewportSizes.Phone}px) {
    margin-bottom: 16px;
  }
`;

const RegisterTicketButton = ({
  ticketId = "",
  jsconfTheme = true,
}: {
  ticketId?: string;
  jsconfTheme?: boolean;
}) => {
  const ref =
    useRef<HTMLCanvasElement>() as React.MutableRefObject<HTMLCanvasElement>;
  const { isLoading: isLoadingMe, data: user } = useQuery({
    queryKey: ["anonymousMe"],
    queryFn: anonymousMe,
    retry: false,
    cacheTime: 0,
  });
  const { isLoading: isLoadingMyTickets, data: myTickets } = useQuery({
    queryKey: ["anonymousTickets"],
    queryFn: anonymousTickets,
    retry: false,
    cacheTime: 0,
  }) as { isLoading: boolean; data?: AlreadyTicket[] };

  const { isLoading: isLoadingDataTicketInfo, data: ticketInfo } = useQuery({
    queryKey: ["ticket", ticketId],
    queryFn: async () => await getTicket(ticketId),
    retry: false,
    cacheTime: 0,
  }) as { isLoading: boolean; data?: TicketInfo };

  const [submitedTicket, setSubmitedTicket] = useState<
    RedeemedTicket | undefined
  >();
  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);

  const handleSubmit = async () => {
    setIsLoadingSubmit(true);
    const ticket = (await redeemTicket(ticketId)) as RedeemedTicket;
    setIsLoadingSubmit(false);
    if (ticket?.id) {
      setSubmitedTicket(ticket);
    }
  };

  useEffect(() => {
    if (submitedTicket?.id) {
      if (!ref.current) {
        return;
      }
      const myConfetti = confetti.create(ref.current, {
        resize: true,
        useWorker: true,
      });

      setTimeout(() => {
        const confettiColors = jsconfTheme ? ["#F0E040"] : ["#F45B69"];
        const end = Date.now() + 3 * 1000;

        function drawFrame() {
          void myConfetti({
            particleCount: 4,
            angle: 60,
            startVelocity: 50,
            spread: 80,
            origin: { x: 0, y: 0.45 },
            colors: confettiColors,
          });
          void myConfetti({
            particleCount: 4,
            angle: 120,
            startVelocity: 50,
            spread: 80,
            origin: { x: 1, y: 0.45 },
            colors: confettiColors,
          });

          if (Date.now() < end) {
            requestAnimationFrame(drawFrame);
          }
        }
        drawFrame();
      }, 1000);
    }
  }, [submitedTicket, jsconfTheme]);

  if (!ticketId) {
    return <></>;
  }

  if (
    submitedTicket?.id &&
    submitedTicket?.ownerId &&
    submitedTicket?.status === "not_redeemed" &&
    submitedTicket?.ticketId
  ) {
    return (
      <>
        <UpdateButton disabled>Ya estás registrado</UpdateButton>
        <StyledCanvas ref={ref} id="confetti" />
      </>
    );
  }

  if (isLoadingMe) {
    return (
      <LoaderWrapperWrapper>
        <LoaderWrapper>
          <Loader size={128} />
        </LoaderWrapper>
      </LoaderWrapperWrapper>
    );
  }

  if (!user?.id) {
    return (
      <div>
        <PrimaryStyledLink href="/tickets">Registrarme</PrimaryStyledLink>
      </div>
    );
  }

  if (isLoadingDataTicketInfo || isLoadingMyTickets) {
    return (
      <LoaderWrapperWrapper>
        <LoaderWrapper>
          <Loader size={128} />
        </LoaderWrapper>
      </LoaderWrapperWrapper>
    );
  }

  if (myTickets?.find((tmpTicket) => tmpTicket.ticketId === ticketId)) {
    return (
      <>
        <StyledAvailability>
          Hay <b>{ticketInfo?.quantity}</b> tickets disponibles
        </StyledAvailability>
        <UpdateButton disabled>Ya estás registrado</UpdateButton>
      </>
    );
  }

  if (ticketInfo?.id && !ticketInfo?.quantity) {
    return <UpdateButton disabled>Agotado</UpdateButton>;
  }

  if (ticketInfo?.canRedeem) {
    return (
      <>
        <StyledAvailability>
          Hay <b>{ticketInfo?.quantity}</b> tickets disponibles
        </StyledAvailability>
        <UpdateButton
          disabled={isLoadingSubmit}
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onClick={async () => {
            await handleSubmit();
          }}
        >
          Reservar
        </UpdateButton>
      </>
    );
  }

  return <></>;
};

export default RegisterTicketButton;
