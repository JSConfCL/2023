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

const Container = styled(motion.section)<{ type: string; index: number }>`
  background: ${({ type }) => (type === "blank" ? "transparent" : "white")};
  border-radius: 0px 32px 0px 0px;
  position: relative;
  width: calc(50% - 16px);
  height: 300px;
  display: ${({ type }) => (type === "blank" ? "none" : "inherit")};

  @media (min-width: 769px) {
    width: fit-content;
    height: fit-content;
    top: 0px;
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

  <<<<<<< HEAD &:hover {
    background: ${({ type }) =>
      type === "blank" ? "transparent" : "rgb(100 31 37 / 79%)"};
  }

  =======>>>>>>>128f0f3100f9859bdc0395a9bf0a21d732ddf86e
    @media
    (min-width: 769px) {
    max-height: ${({ type }) => (type === "keynote" ? "390px" : "240px")};
  }
`;

const BlockDescription = styled(motion.section)<{ type: string }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 0px 32px 0px 0px;
  bottom: 0px;
  padding: 8px;
  width: 100%;
  height: 100%;
  gap: 8px 8px;
  background-color: transparent;

  > p {
    font-size: 14px;
  }

  > h3 {
    padding: 8px 0px;
    font-size: 24px;
  }

  @media (min-width: 769px) {
    padding: 16px;
    > p {
      font-size: ${({ type }) => (type === "normal" ? "14px" : "16px")};
    }

    > h3 {
      padding: 8px 0px;
      font-size: ${({ type }) => (type === "normal" ? "24px" : "36px")};
    }
  }
  &:hover {
    background: ${({ type }) =>
      type === "blank" ? "transparent" : "rgb(100 31 37 / 79%)"};
  }
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

const containerVariants = {
  hover: {},
};

const mobileStyle = {
  width: "100%",
  height: "100%",
  aspectRatio: "390 / 400",
};

const Card = (props: any) => {
  const { name, position, photo, cardType, type, index } = props;
  const isMobile = useMediaQuery("(max-width: 768px)");
  const extraStyle = isMobile ? mobileStyle : styleProps(cardType, type);
  return (
    <Container
      type={type}
      index={index}
      variants={containerVariants}
      whileHover="hover"
      whileFocus="hover"
      whileTap="hover"
      initial="initial"
    >
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
        <BlockDescription type={type}>
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
