import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { ReactElement } from "react-markdown/lib/react-markdown";
import { StyledWrapperSuspense } from "../NavBar/components";
import { NavBarProps } from "../NavBar/InternalNavBar";

const TicketNavBar = dynamic(async () => await import("../NavBar/NavBar"), {
  ssr: false,
});

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 1440px;
  min-height: calc(100vh - 600px);
`;
export const StyledBlackWrapp = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.elements.global.backgroundColor};
`;

export interface LayoutPageProps extends React.ComponentPropsWithoutRef<"div"> {
  navData: NavBarProps;
}
export interface PageProps extends ReactElement {
  props: LayoutPageProps;
}

export const DefaultPagelayout = (page: PageProps) => {
  return (
    <StyledBlackWrapp>
      <Suspense fallback={<StyledWrapperSuspense />}>
        <TicketNavBar />
      </Suspense>
      <Container>{page}</Container>
    </StyledBlackWrapp>
  );
};
