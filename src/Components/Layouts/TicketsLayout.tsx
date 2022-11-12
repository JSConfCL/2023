import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { ReactElement } from "react-markdown/lib/react-markdown";
import { ViewportSizes } from "../../../styles/theme";
const TicketNavBar = dynamic(async () => await import("./TicketNavBar"), {
  ssr: false,
});

const StyledBlackWrapp = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 60vh;
  display: flex;
  min-height: fit-content;
  align-items: center;
  background-color: ${({ theme }) => theme.elements.global.backgroundColor};
  flex: 1;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100vw;
  /* min-height: min(90vh, 500px); */
  max-width: 1440px;
  padding-left: 1rem;
  padding-right: 1rem;
  @media (min-width: ${ViewportSizes.Phone}px) {
    padding-left: 3rem;
    padding-right: 3rem;
  }
  @media (min-width: ${ViewportSizes.TabletLandscape}px) {
  }
  @media (min-width: ${ViewportSizes.Desktop}px) {
    gap: 32px;
  }
`;

const Spacer = styled.div`
  height: 100px;
`;

export const TicketsLayout = (page: ReactElement) => {
  return (
    <StyledBlackWrapp>
      <Suspense fallback={null}>
        <TicketNavBar />
      </Suspense>
      <Container>
        <Spacer />
        {page}
      </Container>
    </StyledBlackWrapp>
  );
};
