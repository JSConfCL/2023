import { lazy, Suspense } from "react";
import styled from "@emotion/styled";
import { Document } from "@contentful/rich-text-types";
import { B, H2 } from "../core/Typography";
import { ViewportSizes } from "../../../styles/theme";

const Description = lazy(() => import("../core/Description"));
const ExtendedDescription = lazy(() => import("../core/ExtendedDescription"));
const Image = lazy(() => import("../core/Image"));
const ButtonLoginCollection = lazy(
  () => import("../Collection/ButtonLoginCollection")
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

const CardContainer = styled.section`
  margin: 0 16px;
  font-size: 40px;
  picture {
    width: 100% !important;
  }
  img {
    aspect-ratio: 0 !important;
  }
  &:nth-of-type(2) {
    picture,
    button {
      display: none;
    }
  }
  &:nth-of-type(4), &:nth-of-type(6) {
    picture,
    button {
      display: none;
    }

    h2 {
      color: #A5A6A3;
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
        display: flex;
        align-self: baseline;
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
      img {
        width: 100%;
      }
    }
  }
  @media (min-width: ${ViewportSizes.TabletLandscape}) {
    padding: 0 48px;
    picture {
      width: 100%;
      margin-top: 1rem;
    }
    img {
      aspect-ratio: 0 !important;
      img {
        width: 100%;
      }
    }
    &:nth-of-type(2) {
      img {
        display: none;
      }
    }
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
        height: 73vh;
      }
    }
  }
  @media (min-width: ${ViewportSizes.Desktop}px) {
    display: grid;
    grid-template-columns: 70% 30%;
    /*height: 60vh;*/
    padding-left: 48px;
    padding-right: 48px;

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
        height: 73vh;
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
`;

const HR = styled.hr`
  border-width: 1px;
  border-color: #f45b69;
  border-style: solid;
  width: 25%;
  background-color: #f45b69;
  margin-top: 1.2rem;
}
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
  }
  @media (max-width: ${ViewportSizes.TabletLandscape}px) {
    max-width: 100%;
    margin-bottom: 2rem;

    h2 {
      font-size: 65px;
    }
  }
  @media (min-width: ${ViewportSizes.Desktop}px) {
    padding-top: 3rem;
    p {
      width: 60%;
      font-size: 1.2rem;
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

  @media (max-width: ${ViewportSizes.Phone}px) {
    h2 {
      font-size: 40px !important;
    }
  }
  @media (max-width: ${ViewportSizes.TabletLandscape}px) {
    h2 {
      font-size: 65px;
    }
  }
  @media (min-width: ${ViewportSizes.Desktop}px) {
    h2 {
      font-size: 80px;
      margin: 0 0 3rem 0;
    }
  }
`;

const LoginButtonInfo = [
  {
    id: 1,
    text: "Ingresa con Github",
    image: "/images/github-icon.svg",
  },
  {
    id: 2,
    text: "Ingresa con Gmail",
    image: "/images/gmail-icon.svg",
  },
  {
    id: 3,
    text: "Ingresa con tu Email",
    image: "/images/email-icon.svg",
  },
];

const TicketCard = (props: TicketCardProps) => {
  return (
    <CardContainer>
      <WrapperDescription>
        <Title>
          <Number />
          <H2>{props?.title!}</H2>
        </Title>
        <Suspense fallback={null}>
          <Description data={props?.description?.json!} />
        </Suspense>
        <HR />
      </WrapperDescription>

      <Suspense fallback={null}>
        <Image
          desktop={props?.fullImage?.url!}
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