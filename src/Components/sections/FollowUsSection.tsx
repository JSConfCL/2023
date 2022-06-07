import React from "react";
import styled from "@emotion/styled";
import Image from "../core/Image";

import { H2 } from "../core/Typography";
import { PageProps } from "../../../pages";

const Container = styled.section`
  align-self: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1440px;
  gap: 0px 32px;
  padding: 16px;
  justify-content: space-between;

  > h2 {
    padding: 48px 0px;
  }

  @media (min-width: 769px) {
    padding: 48px;
  }

  @media (min-width: 1024px) {
    flex-direction: column;
  }
`;

const Flex = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 1024px) {
    width: 30vw;
  }
`;

const titleAnimation = {
  scale: 1.01,
  transition: {
    duration: 0.1,
    type: "tween",
  },
};

const FollowUsSection = (props: { page: PageProps["followUsData"] }) => (
  <Container>
    <H2 whileHover={titleAnimation}>{props.page.title}</H2>

    <Flex>
      {props.page.socialNetworksCollection.items.map((props, index) => (
        <a
          target="_blank"
          rel="noreferrer"
          href={props.url}
          key={`social-${index}`}
        >
          <Image
            key={`logo-${index}`}
            mobile={props.icon?.url!}
            alt={`${props.name} logo`}
            style={{ width: 40 }}
          />
        </a>
      ))}
    </Flex>
  </Container>
);

export default FollowUsSection;
