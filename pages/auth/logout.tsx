import styled from "@emotion/styled";
import { useAtom } from "jotai";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { accessTokenAtom } from "../../src/helpers/auth";

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

const GithubAuth: NextPage = (props) => {
  const { isReady } = useRouter();
  const [accessToken, setAccessToken] = useAtom(accessTokenAtom);
  useEffect(() => {
    if (isReady) {
      setAccessToken(null);
    }
  }, [isReady, setAccessToken]);
  return (
    <Container>
      <StyledBlackWrapp />
    </Container>
  );
};

export default GithubAuth;
