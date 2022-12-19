import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import Link from "next/link";
import { lazy } from "react";

import { PageProps } from "../../../pages";
import { ViewportSizes } from "../../../styles/theme";

const Image = lazy(async () => await import("../core/Image"));

const wiggleAnimation = keyframes`
  0%, 7% {
    transform: rotateZ(0);
  }
  15% {
    transform: rotateZ(-15deg);
  }
  20% {
    transform: rotateZ(10deg);
  }
  25% {
    transform: rotateZ(-10deg);
  }
  30% {
    transform: rotateZ(6deg);
  }
  35% {
    transform: rotateZ(-4deg);
  }
  40%, 100% {
    transform: rotateZ(0);
  }
`;

const Container = styled.section`
  align-self: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1440px;
  gap: 0px 32px;
  padding: 16px 16px 48px 16px;
  justify-content: space-between;

  @media (min-width: ${ViewportSizes.Phone}px) {
    padding: 48px;
  }

  @media (min-width: ${ViewportSizes.TabletLandscape}) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 64px;
  flex-wrap: wrap;

  img {
    opacity: 0.5;
    &:hover {
      animation: ${wiggleAnimation} 2s linear infinite;
      opacity: 1;
      transition-timing-function: "ease-in-out";
      cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='40' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>❤️</text></svg>")
          16 0,
        auto;
    }
  }
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: 400;
  @media (min-width: ${ViewportSizes.TabletLandscape}px) {
    font-size: 80px;
  }
`;

const FlexSpace = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 30px;
  justify-content: flex-start;
  @media (min-width: ${ViewportSizes.Phone}px) {
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const FriendCommunitySection = (props: { friends: PageProps["friends"] }) => {
  if (!props.friends.items.length) {
    return <></>;
  }

  return (
    <Container>
      <FlexSpace>
        <Title>Comunidades Amigas</Title>
      </FlexSpace>
      <ImageContainer>
        {props.friends?.items?.map((friend, index) => (
          <Link
            rel="preconnect"
            href={friend?.link}
            passHref
            key={`friend-community-${index.toString()}`}
          >
            <a target="_blank">
              <Image
                alt={friend?.image?.title}
                mobile={friend?.image?.url}
                desktop={friend?.image?.url}
                params="&w=100"
              />
            </a>
          </Link>
        ))}
      </ImageContainer>
    </Container>
  );
};

export default FriendCommunitySection;
