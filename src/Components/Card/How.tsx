import styled from "@emotion/styled";
import { Document } from "@contentful/rich-text-types";
import { PrimaryStyledLink } from "../Links";
import { H2 } from "../core/Typography";
import Description from "../core/Description";
import Image from "../core/Image";
import { JSConfLogo } from "../svgs/logo";

type HowCardProps =
  | {
      number: number;
      title?: string | undefined;
      description?:
        | {
            json?: Document | undefined;
          }
        | undefined;
      image?: {
        url?: string | undefined;
        description?: string | undefined;
      };
      button?:
        | {
            link?: string;
            contenido?: string;
          }
        | undefined;
      url?: string | undefined;
      subtext?: string | undefined;
      mapa?: {
        lat?: number | undefined;
        lng?: number | undefined;
      };
    }
  | undefined;

const Container = styled.section<{ direction: boolean }>`
  padding: 16px;
  display: flex;
  gap: 32px;
  flex-direction: column-reverse;
  overflow: hidden;
  margin-bottom: 24px;
  @media (min-width: 769px) {
    flex-wrap: nowrap;
    padding: 48px;
    flex-direction: ${({ direction }) => (!direction ? "row" : "row-reverse")};
  }

  @media (min-width: 1560px) {
    overflow: visible;
  }
`;

const WrapperDescription = styled.section`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 100%;
  gap: 32px 0px;

  > h2 {
    color: #f45b69;
  }
  p {
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.5px;
    margin: 16px 0px;
  }

  @media (min-width: 769px) {
    max-width: 400px;
    min-width: 400px;
  }
`;

const ImageContainer = styled.section`
  position: relative;
  max-width: 830px;
  width: 100%;
  aspect-ratio: 830 / 456;
  margin-bottom: 16px;

  svg {
    width: 40px;
    position: absolute;
    z-index: 3;
    margin: 16px;
  }
  .play img {
    width: 50px;
    height: 50px;
    bottom: calc(50% - 40px);
    right: calc(50% - 40px);
  }

  @media (min-width: 769px) {
    height: 450px;
    width: calc(100% - 400px);
    svg {
      width: 40px;
      margin: 16px;
    }
  }
`;

const WhiteBlock = styled.section<{ isClickeable: boolean }>`
  position: relative;
  max-width: 830px;
  width: 100vw;
  background-color: white;
  z-index: 2;
  cursor: ${({ isClickeable }) => (isClickeable ? "pointer" : "inherit")};

  section > picture > img {
    width: calc(100% - 16px);
    max-width: 830px;
    min-width: 230px;
    height: 300px;
  }

  @media (min-width: 769px) {
    img {
      height: 460px;
      max-width: 830px;
      width: 100%;
    }
  }
`;

const Text = styled.p`
  position: absolute;
  z-index: 3;
  font-family: "Koulen";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 58px;
  display: flex;
  align-items: center;
  color: #f0e040;
  bottom: -48px;
  right: 0px;

  @media (min-width: 769px) {
    font-size: 80px;
    line-height: 145px;
    bottom: -90px;
    right: 48px;
  }
`;

const HowCard = (props: HowCardProps) => {
  const onHandleClick = () => {
    if (props?.url) {
      window.open(props?.url, "_blank");
    }
  };

  return (
    <Container direction={props?.number! % 2 === 0}>
      <WrapperDescription>
        <H2>{props?.title!}</H2>
        <Description data={props?.description?.json!} />
        {props?.button?.link! && (
          <PrimaryStyledLink href={props?.button?.link!}>
            {props?.button?.contenido!}
          </PrimaryStyledLink>
        )}
      </WrapperDescription>
      {props?.image && (
        <ImageContainer>
          <WhiteBlock
            onClick={onHandleClick}
            isClickeable={Boolean(props?.url!)}
          >
            <Image
              mobile={props?.image?.url!}
              alt={props?.image?.description! || ""}
              style={{
                borderRadius: "0px 32px 0px 0px",
                aspectRatio: "830 / 456",
                objectFit: "cover",
                objectPosition: "bottom",
                mixBlendMode: "multiply",
                zIndex: 3,
                position: "absolute",
              }}
            />
          </WhiteBlock>

          <Image
            mobile="/images/image-background.png"
            alt="background"
            className="background"
            style={{
              position: "absolute",
              zIndex: 1,
              bottom: "-64px",
              right: "-64px",
            }}
          />
          {props?.subtext && <Text>{props.subtext}</Text>}
          {props?.url! && (
            <Image
              className="play"
              mobile="/images/play.png"
              alt="background play"
              style={{
                position: "absolute",
                zIndex: 4,
              }}
            />
          )}
          <JSConfLogo />
        </ImageContainer>
      )}
    </Container>
  );
};
export default HowCard;
