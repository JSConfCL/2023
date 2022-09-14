import { useState, useEffect, lazy, Suspense } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { H2 } from "../core/Typography";
import { PageProps } from "../../../pages";
import useMediaQuery from "../../helpers/useMediaQuery";
import { PrimaryStyledLink } from "../Links/index";
import { ViewportSizes } from "../../../styles/theme";

const Description = lazy(() => import("../core/Description"));
const Card = lazy(() => import("../Card"));

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
  @media (min-width: ${ViewportSizes.Phone}px) {
    width: fit-content;
    top: 0px;
    > section {
      width: fit-content;
    }
  }
  @media (min-width: 1362px) {
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
  @media (min-width: 1362px) {
    display: none;
  }
`;

const LoadMoreButton = styled.button`
  text-align: center;
  width: 100%;
  color: #f0e040;
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
          <Description data={description?.json!} />
        </Suspense>
        <HR />
      </DescriptionContainer>
      <ContainerButton>
        {callToAction && (
          <PrimaryStyledLink href={callToAction.link}>
            {callToAction.contenido}
          </PrimaryStyledLink>
        )}
      </ContainerButton>

      {items?.map((item: any, index: number) => {
        if (index === 6) {
          return (
            <Column index={index}>
              {callToAction && (
                <PrimaryStyledLink href={callToAction?.link}>
                  {callToAction?.contenido}
                </PrimaryStyledLink>
              )}
              <Suspense key={`team-${index}`} fallback={null}>
                <Card
                  key={`team-${index}`}
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
                />
              </Suspense>
            </Column>
          );
        }

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
            />
          </Suspense>
        );
      })}
    </Container>
  );
};

export default TeamSection;
