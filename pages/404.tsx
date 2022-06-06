import type { NextPage } from "next";
import styled from "@emotion/styled";

export type PageProps = {};
const Container = styled.section`
  display: flex;
  flex-direction: column;
`;
const StyledBlackWrapp = styled.section`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 200px);
  background-color: ${({ theme }) => theme.elements.global.backgroundColor};
`;

const Home: NextPage<PageProps> = (props) => {
  return (
    <Container>
      <StyledBlackWrapp>Lo sentimos!</StyledBlackWrapp>
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
