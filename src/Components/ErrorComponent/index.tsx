import type { NextPage } from "next";
import styled from "@emotion/styled";
import { H1, P } from "../core/Typography";
import { PrimaryStyledLink } from "../Links";
import Image from "../core/Image";
import { ViewportSizes } from "../../../styles/theme";

const StyledBlackWrapp = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 150ms ease-in-out;
  align-items: center;
  @media (min-width: ${ViewportSizes.Phone}px) {
    gap: 4rem;
  }

  @media (min-width: ${ViewportSizes.TabletLandscape}px) {
    gap: 2rem;
  }

  @media (min-width: ${ViewportSizes.Desktop}px) {
    gap: 2rem;
  }
`;

const ImageWrapper = styled.section`
  width: 50%;
  @media (min-width: ${ViewportSizes.Phone}px) {
    width: 60%;
  }

  @media (min-width: ${ViewportSizes.TabletLandscape}px) {
    width: 90%;
  }

  @media (min-width: ${ViewportSizes.Desktop}px) {
    width: 100%;
  }
`;
const H1404 = styled(H1)`
  font-size: 70px;
  @media (min-width: ${ViewportSizes.Phone}px) {
    font-size: 120px;
  }

  @media (min-width: ${ViewportSizes.TabletLandscape}px) {
    font-size: 120px;
  }

  @media (min-width: ${ViewportSizes.Desktop}px) {
    font-size: 140px;
  }
`;

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  gap: 3rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1440px;
  padding-left: 5rem;
  padding-right: 5rem;
  text-align: center;
`;

export const ErrorComponent = ({
  errorMessage,
  url = "/",
}: {
  errorMessage: string;
  url?: string;
}) => {
  return (
    <StyledBlackWrapp>
      <ImageWrapper>
        <Image
          mobile="https://images.ctfassets.net/1kfhsqlc8ewi/vWYrXTF1XIpXzCrCOKate/41a1703baf107004ff6f08719a69c8d7/404.svg"
          alt=""
        />
      </ImageWrapper>
      <H1404>OOPS!</H1404>
      <Wrapper>
        <P>{errorMessage}</P>
        <PrimaryStyledLink href={url}>Volver al home</PrimaryStyledLink>
      </Wrapper>
    </StyledBlackWrapp>
  );
};