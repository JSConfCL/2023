import React, { Suspense } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { H2 } from "../core/Typography";
import Description from "../core/Description";
import Card from "../Card";
import { PageProps } from "../../../pages";
import useMediaQuery from "../../helpers/useMediaQuery";
import { PrimaryStyledLink } from "../Links/index";

const Container = styled.section`
  align-self: center;
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1440px;
  gap: 32px 32px;
  padding: 48px;
  justify-content: flex-start;

  > h2 {
    padding: 48px 0px;
  }

  flex-wrap: wrap;
`;

const DescriptionContainer = styled(motion.section)`
  position: relative;
  width: 100%;
  max-width: 400px;
`;

const Column = styled(motion.section)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(50% - 16px);
  > section {
    width: 100%;
  }
  a {
    display: none;
  }
  @media (min-width: 769px) {
    width: fit-content;
  }
  @media (min-width: 1247px) {
    a {
      display: inherit;
    }
  }
`;
const ContainerButton = styled.section`
  display: inherit;
  @media (min-width: 1247px) {
    display: none;
  }
`;

const SpeakerSection = (props: { page: PageProps["speakerData"] }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const {
    page: { title, description, speakersCollection },
  } = props;
  return (
    <Container>
      <Suspense fallback={<h1>Loading How...</h1>}>
        <DescriptionContainer>
          <H2 whileHover={{ scale: 1.01 }}>{title}</H2>
          <Description data={description?.json!} />
        </DescriptionContainer>
        <ContainerButton>
          <PrimaryStyledLink href="/">CFP Registration</PrimaryStyledLink>
        </ContainerButton>

        {speakersCollection.items.map((item, index) => {
          if (index === 6) {
            return (
              <Column>
                <PrimaryStyledLink href="/">CFP Registration</PrimaryStyledLink>
                <Card key={`speaker-${index}`} {...item} />
              </Column>
            );
          }
          return <Card key={`speaker-${index}`} {...item} />;
        })}
      </Suspense>
    </Container>
  );
};

export default SpeakerSection;
