import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { lazy, Suspense } from "react";

import { PageProps } from "../../../pages";
import { ViewportSizes } from "../../../styles/theme";
import { PrimaryStyledLink } from "../Links/index";
import { H2 } from "../core/Typography";

const Description = lazy(async () => await import("../core/Description"));
const Card = lazy(async () => await import("../Card"));

const Container = styled.section`
  align-self: center;
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  gap: 32px 16px;
  padding: 16px;
  justify-content: flex-start;
  flex-wrap: wrap;

  > h2 {
    padding: 48px 0px;
  }

  h3 {
    font-size: 24px !important;
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
    color: ${({ theme }) => theme.colors.altColor};
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

const ContainerButton = styled.section`
  display: inherit;
  @media (min-width: 1362px) {
    display: none;
  }
`;

const TeamSection = (props: { page: PageProps["teamData"] }) => {
  const {
    page: {
      title,
      description,
      callToAction,
      membersCollection: { items },
    },
  } = props;
  return (
    <Container>
      <DescriptionContainer>
        <H2 whileHover={{ scale: 1.01 }}>{title}</H2>
        <Suspense fallback={null}>
          <Description data={description?.json} />
        </Suspense>
        <HR />
      </DescriptionContainer>
      {false && (
        <ContainerButton>
          <PrimaryStyledLink href={callToAction.link}>
            {callToAction.contenido}
          </PrimaryStyledLink>
        </ContainerButton>
      )}

      {items?.map((item, index) => {
        return (
          <Suspense key={`speaker-${index}`} fallback={null}>
            <Card
              key={`speaker-${index}`}
              {...item}
              type={item?.type !== "blank" ? "normal-simple" : "blank"}
              position={
                <a
                  href={`https://twitter.com/${item?.twitter}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item?.twitter}
                </a>
              }
              volunteerType={item?.type}
            />
          </Suspense>
        );
      })}
    </Container>
  );
};

export default TeamSection;
