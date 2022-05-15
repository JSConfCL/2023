import React, { Suspense } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { H2, H3 } from "../core/Typography";
import Description from "../core/Description";
import Image from "../core/Image";
import { PageProps } from "../../../pages";
import useMediaQuery from "../../helpers/useMediaQuery";

const Container = styled.section`
  align-self: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1440px;
  gap: 0px 32px;
  padding: 48px;
  justify-content: space-between;

  > h2 {
    padding: 48px 0px;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const BlockContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px 20px;
  width: 100%;
  justify-content: flex-start;
  @media (min-width: 769px) {
    flex-direction: row;
    width: fit-content;
  }
`;

const Flex = styled.section<{ index: number }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 16px 16px;
  padding: 16px;
  bottom: 0px;
  width: 100%;
  justify-content: space-between;
  overflow: hidden;
`;

const WhiteBlock = styled(motion.section)`
  background-color: white;
  border-radius: 0px 32px 0px 0px;
`;

const HR = styled.hr`
  border-width: 2px;
  border-color: white;
  border-style: solid;
`;

const Block = styled(motion.section)`
  position: relative;
  display: flex;
  flex-direction: column;
  width: fit-content;
  max-height: 390px;
  border-radius: 0px 32px 0px 0px;
  background-color: rgba(240, 224, 64, 0.2);

  @media (min-width: 769px) {
  }
`;

const BlockVariant = {
  hover: {
    backgroundColor: "rgba(30, 32, 25, 0.5)",
    scale: 1.01,
    transition: {
      duration: 0.2,
    },
  },
};

const descriptionVariant = {
  initial: {
    opacity: 0,
    height: "20px",
  },
  hover: {
    opacity: 1,
    height: "fit-content",
    transition: {
      duration: 0.2,
      opacity: {
        delay: 0.2,
        duration: 0.2,
      },
    },
  },
};

const WhySection = (props: { page: PageProps["whyItems"] }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <Container>
      <Suspense fallback={<h1>Loading why...</h1>}>
        <H2 whileHover={{ scale: 1.1 }}>WHY</H2>
        <BlockContainer>
          {props.page?.items?.map((item, index) => (
            <WhiteBlock
              key={`white - block - ${index} `}
              whileHover="hover"
              whileFocus="hover"
              whileTap="hover"
              initial="initial"
            >
              <Block key={`why - block - ${index} `} variants={BlockVariant}>
                <Image
                  mobile={item?.icon?.url!}
                  alt={item?.icon?.description! || ""}
                  style={{
                    height: isMobile ? "fit-content" : "390px",
                    width: isMobile ? "100vw" : "fit-content",
                    aspectRatio: index % 2 === 0 ? "287 / 390" : "397 / 390",
                    mixBlendMode: "multiply",
                    borderRadius: "0px 32px 0px 0px",
                  }}
                />
                <Flex index={index}>
                  <H3>{item?.title}</H3>
                  <HR />
                  <Description
                    data={item?.description?.json!}
                    animationVariants={descriptionVariant}
                  />
                </Flex>
              </Block>
            </WhiteBlock>
          ))}
        </BlockContainer>
      </Suspense>
    </Container>
  );
};

export default WhySection;
