import { lazy, Suspense } from "react";
import type { NextPage } from "next";
import styled from "@emotion/styled";
import { H1, P } from "../src/Components/core/Typography";
import { PrimaryStyledLink } from "../src/Components/Links";

const Image = lazy(() => import("../src/Components/core/Image"));

export type PageProps = {};
const Container = styled.section`
  display: flex;
  flex-direction: column;
`;
const StyledBlackWrapp = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh);
  gap: 32px 0px;
  background-color: ${({ theme }) => theme.elements.global.backgroundColor};
`;

const Home: NextPage<PageProps> = (props) => {
  return (
    <Container>
      <StyledBlackWrapp>
        <Suspense fallback={null}>
          <Image
            mobile="https://images.ctfassets.net/1kfhsqlc8ewi/vWYrXTF1XIpXzCrCOKate/41a1703baf107004ff6f08719a69c8d7/404.svg"
            alt=""
          />
        </Suspense>
        <Suspense fallback={null}>
          <H1>OOPS!</H1>

          <P>
            <b>JSconf</b> es un evento Open Source, sin fines de lucro,
            realizado por la comunidad y para la comunidad.
          </P>

          <PrimaryStyledLink href="/">GO HOME</PrimaryStyledLink>
        </Suspense>
      </StyledBlackWrapp>
    </Container>
  );
};

export async function getStaticProps() {
  const props: PageProps = {};

  return {
    props,
  };
}

export default Home;
