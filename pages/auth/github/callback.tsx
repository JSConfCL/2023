import styled from "@emotion/styled";
import type { NextPage } from "next";
import { H1, P } from "../../../src/Components/core/Typography";
import { useRouter } from "next/router";
import Image from "../../../src/Components/core/Image";
import { PrimaryStyledLink } from "../../../src/Components/Links";
import { ErrorComponent } from "../../../src/Components/ErrorComponent";
import { finishGithubLogin } from "../../../src/helpers/API";
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { accessTokenAtom } from "../../../src/helpers/auth";
import { useAtom } from "jotai";

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

const ActuallyRun = () => {
  const { query, replace } = useRouter();
  const [error, setError] = useState(false);
  const [accessToken, setAccessToken] = useAtom(accessTokenAtom);
  const mutation = useMutation(finishGithubLogin, {
    onSuccess: ({ token }) => {
      console.log("token", { token });
      setAccessToken(token);
      replace("/tickets");
    },
  });

  useEffect(() => {
    if (query.code) {
      mutation.mutate({ code: query.code as string });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (mutation.error) {
    return (
      <ErrorComponent
        url="/tickets"
        errorMessage="Ocurrió un error al intentar iniciar sesión con tu cuenta. Prueba intentando nuevamente."
      />
    );
  }

  return null;
};

const GithubAuth: NextPage = (props) => {
  const { isReady } = useRouter();
  return (
    <Container>
      <StyledBlackWrapp>{isReady && <ActuallyRun />}</StyledBlackWrapp>
    </Container>
  );
};

export default GithubAuth;
