import React, { Suspense } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import {
  HomeQueryQuery,
} from "../../graphql/home.generated";
import { H2, H3 } from "../core/Typography";
import Description from "../core/Description";
import Image from "../core/Image";



const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0px 32px;
  justify-content: center;
`;

const BlockContainer = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 0px 32px;
  justify-content: center;
  max-width: 1440px;
`;



const Block = styled(motion.section)`
  display: flex;
  flex-direction: column;
  gap: 16px 0px;
  padding: 16px;
  min-width: 255px;
  width: 100%;
  background-color: black;
 background: linear-gradient(7.26deg, #C4C4C4 -13.08%, #9342A7 -13.08%, rgba(58, 65, 164, 0.08) 58.83%);
  @media (min-width: 769px) {
    max-width: 50%
  }
`;

const BlockDescription = styled(motion.section)`
display: flex;
  flex-direction: column;
  width: 100%;

`

const HowSection = (props: { page: HomeQueryQuery["howBlockCollection"] }) => {

  const [selected, setSelected] = React.useState(`how-block-0`)
  return (
    <Container>
      <Suspense fallback={<h1>Loading How...</h1>}>
        <H2>How?</H2>
        <BlockContainer>
          {props.page?.items.map((props, index) => (
            <Block key={`how-block-${index}`}>
              <Image
                mobile={props?.image?.url!}
                alt={props?.image?.description! || ""}
              />
              <H3>{props?.title}</H3>
            </Block>
          ))}
        </BlockContainer>

        {props.page?.items.map((props, index) => (
          <BlockDescription key={`how-block-description-${index} `}>
            <Description data={props?.description?.json!} />
          </BlockDescription>)
        )}

      </Suspense>
    </Container>
  );
};

export default HowSection;
