import React, { lazy, Suspense } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import useMediaQuery from "../../../helpers/useMediaQuery";
import { H2 } from "../../core/Typography";
import { PageProps } from "../../../../pages";
import Description from "./Description";

const Image = lazy(() => import("../../core/Image"));

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
  background-color: white;
`;

const Block = styled(motion.section)`
  position: relative;
  display: flex;
  flex-direction: column;
  width: fit-content;
  max-height: 390px;
  border-radius: 0px 32px 0px 0px;
  background-color: rgba(30, 32, 25, 0.5);

  @media (min-width: 769px) {
    background-color: rgba(240, 224, 64, 0.2);
  }
`;

export const H3 = styled(motion.h3)`
  font-family: "Barlow";
  font-style: normal;
  font-weight: 800;
  font-size: 28px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #ffffff;
  @media (min-width: 769px) {
    font-size: 24px;
    line-height: 43px;
  }
  @media (min-width: 1025px) {
    font-size: 36px;
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

const descriptionVariant = (isMobile: boolean) => ({
  initial: {
    opacity: isMobile ? 1 : 0,
    height: isMobile ? "max-content" : "20px",
  },
  hover: {
    opacity: 1,
    height: "min-content",
    transition: {
      duration: 0.2,
      opacity: {
        delay: 0.2,
        duration: 0.2,
      },
    },
  },
});

const WhySection = (props: { page: PageProps["whyItems"] }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Container>
        <H2 whileHover={{ scale: 1.1 }}>POR QUE?</H2>
        <BlockContainer>
          {props.page?.items?.map((item, index) => (
            <WhiteBlock
              key={`white-block-${index} `}
              whileHover="hover"
              whileFocus="hover"
              whileTap="hover"
              initial="initial"
            >
              <Block key={`why-block-${index}`} variants={BlockVariant}>
                <Suspense fallback={<div>Loading...</div>}>
                  <Image
                    mobile={item?.fullImage?.url!}
                    desktop={item?.icon?.url!}
                    alt={item?.icon?.description! || ""}
                    style={{
                      height: isMobile ? "210px" : "390px",
                      width: isMobile ? "100vw" : "fit-content",
                      aspectRatio: index % 2 === 0 ? "287 / 390" : "397 / 390",
                      mixBlendMode: "multiply",
                      borderRadius: "0px 32px 0px 0px",
                      objectFit: isMobile ? "top" : "inherit",
                    }}
                  />
                </Suspense>
                <Flex index={index}>
                  <H3>{item?.title}</H3>
                  <HR />
                  {!isMobile && (
                    <Suspense fallback={<div>Loading...</div>}>
                      <Description
                        data={item?.description?.json!}
                        animationVariants={descriptionVariant(false)}
                      />
                    </Suspense>
                  )}
                  {isMobile && (
                    <Suspense fallback={<div>Loading...</div>}>
                      <Description
                        data={item?.description?.json!}
                        animationVariants={descriptionVariant(true)}
                      />
                    </Suspense>
                  )}
                </Flex>
              </Block>
            </WhiteBlock>
          ))}
        </BlockContainer>
      </Container>
    </Suspense>
  );
};

export default WhySection;
