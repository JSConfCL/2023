import { lazy, Suspense } from "react";
import styled from "@emotion/styled";
import { Document } from "@contentful/rich-text-types";
import { H2 } from "../core/Typography";
import { PrimaryStyledLink } from "../Links";

const Description = lazy(() => import("../core/Description"));

type SponsorCardProps =
  | {
      number: number;
      name?: string | undefined;
      description?:
        | {
            json?: Document | undefined;
          }
        | undefined;
      price?: number | undefined;
    }
  | undefined;

const Container = styled.section`
  padding: 16px 0px;
  display: flex;
  gap: 8px;
  max-width: 100%;
  padding: 16px;
  width: 100vw;

  @media (min-width: 769px) {
    gap: 32px;
    padding: 48px 0px;
  }
  @media (min-width: 1560px) {
    overflow: visible;
  }
`;

const WrapperDescription = styled.section`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: calc(100%);
  padding-top: 0px;
  p {
    padding: 8px 0px;
  }
  button {
    max-width: 400px;
    width: 100%;
    padding: 40px 16px;
  }

  @media (min-width: 769px) {
    max-width: 615px;
    padding-top: 64px;
  }
`;

const Number = styled.section<{ number: number }>`
  font-family: "Koulen";
  font-style: normal;
  font-weight: 400;
  font-size: 124.914px;
  line-height: 125px;
  /* identical to box height, or 100% */
  display: flex;
  align-items: flex-start;
  color: #f0e040;
  text-align: right;
  width: 130px;
  margin-left: -46px;

  @media (min-width: 769px) {
    min-width: 300px;
    font-size: 341.766px;
    line-height: 342px;
    margin-left: ${({ number }) => `${number * 60}px`};
  }

  @media (min-width: 1025px) {
    margin-left: ${({ number }) => `${number * 150}px`};
  }
`;

const StyledPrice = styled.section`
  letter-spacing: 0.5px;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #f45b69;
  font-family: "Barlow";
`;

const SponsorCard = (props: SponsorCardProps) => {
  return (
    <Container>
      <Number number={(4 - props?.number!) % 3}>0{props?.number!}</Number>
      <WrapperDescription>
        <H2>{props?.name!}</H2>
        {props?.price && <StyledPrice>USD ${props?.price}</StyledPrice>}
        <Suspense fallback={null}>
          <Description data={props?.description?.json!} />
        </Suspense>
        <PrimaryStyledLink
          href={`mailto:sponsors@jsconf.cl?subject=${props?.name!}`}
        >
          Sponsors Registration
        </PrimaryStyledLink>
      </WrapperDescription>
    </Container>
  );
};
export default SponsorCard;
