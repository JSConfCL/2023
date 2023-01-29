import { Global } from "@emotion/react";
import styled from "@emotion/styled";
import Atropos from "atropos/react";
import { AnimatePresence, motion, MotionProps } from "framer-motion";
import dynamic from "next/dynamic";
import { transparentize } from "polished";
import { Suspense, useEffect, useState } from "react";

import { ViewportSizes } from "../../../styles/theme";
import { GenericLink } from "../TicketSection/shared";

import { atroposCSS } from "./atroposStyles";
import { FakeTicketContainer } from "./components";

const SocialLinks = dynamic(async () => await import("./SocialLinks"), {
  ssr: false,
});

const GetTicket = styled.div`
  text-align: center;
  margin-bottom: 64px;
`;

const MotionContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
`;

const StyledAtropos = styled(Atropos)`
  width: 350px;
  height: 480px;

  @media (min-width: ${ViewportSizes.Phone}px) {
    width: 680px;
    height: 380px;
  }
`;

const TicketContainer = styled.div<{ bgColor: string }>`
  width: 350px;
  height: 480px;
  margin: 0 auto 16px;
  background: ${({ bgColor }) => bgColor};
  position: relative;
  cursor: pointer;
  overflow: hidden;

  @media (min-width: ${ViewportSizes.Phone}px) {
    width: 680px;
    height: 380px;
  }

  &:before {
    display: inline-block;
    width: 45px;
    height: 45px;
    background: black;
    left: -20px;
    top: 185px;
    content: "";
    position: absolute;
    border-radius: 50%;
    border-top: 8px solid transparent;
    border-left: 8px solid transparent;
    transform: rotate(315deg);
    z-index: 1;
  }

  &:after {
    display: inline-block;
    width: 45px;
    height: 45px;
    background: black;
    right: -20px;
    top: 185px;
    content: "";
    position: absolute;
    border-radius: 50%;
    border-top: 8px solid transparent;
    border-left: 8px solid transparent;
    transform: rotate(315deg);
    z-index: 1;
  }
`;

const TicketInfo = styled.div<{
  color: string;
  bgColor: string;
  altColor: string;
}>`
  color: ${({ color }) => color};
  width: calc(100% - 32px);
  height: calc(100% - 32px);
  position: relative;
  top: 16px;
  left: 16px;
  border: 8px solid ${({ altColor }) => altColor};

  @media (min-width: ${ViewportSizes.Phone}px) {
    background-position: 435px 154px;
  }

  &:before {
    display: inline-block;
    width: 65px;
    height: 65px;
    background: ${({ bgColor }) => bgColor};
    left: -40px;
    top: 150px;
    content: "";
    position: absolute;
    border-radius: 50%;
    border-bottom: 8px solid ${({ altColor }) => altColor};
    border-right: 8px solid ${({ altColor }) => altColor};
    border-top: 8px solid transparent;
    border-left: 8px solid transparent;
    transform: rotate(315deg);
  }

  &:after {
    display: inline-block;
    width: 65px;
    height: 65px;
    background: ${({ bgColor }) => bgColor};
    right: -40px;
    top: 150px;
    content: "";
    position: absolute;
    border-radius: 50%;
    border-bottom: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid ${({ altColor }) => altColor};
    border-left: 8px solid ${({ altColor }) => altColor};
    transform: rotate(315deg);
  }
`;

const TicketSection = styled.div`
  padding: 16px 16px 0;
  display: flex;
`;

const TicketHeader = styled.div`
  margin-top: 16px;
  padding: 0 16px;
  display: flex;
  align-items: center;
`;

const StyledTr = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const StyledTd = styled.div<{ bgColor: string }>`
  margin: 0 24px 0 26px;
  background: ${({ bgColor }) => transparentize(0.2, bgColor)};
  flex: 1 1 100%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  min-width: 60px;
`;

const SocialLinkWrapper = styled.div`
  height: 60px;
`;

const TicketUsername = styled.h2<{ altColor: string }>`
  color: ${({ altColor }) => altColor};
`;

const TicketName = styled.h2`
  font-size: 24px;
  line-height: 24px;
`;

const Title = styled.h1`
  font-size: 48px;
  line-height: 32px;
  text-align: left;

  @media (min-width: ${ViewportSizes.Phone}px) {
    font-size: 60px;
    line-height: 60px;
  }
`;

const SubTitle = styled.h2`
  font-size: 20px;
  line-height: 20px;
  text-align: left;
  @media (min-width: ${ViewportSizes.Phone}px) {
    font-size: 26px;
    line-height: 26px;
  }
`;

const StyledLineContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: ${ViewportSizes.Phone}px) {
    flex-direction: row;
  }
`;

const StyledLine = styled.div<{ altColor: string; bgColor: string }>`
  background: ${({ bgColor }) => transparentize(0.2, bgColor)};
  border: 1px solid ${({ altColor }) => altColor};
  text-align: center;
  padding: 8px 0;
  flex: 1 1 50%;

  @media (min-width: ${ViewportSizes.Phone}px) {
    flex: 1 1 25%;
    &:first-of-type {
      margin-left: 0;
    }
  }
`;

const HumanTicket: { [K: string]: string } = {
  jsconf: "JSConf Chile",
  meetup: "Meetup",
  workshop: "Workshop",
};

const HumanSeasons: { [K: string]: string } = {
  early_bird: "Compra Temprana",
  sale: "Venta",
};

const HumanTypes: { [K: string]: string } = {
  student: "Estudiante",
  adult: "Adulto",
};

const HumanStatus: { [K: string]: string } = {
  created: "Creado",
  not_paid: "Por Pagar",
  failed: "Fallido",
  eliminated: "Eliminado",
  reserved: "Reservado",
  not_redeemed: "Por Canjear",
  offered: "Ofrecido",
  redeemed: "Canjeado",
  // ToCheck
  on_sale: "A la venta",
};

const StyledBackgroundImage = styled.div<{ color: string }>`
  background-color: ${({ color }) => color};
  --svg: url("/images/logo.svg");
  background-image: var(--svg);
  -webkit-mask: var(--svg);
  mask: var(--svg);

  position: absolute;
  height: 120%;
  width: 120%;
  bottom: -20%;
  right: -20%;
  color: 'red'
  background-size: cover;
  mask-position: 106px 304px;
  mask-repeat: no-repeat;

  @media (min-width: ${ViewportSizes.Phone}px) {
    background-size: cover;
    mask-position: 450px 205px;
    mask-repeat: no-repeat;
  }
`;

const normalizedString = (str: string) =>
  str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

const useAnimation = (): MotionProps => {
  return {
    layout: "position" as "position",
    initial: { opacity: 0, scale: 0.9, translateY: 50 },
    animate: { opacity: 1, scale: 1, translateY: 0 },
    exit: { opacity: 0, scale: 0.9, translateY: 50 },
    transition: {
      duration: 1.5,
    },
  };
};

export const Ticket = ({
  title = "JSConf Chile",
  subtitle = "Feb.03-04 2023 | Santiago",
  userTicketId,
  userPhoto,
  userUsername,
  userName,
  ticketName,
  ticketType,
  ticketSeason,
  userTicketStatus,
  fadeIn,
  showGetTicket = false,
  showEdit = true,
  showSocialLinks = true,
  selectedTheme = "jsconf",
}: {
  title?: string;
  subtitle?: string;
  userTicketId: string;
  userPhoto: string | null;
  userUsername: string | null;
  userName: string | null;
  ticketName: string;
  ticketType: string;
  ticketSeason: string;
  userTicketStatus: string;
  fadeIn: boolean;
  showGetTicket?: boolean;
  showEdit?: boolean;
  showSocialLinks?: boolean;
  selectedTheme?: "jsconf" | "workshop" | "meetup";
}) => {
  const [loaded, setLoaded] = useState(!fadeIn);
  const animation = useAnimation();

  const theme = {
    jsconf: {
      color: "white",
      altColor: "#F0E040",
      bgColor: "#1E2019",
      logoColor: "black",
    },
    workshop: {
      color: "white",
      altColor: "#F0E040",
      bgColor: "#000",
      logoColor: "white",
    },
    meetup: {
      color: "#333",
      altColor: "#F45B69",
      bgColor: "white",
      logoColor: "#333",
    },
  }[selectedTheme];

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <Global styles={[atroposCSS]} />
      <AnimatePresence mode="sync" initial={fadeIn}>
        {!loaded && <FakeTicketContainer {...animation} />}
        {loaded && (
          <MotionContainer {...animation}>
            <StyledAtropos
              highlight
              activeOffset={40}
              shadowScale={1.5}
              shadowOffset={100}
            >
              <TicketContainer
                bgColor={theme.bgColor}
                data-atropos-opacity="1;0.85"
                data-atropos-offset="-5"
              >
                <StyledBackgroundImage
                  color={theme.logoColor}
                  data-atropos-offset="-10"
                />
                <TicketInfo
                  color={theme.color}
                  bgColor={theme.bgColor}
                  altColor={theme.altColor}
                  data-atropos-offset="2"
                >
                  <StyledTr data-atropos-offset="2">
                    <TicketHeader>
                      <div style={{ height: "60px" }} data-atropos-offset="8">
                        <StyledImg src={userPhoto ?? ""} />
                      </div>
                      <div style={{ paddingLeft: "16px" }}>
                        <TicketUsername
                          altColor={theme.altColor}
                          data-atropos-offset="5"
                        >
                          {userUsername ? "@" + userUsername : ""}
                        </TicketUsername>
                        <TicketName data-atropos-offset="5">
                          {userName ? normalizedString(userName) : ""}
                        </TicketName>
                      </div>
                    </TicketHeader>
                    <StyledTd bgColor={theme.bgColor} data-atropos-offset="5">
                      <Title>{title}</Title>
                      <SubTitle>{subtitle}</SubTitle>
                    </StyledTd>
                    <TicketSection style={{ padding: 0 }}>
                      <StyledLineContainer data-atropos-offset="3">
                        <StyledLine
                          altColor={theme.altColor}
                          bgColor={theme.bgColor}
                          data-atropos-offset="1"
                        >
                          {HumanTicket[selectedTheme]}
                        </StyledLine>
                        <StyledLine
                          altColor={theme.altColor}
                          bgColor={theme.bgColor}
                          data-atropos-offset="2"
                        >
                          {HumanTypes[ticketType] ?? "General"}
                        </StyledLine>
                        <StyledLine
                          altColor={theme.altColor}
                          bgColor={theme.bgColor}
                          data-atropos-offset="3"
                        >
                          {HumanSeasons[ticketSeason] ?? "General"}
                        </StyledLine>
                        <StyledLine
                          altColor={theme.altColor}
                          bgColor={theme.bgColor}
                          data-atropos-offset="4"
                        >
                          {HumanStatus[userTicketStatus] ?? ""}
                        </StyledLine>
                      </StyledLineContainer>
                    </TicketSection>
                  </StyledTr>
                </TicketInfo>
              </TicketContainer>
            </StyledAtropos>
            {showSocialLinks ? (
              <SocialLinkWrapper>
                <Suspense fallback={null}>
                  <SocialLinks
                    userTicketId={userTicketId}
                    showEdit={showEdit && selectedTheme === "jsconf"}
                  />
                </Suspense>
              </SocialLinkWrapper>
            ) : null}
            {showGetTicket ? (
              <GetTicket>
                <GenericLink href="/tickets">Obtener Tickets</GenericLink>
              </GetTicket>
            ) : null}
          </MotionContainer>
        )}
      </AnimatePresence>
      {/* <AnimatePresence mode="popLayout" initial={false}> */}
    </>
  );
};
