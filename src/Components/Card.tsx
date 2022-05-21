import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import Image from "./core/Image";
import { H3, P } from "./core/Typography";
import useMediaQuery from "../helpers/useMediaQuery";

interface Card {
  name?: string;
  position?: string;
  photo?: {
    url: string;
    description: string;
  };
}

const Container = styled.section<{ type: string }>`
  background: ${({ type }) => (type === "blank" ? "transparent" : "white")};
  border-radius: 0px 32px 0px 0px;
  position: relative;
  width: calc(50% - 16px);
  height: 300px;
  display: ${({ type }) => (type === "blank" ? "none" : "inherit")};

  @media (min-width: 769px) {
    width: fit-content;
    height: fit-content;
  }

  @media (min-width: 1362px) {
    display: inherit;
  }
`;

const BlockColor = styled.section<{ type: string }>`
  background: ${({ type }) =>
    type === "blank" ? "transparent" : "rgb(179 156 94/89%);"};
  border-radius: 0px 32px 0px 0px;
  height: 100%;
  width: 100%;
`;

const BlockDescription = styled(motion.section)`
  position: absolute;
  bottom: 0px;
  padding: 16px;
  width: 100%;
`;
const HR = styled.hr`
  border-width: 1px;
  border-color: white;
  border-style: solid;
`;

const styleProps = (cardType: string, type: string) => {
  switch (`${type}-${cardType}`) {
    case "keynote-simple":
      return {
        width: "287px",
        height: "390px",
        aspectRatio: "390 / 287",
      };
    case "keynote-double":
      return {
        width: "400px",
        height: "390px",
        aspectRatio: "390 / 400",
      };
    case "normal-simple":
      return {
        width: "179px",
        height: "240px",
        aspectRatio: "390 / 400",
      };
    case "blank-simple":
      return {
        width: "82px",
        height: "240px",
        aspectRatio: "390 / 400",
      };
    case "blank-double":
      return {
        width: "177px",
        height: "240px",
        aspectRatio: "390 / 400",
      };
    default:
      return {
        width: "170px",
      };
  }
};

const mobileStyle = {
  width: "100%",
  height: "100%",
  aspectRatio: "390 / 400",
};

const Card = (props: any) => {
  const { name, position, photo, cardType, type } = props;
  const isMobile = useMediaQuery("(max-width: 768px)");
  const extraStyle = isMobile ? mobileStyle : styleProps(cardType, type);
  return (
    <Container type={type}>
      <BlockColor type={type}>
        <Image
          mobile={photo?.url!}
          alt={photo?.description!}
          style={{
            borderRadius: "0px 32px 0px 0px",
            position: "relative",
            objectFit: "cover",
            mixBlendMode: "multiply",
            ...extraStyle,
          }}
        />
      </BlockColor>
      {type !== "blank" && (
        <BlockDescription>
          <H3>{name}</H3>
          <HR />
          <P>{position}</P>
          <HR />
        </BlockDescription>
      )}
    </Container>
  );
};

export default Card;
