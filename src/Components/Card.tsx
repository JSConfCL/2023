import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { lazy, Suspense } from "react";

import { ViewportSizes } from "../../styles/theme";
import useMediaQuery from "../helpers/useMediaQuery";

import { H3, P } from "./core/Typography";

const Image = lazy(async () => await import("./core/Image"));

const Container = styled(motion.section)<{ type: string; index: number }>`
  background: ${({ type }) => (type === "blank" ? "transparent" : "white")};
  border-radius: 0px 32px 0px 0px;
  position: relative;
  width: 100%;
  height: 300px;
  display: ${({ type }) => (type === "blank" ? "none" : "inherit")};
  overflow: hidden;
  color: ${({ theme }) => theme.elements.card.textColor};

  @media (min-width: ${ViewportSizes.SmallPhone}px) {
    width: calc(50% - 16px);
  }

  @media (min-width: ${ViewportSizes.Phone}px) {
    width: fit-content;
    height: fit-content;
    top: 0px;
  }

  @media (min-width: 1352px) {
    display: inherit;
  }
`;

const BlockColor = styled.section<{ type: string }>`
  background: ${({ type }) =>
    type === "blank" ? "transparent" : "rgb(179 156 94/89%);"};
  border-radius: 0px 32px 0px 0px;
  height: 100%;
  width: 100%;
  @media (min-width: ${ViewportSizes.Phone}px) {
    max-height: ${({ type }) => (type === "keynote" ? "390px" : "390px")};
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
  gap: 0px 8px;
  background-color: transparent;

  > p {
    font-size: 14px;
    margin: 0px;
  }

  > h3 {
    padding: 8px 0px;
    font-size: 24px;
    margin: 0px;
    line-height: 27px;
  }

  @media (min-width: ${ViewportSizes.Phone}px) {
    padding: 8px;
    > p {
      font-size: ${({ type }) => (type === "normal" ? "14px" : "16px")};
    }

    > h3 {
      padding: 8px 0px;
      font-size: ${({ type }) => (type === "normal" ? "24px" : "36px")};
    }
  }
  transition-duration: 250ms;
  transition-property: background;
  &:hover {
    transition-timing-function: "ease-in-out";
    cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='40' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>❤️</text></svg>")
        16 0,
      auto;
    background: ${({ type }) =>
      type === "blank" ? "transparent" : "rgb(100 31 37 / 19%)"};
  }
`;
const HR = styled.hr`
  border-width: 1px;
  border-color: white;
  border-style: solid;
  background-color: white;
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
        height: "240px",
      };
  }
};

const containerVariants = {
  hover: {},
};

const mobileStyle = {
  width: "100%",
  height: "400px",
  aspectRatio: "390 / 400",
};

const Card = (props: any) => {
  const { name, position, photo, cardType, type, index, companyName } = props;
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
        <Suspense fallback={null}>
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
        </Suspense>
      </BlockColor>
      {type !== "blank" && (
        <BlockDescription type={type}>
          <H3>{name}</H3>
          <HR />
          <P>
            {position}
            {companyName ? (
              <>
                <br /> @ {companyName}
              </>
            ) : null}
          </P>
          <HR />
        </BlockDescription>
      )}
    </Container>
  );
};

export default Card;
