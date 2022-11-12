import { lazy, Suspense } from "react";
import styled from "@emotion/styled";
import { Document } from "@contentful/rich-text-types";
import { H2 } from "../core/Typography";
import { ViewportSizes } from "../../../styles/theme";
import Description from "../core/Description";
import Image from "../core/Image";

const ButtonLoginCollection = lazy(
  async () => await import("../Collection/ButtonLoginCollection")
);

type TicketCardProps =
  | {
      number: number;
      title?: string | undefined;
      description?:
        | {
            json?: Document | undefined;
          }
        | undefined;
      extendedDescription?:
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

const CardContainer = styled.section`
  margin: 0 16px;
  picture {
    width: 100% !important;
  }
  img {
    aspect-ratio: 0 !important;
    width: 100%;
  }
  &:nth-of-type(2) {
    picture,
    button {
      display: none;
    }
  }
  &:nth-of-type(4),
  &:nth-of-type(6),
  &:nth-of-type(8) {
    picture,
    button {
      display: none;
    }

    h2 {
      color: #a5a6a3;
      text-decoration: line-through;
    }
  }
  &:nth-of-type(5),
  &:nth-of-type(7) {
    div {
      &:after {
        content: "✅";
        font-size: 2rem;
        margin: 0 1rem;
      }
    }
    h2 {
      text-decoration: line-through;
    }
    picture {
      display: none;
    }
    &:nth-of-type(5) {
      button {
        display: flex;
      }
    }
  }
  @media (max-width: ${ViewportSizes.Phone}px) {
    padding: 0 16px;
    margin-bottom: 0 !important;
    picture {
      width: 100%;
      margin-top: 1rem;
    }
    img {
      aspect-ratio: 0 !important;
      width: 100%;
    }
  }
  @media (min-width: ${ViewportSizes.Phone}px) and (max-width: ${ViewportSizes.TabletLandscape}px) {
    padding: 0 3rem;
  }
  @media (min-width: ${ViewportSizes.TabletLandscape}px) {
    padding: 0 48px;
    display: grid;
    grid-template-columns: 70% 30%;
    /*height: 60vh;*/
    padding: 0 48px;

    img {
      width: 100%;
      border-radius: 0 !important;
      aspect-ratio: 0 !important;
    }

    &:nth-of-type(2),
    &:nth-of-type(4),
    &:nth-of-type(6),
    &:nth-of-type(8) {
      button {
        display: none;
      }
      picture {
        display: block;
        width: 100%;
        border-radius: 0px 32px 0px 0px !important;
        aspect-ratio: 611 / 390 !important;
        object-fit: cover;
        object-position: center center;
        opacity: 1;
        clip-path: polygon(100% 0%, 100% 69%, 0% 69%, 0% 0%);
        margin-top: 1rem;
        height: 75vh;
      }
    }

    &:nth-of-type(3) {
      picture {
        display: none;
      }
    }

    &:nth-of-type(5),
    &:nth-of-type(7) {
      div {
        &:after {
          content: "✅";
          font-size: 4rem;
          margin: 0 1rem;
          display: flex;
          align-self: baseline;
        }
      }
    }
  }
`;

const HR = styled.hr`
  border-width: 1px;
  border-color: #f45b69;
  border-style: solid;
  width: 25%;
  background-color: #f45b69;
  margin-top: 1.2rem;
`;

const WrapperDescription = styled.section`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: calc(100% - 140px);

  p {
    max-width: 100%;
    margin-bottom: 0.7rem;
    font-size: 1rem;
    line-height: 19.2px;
  }
  @media (max-width: ${ViewportSizes.Phone}px) {
    margin-bottom: 0;
    max-width: 100%;
  }
  @media (max-width: ${ViewportSizes.TabletLandscape}px) {
    max-width: 100%;
    margin-bottom: 2rem;
  }
  @media (min-width: ${ViewportSizes.Desktop}px) {
    padding-top: 3rem;
    p {
      width: 60%;
      font-size: 1.25rem;
      line-height: 25px;
    }
  }
`;

const Number = styled.section`
  color: #f0e040;
  font-family: "Koulen";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 125px;

  @media (max-width: ${ViewportSizes.TabletLandscape}px) {
    font-size: 65px;
  }
  @media (min-width: ${ViewportSizes.Desktop}px) {
    font-size: 80px;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  h2 {
    font-size: 31px;
  }

  @media (min-width: ${ViewportSizes.Phone}px) {
    h2 {
      font-size: 40px;
    }
  }
  @media (min-width: ${ViewportSizes.TabletLandscape}px) {
    h2 {
      font-size: 40px;
    }
  }
  @media (min-width: ${ViewportSizes.Desktop}px) {
    h2 {
      font-size: 80px;
      margin: 0 0 3rem 0;
    }
  }
`;

const TicketCard = (props: TicketCardProps) => {
  return (
    <CardContainer>
      <WrapperDescription>
        <Title>
          <Number />
          <H2>{props?.title!}</H2>
        </Title>
        <Description data={props?.description?.json!} />
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
        <ButtonLoginCollection />
      </Suspense>
    </CardContainer>
  );
};
export default TicketCard;
