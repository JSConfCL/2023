import { useState } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { H2 } from "../core/Typography";
import { PageProps } from "../../../pages";
import useMediaQuery from "../../helpers/useMediaQuery";
import { ViewportSizes } from "../../../styles/theme";
import Description from "../core/Description";
import Card from "../Card";

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

  @media (min-width: ${ViewportSizes.Phone}px) {
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

const HR = styled.hr`
  border-width: 1px;
  border-color: #f45b69;
  border-style: solid;
  width: 50%;
  background-color: #f45b69;
`;

const LoadMoreButton = styled.button`
  text-align: center;
  width: 100%;
  color: #f0e040;
`;

const SpeakerSection = (props: { page: PageProps["speakerData"] }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const {
    page: { title, description, speakersCollection },
  } = props;
  const [speakers, setSpeakers] = useState(() => {
    if (isMobile) {
      return speakersCollection.items.slice(0, loadCount);
    }
    return speakersCollection.items;
  });
  const [loadCount, setLoadCount] = useState(6);

  const LoadMoreHandle = () => {
    setSpeakers(speakersCollection.items);
    setLoadCount(speakersCollection.items.length);
  };

  const isLoadMore = isMobile && speakersCollection.items.length !== loadCount;

  return (
    <Container>
      <DescriptionContainer>
        <H2 whileHover={{ scale: 1.01 }}>{title}</H2>
        <Description data={description?.json} />
        <HR />
      </DescriptionContainer>

      {speakers.map((item, index) => (
        <Card key={`${item.sys.id}_${index}`} {...item} />
      ))}
      {isLoadMore && (
        <LoadMoreButton onClick={LoadMoreHandle}>Load More</LoadMoreButton>
      )}
    </Container>
  );
};

export default SpeakerSection;
