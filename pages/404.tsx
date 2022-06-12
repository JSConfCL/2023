import type { NextPage } from "next";
import styled from "@emotion/styled";
import Image from "../src/Components/core/Image";
import { H1, P } from "../src/Components/core/Typography";
import { SecondaryButton } from "../src/Components/Button";
import { PrimaryStyledLink } from "../src/Components/Links";

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
        <Image mobile="/images/404.svg" alt="" />
        <H1>OOPS!</H1>

        <P>
          <b>JSconf</b> es un evento Open Source, sin fines de lucro, realizado
          por la comunidad y para la comunidad.
        </P>

        <PrimaryStyledLink href="/">GO HOME</PrimaryStyledLink>
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
