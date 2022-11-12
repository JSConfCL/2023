import { lazy, Suspense } from "react";
import styled from "@emotion/styled";
import { Document } from "@contentful/rich-text-types";
import { PrimaryStyledLink } from "../Links";
import { H2 } from "../core/Typography";
import { JSConfLogo } from "../svgs/logo";
import { ViewportSizes } from "../../../styles/theme";

const Description = lazy(async () => await import("../core/Description"));
const Image = lazy(async () => await import("../core/Image"));
const GoogleMapReact = lazy(async () => await import("google-map-react"));

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
      GM_KEY: string;
      subtext?: string | undefined;
      mapa?: {
        lat?: number | undefined;
        lon?: number | undefined;
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
  overflow: visible;

  @media (min-width: ${ViewportSizes.Phone}px) {
    flex-wrap: nowrap;
    padding: 48px;
    flex-direction: ${({ direction }) => (!direction ? "row" : "row-reverse")};
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

  @media (min-width: ${ViewportSizes.Phone}px) {
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

  @media (min-width: ${ViewportSizes.Phone}px) {
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

  @media (min-width: ${ViewportSizes.Phone}px) {
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

  @media (min-width: ${ViewportSizes.Phone}px) {
    font-size: 80px;
    line-height: 145px;
    bottom: -90px;
    right: 48px;
  }
`;

const StyledWrapperMap = styled.section`
  position: relative;
  border-radius: 0px 32px 0px 0px;
  width: 100vw;
  height: 100vh;
  max-height: 460px;

  > div > div {
    border-radius: 0px 32px 0px 0px;
    z-index: 2;
  }
`;

const StyledMarker = styled.section<{ lat: number; lng: number }>`
  border-style: solid;
  border-color: transparent transparent black transparent;
  border-width: 0 14px 14px 14px;
  height: 0;
  top: 0px;
  left: -24px;
  width: 28px;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    top: 14px;
    left: -14px;
    width: 28px;
    height: 0;
    border-style: solid;
    border-color: black transparent transparent transparent;
    border-width: 28px 14px 0 14px;
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
        <Suspense fallback={null}>
          <Description data={props?.description?.json!} />
        </Suspense>
        {props?.button?.link! && (
          <PrimaryStyledLink href={props?.button?.link}>
            {props?.button?.contenido!}
          </PrimaryStyledLink>
        )}
      </WrapperDescription>
      {props?.image != null && (
        <ImageContainer>
          <WhiteBlock
            onClick={onHandleClick}
            isClickeable={Boolean(props?.url)}
          >
            <Suspense fallback={null}>
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
            </Suspense>
          </WhiteBlock>
          <Suspense fallback={null}>
            <Image
              mobile="https://images.ctfassets.net/1kfhsqlc8ewi/3N0MGioufHIKv6bghApVdE/c3545a885192924e0627a8fd1b6ec730/image-background.png"
              alt="background"
              className="background"
              style={{
                position: "absolute",
                zIndex: 1,
                bottom: "-64px",
                right: "-64px",
              }}
            />
          </Suspense>
          {props?.subtext && <Text>{props.subtext}</Text>}
          {props?.url! && (
            <Suspense fallback={null}>
              <Image
                className="play"
                mobile="https://images.ctfassets.net/1kfhsqlc8ewi/4mJqM4xD9wp39jQQgYI7Wu/19cc0c49041293a5a287e5c85640740d/play.png"
                alt="background play"
                style={{
                  position: "absolute",
                  zIndex: 4,
                }}
              />
            </Suspense>
          )}

          <JSConfLogo />
        </ImageContainer>
      )}
      {props?.mapa != null && (
        <StyledWrapperMap>
          <Suspense fallback={null}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: props.GM_KEY }}
              defaultCenter={{ lat: props.mapa?.lat!, lng: props.mapa?.lon! }}
              defaultZoom={15}
            >
              <StyledMarker lat={props.mapa?.lat!} lng={props.mapa?.lon!} />
            </GoogleMapReact>
          </Suspense>
          <Suspense fallback={null}>
            <Image
              mobile="https://images.ctfassets.net/1kfhsqlc8ewi/3N0MGioufHIKv6bghApVdE/c3545a885192924e0627a8fd1b6ec730/image-background.png"
              alt="background"
              className="background"
              style={{
                position: "absolute",
                zIndex: 0,
                bottom: "-64px",
                right: "16px",
                maxHeight: "460px",
              }}
            />
          </Suspense>
        </StyledWrapperMap>
      )}
    </Container>
  );
};
export default HowCard;
