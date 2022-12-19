import { Document } from "@contentful/rich-text-types";
import styled from "@emotion/styled";
import { lazy, Suspense } from "react";

import { ViewportSizes } from "../../../styles/theme";
import { H2 } from "../core/Typography";

const Description = lazy(async () => await import("../core/Description"));
const Image = lazy(async () => await import("../core/Image"));

type WhyCardProps =
  | {
      number: number;
      title?: string | undefined;
      description?:
        | {
            json?: Document | undefined;
          }
        | undefined;
      icon?: {
        url?: string | undefined;
        description?: string | undefined;
      };
      fullImage?:
        | {
            url?: string | undefined;
            description?: string | undefined;
          }
        | undefined;
    }
  | undefined;

const Container = styled.section<{ direction: boolean }>`
  padding: 16px 0px;
  padding-left: ${({ direction }) => (!direction ? "16px" : "0px")};
  padding-right: ${({ direction }) => (!direction ? "0px" : "16px")};
  display: flex;
  gap: 8px;
  flex-direction: ${({ direction }) => (!direction ? "row-reverse" : "row")};
  overflow: hidden;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 100%;
  width: 100vw;

  picture {
    order: 3;
  }

  img {
    margin-top: 28px;
    width: 100vw !important;
    max-height: 300px;
  }

  @media (min-width: ${ViewportSizes.Phone}px) {
    flex-wrap: nowrap;
    justify-content: space-between;
    flex-direction: ${({ direction }) => (!direction ? "row" : "row-reverse")};
    gap: 32px;
    padding: 48px 0px;
    padding-left: ${({ direction }) => (!direction ? "48px" : "0px")};
    padding-right: ${({ direction }) => (!direction ? "0px" : "48px")};

    picture {
      min-width: 400px;
    }
    img {
      margin-top: 115px;
      max-width: 611px;
      min-width: 400px;
      width: 100% !important;
    }
  }

  @media (min-width: ${ViewportSizes.TabletLandscape}) {
    picture {
      min-width: 600px;
    }
    img {
      min-width: 600px;
    }
  }
  @media (min-width: ${ViewportSizes.Desktop}px) {
    overflow: visible;
  }
`;

const HR = styled.hr`
  border-width: 1px;
  border-color: #f45b69;
  border-style: solid;
  width: 50%;
  background-color: #f45b69;
`;

const WrapperDescription = styled.section`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: calc(100% - 140px);
  gap: 32px 0px;
  order: 2;

  @media (min-width: ${ViewportSizes.Phone}px) {
    max-width: 450px;
  }
`;

const Number = styled.section<{ direction: boolean }>`
  font-family: "Koulen";
  font-style: normal;
  font-weight: 400;
  font-size: 124.914px;
  line-height: 125px;
  /* identical to box height, or 100% */
  display: flex;
  align-items: flex-start;
  color: #f0e040;
  width: 100px;
  margin-right: ${({ direction }) => (!direction ? "-6px" : "0px")};
  margin-left: ${({ direction }) => (direction ? "-30px" : "0px")};
  order: 1;

  @media (min-width: ${ViewportSizes.Phone}px) {
    min-width: 300px;
    order: 3;
    font-size: 341.766px;
    line-height: 342px;
    margin-right: ${({ direction }) => (!direction ? "-48px" : "0px")};
    margin-left: ${({ direction }) => (direction ? "-108px" : "0px")};
  }
`;

const WhyCard = (props: WhyCardProps) => {
  return (
    <Container direction={props?.number! % 2 === 0}>
      <WrapperDescription>
        <H2>{props?.title!}</H2>
        <Suspense fallback={null}>
          <Description data={props?.description?.json!} />
        </Suspense>
        <HR />
      </WrapperDescription>
      <Suspense fallback={null}>
        <Image
          desktop={props?.fullImage?.url}
          mobile={props?.fullImage?.url!}
          alt={props?.icon?.description! || ""}
          style={{
            borderRadius: "0px 32px 0px 0px",
            aspectRatio: "611 / 390",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </Suspense>
      <Number direction={props?.number! % 2 === 0}>0{props?.number!}</Number>
    </Container>
  );
};
export default WhyCard;
