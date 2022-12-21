import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import { Suspense, ReactElement } from "react";

import { ViewportSizes } from "../../../styles/theme";
import { NavBarProps } from "../NavBar/InternalNavBar";
import { StyledWrapperSuspense } from "../NavBar/components";

const TicketNavBar = dynamic(async () => await import("../NavBar/NavBar"), {
  ssr: false,
});

export const InternalPageTitle = styled.h2`
  font-family: "Koulen";
  font-style: normal;
  font-weight: 400;
  display: inline-block;
  line-height: 1;
  transition-duration: 250ms;
  transition-property: font-size;
  font-size: 2.5rem;
  margin-bottom: 16px;

  @media (min-width: ${ViewportSizes.TabletLandscape}px) {
    font-size: 2.2rem;
    margin-bottom: 32px;
  }
`;
export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 1440px;
  flex: 1;
  min-height: calc(100vh - 600px);
`;

export const StyledBlackWrap = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.elements.global.backgroundColor};
`;

export interface LayoutPageProps extends React.ComponentPropsWithoutRef<"div"> {
  navData: NavBarProps;
}

export interface PageProps extends ReactElement {
  props: LayoutPageProps;
}

export const DefaultPageLayout = (page: PageProps) => {
  return (
    <StyledBlackWrap>
      <Suspense fallback={<StyledWrapperSuspense />}>
        <TicketNavBar />
      </Suspense>
      <Container>{page}</Container>
    </StyledBlackWrap>
  );
};
