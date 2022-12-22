import styled from "@emotion/styled";

import { ErrorComponent } from "../src/Components/ErrorComponent";
import { DefaultPageLayout } from "../src/Components/Layouts/DefaultPagelayout";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 5rem;
  min-height: 60vh;
  justify-content: center;
`;

export default function Page404() {
  return (
    <Container>
      <ErrorComponent errorMessage="La página que estas buscando no existe." />
    </Container>
  );
}

Page404.getLayout = DefaultPageLayout;
