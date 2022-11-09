import { useState, useEffect, lazy, Suspense } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { H2 } from "../core/Typography";
import { PageProps } from "../../../pages";
import useMediaQuery from "../../helpers/useMediaQuery";

import { ViewportSizes } from "../../../styles/theme";
import { PrimaryStyledLink } from "../Links";

const Description = lazy(() => import("../core/Description"));
const Card = lazy(() => import("../Card"));
const Image = lazy(() => import("../core/Image"));

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

  @media (min-width: ${ViewportSizes.Phone}px) {
    padding: 48px;
  }

  @media (min-width: ${ViewportSizes.TabletLandscape}) {
    flex-direction: column;
  }
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: 400;
  @media (min-width: ${ViewportSizes.TabletLandscape}px) {
    font-size: 80px;
  }
`;

const ImageContainer = styled.div`
  width: 50vw;
  margin: 0.5rem 0;
  @media (min-width: ${ViewportSizes.TabletLandscape}px) {
    width: fit-content;
    height: 200xp;
    display: flex;
    align-items: center;
  }
`;

const ConstributorType = styled.section`
  background-color: #f45b6914;
  border-radius: 32px;
  position: relative;
  padding: 1.5rem 1rem;
  margin: 1rem 0;
  @media (min-width: ${ViewportSizes.TabletLandscape}px) {
    max-height: 300px;
  }
`;

const ContributorName = styled.h3`
  position: absolute;
  font-size: 32px;
  color: white;
  top: -5.5%;
  left: 4%;
  @media (min-width: ${ViewportSizes.TabletLandscape}px) {
    font-size: 40px;
    top: -18.5%;
    left: 3%;
  }
`;

const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  gap: 20px;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  @media (min-width: ${ViewportSizes.TabletLandscape}px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const SponsorSection = (props: { page: PageProps["sponsorType"] }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [constributor, useContributor] = useState("");
  const NameContributor = props.page?.items;
  const imageParams = {};
  NameContributor.map((contributorsCollection, index) => {
    console.log(NameContributor[index].contributorsCollection.items[index]);
  });
  //console.log(props.page?.items)

  return (
    <>
      {!constributor && (
        <Container>
          {isMobile ? (
            <Title>Sponsors</Title>
          ) : (
            <Flex>
              <Title>Sponsors</Title>
              <PrimaryStyledLink href="">
                {"Sponsors Registration"}
              </PrimaryStyledLink>
            </Flex>
          )}
          {props.page?.items?.map((props, index) => (
            <>
              <ConstributorType>
                <ContributorName>{props.name}</ContributorName>
                <Flex>
                  {props?.contributorsCollection?.items?.map((props, index) => (
                    <>
                      <ImageContainer>
                        <Flex>
                          <Image
                            alt=""
                            mobile={props?.image?.url!}
                            desktop={props?.image?.url!}
                            params={
                              isMobile
                                ? props?.imageParamsMobile
                                : props?.imageParamsDesktop
                            }
                          />
                        </Flex>
                      </ImageContainer>
                    </>
                  ))}
                </Flex>
              </ConstributorType>
            </>
          ))}
        </Container>
      )}
    </>
  );
};

export default SponsorSection;
