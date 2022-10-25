import styled from "@emotion/styled";
import type { NextPage } from "next";
import { ErrorComponent } from "../src/Components/ErrorComponent";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 5rem;
  min-height: 60vh;
  justify-content: center;
`;

const Page404: NextPage = () => {
  return (
    <Container>
      <ErrorComponent errorMessage="La página que estas buscando no existe." />
    </Container>
  );
};

export default Page404;
