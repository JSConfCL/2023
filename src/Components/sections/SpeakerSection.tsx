import React from "react";
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
  gap: 32px 16px;
  padding: 16px;
  justify-content: flex-start;
  flex-wrap: wrap;

  > h2 {
    padding: 48px 0px;
  }

  @media (min-width: 769px) {
    padding: 48px;
    gap: 32px 32px;
    justify-content: flex-start;
  }
`;

const DescriptionContainer = styled(motion.section)`
  display: flex;
  flex-direction: column;
  gap: 16px 0px;
  position: relative;
  width: 100%;
  max-width: 400px;

  p {
    color: #f0e040;
    font-weight: 400;
  }
`;

const Column = styled(motion.section)<{ index: number }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(50% - 16px);
  top: ${({ index }) => (index % 2 === 1 ? "32px" : "0px")};
  > section {
    width: 100%;
  }
  a {
    display: none;
  }
  @media (min-width: 769px) {
    width: fit-content;
    top: 0px;
    > section {
      width: fit-content;
    }
  }
  @media (min-width: 1247px) {
    a {
      display: inherit;
    }
  }
`;

const HR = styled.hr`
  border-width: 1px;
  border-color: #f45b69;
  border-style: solid;
  width: 50%;
  background-color: #f45b69;
`;

const ContainerButton = styled.section`
  display: inherit;
  @media (min-width: 1247px) {
    display: none;
  }
`;

const LoadMoreButton = styled.button`
  text-align: center;
  width: 100%;
  color: #f0e040;
`;

const SpeakerSection = (props: { page: PageProps["speakerData"] }) => {
  const [speakers, setSpeakers] = React.useState<any>([]);
  const [loadCount, setLoadCount] = React.useState(6);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const {
    page: { title, description, speakersCollection },
  } = props;

  const LoadMoreHandle = () => {
    setSpeakers(speakersCollection.items);
    setLoadCount(speakersCollection.items.length);
  };

  const isLoadMore = isMobile && speakersCollection.items.length !== loadCount;

  React.useEffect(() => {
    if (isMobile) {
      setSpeakers(speakersCollection.items.slice(0, loadCount));
      return;
    }
    setSpeakers(speakersCollection.items);
  }, [isMobile, speakersCollection, loadCount]);

  return (
    <Container>
      <DescriptionContainer>
        <H2 whileHover={{ scale: 1.01 }}>{title}</H2>
        <Description data={description?.json!} />
        <HR />
      </DescriptionContainer>
      <ContainerButton>
        <PrimaryStyledLink href="/">CFP Registration</PrimaryStyledLink>
      </ContainerButton>

      {speakers.map((item: any, index: number) => {
        if (index === 6) {
          return (
            <Column index={index}>
              <PrimaryStyledLink href="/">CFP Registration</PrimaryStyledLink>
              <Card key={`speaker-${index}`} {...item} />
            </Column>
          );
        }
        return <Card key={`speaker-${index}`} {...item} index={index} />;
      })}
      {isLoadMore && (
        <LoadMoreButton onClick={LoadMoreHandle}>Load More</LoadMoreButton>
      )}
    </Container>
  );
};

export default SpeakerSection;
