import React, { Suspense } from "react";
import styled from "@emotion/styled"
import { motion } from "framer-motion";
import { useWhyBlockCollectionQuery } from "../../graphql/why.generated";
import { H2, H3 } from "../core/Typography";
import Description from "../core/Description"
import Image from "../core/Image"
import Line from "../../images/line.svg"

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0px 32px;
  justify-content: center;
`;

const BlockContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0px 32px;
  justify-content: center;
  svg {
    display: none;
  }

  @media (min-width: 769px) {
    flex-direction: row;
    svg {
      display: inline;
    }
    section:last-child  svg {
      display: none;
    }
  }
`;

const Flex = styled.section<{ index: number }>`
  display: flex;
  flex-direction: row;
  gap: 0px 16px;
  justify-content: space-between;
  padding: ${({ index }) => index % 2 == 0 ? "16px 0px 16px 0px" : "0px 0px 32px 0px"};
  align-items: ${({ index }) => index % 2 == 0 ? "flex-end" : "flex-start"};

  svg {
   transform: ${({ index }) => index % 2 == 0 ? "rotateX(0deg)" : "rotateX(-180deg)"};
  }


`

const Block = styled(motion.section)`
  display: flex;
  flex-direction: column;
  gap: 16px 0px;
  padding: 16px;
  min-width: 255px;
  width: 100%;
  background-color: black;

  @media (min-width: 769px) {
    max-width: 300px;
  }
`;

const WhySection = () => {
  const [{ data, fetching, error }] = useWhyBlockCollectionQuery();

  return (
    <Container>
      <Suspense fallback={<h1>Loading why...</h1>}>
        <H2>Why?</H2>
        <BlockContainer>
          {data?.whyBlockCollection?.items?.map((props, index) => (
            <Block key={`why - block - ${index} `}>
              <Flex index={index}><Image mobile={props?.icon?.url!} alt={props?.icon?.description! || ""} /><Line /></Flex>
              <H3>{props?.title}</H3>
              <Description data={props?.description?.json!} />
            </Block>
          ))}
        </BlockContainer>
      </Suspense>
    </Container>
  )
}

export default WhySection;