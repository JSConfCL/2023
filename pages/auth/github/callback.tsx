import styled from "@emotion/styled";
import type { NextPage } from "next";
import { lazy } from "react";

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

const StyledBlackWrapper = styled.section`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 200px);
  background-color: ${({ theme }) => theme.elements.global.backgroundColor};
`;

const GithubAuth: NextPage = (props) => {
  return (
    <StyledBlackWrapper>
      <Container>Hi</Container>;
    </StyledBlackWrapper>
  );
};

export default GithubAuth;
