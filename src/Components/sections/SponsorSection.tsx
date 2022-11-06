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
  width: 100%;
  display: flex;
  align-items: center;
`;

const ConstributorType = styled.section`
  background-color: #f45b6914;
  border-radius: 32px;
  position: relative;
  padding: 1.5rem 1rem;
  margin: 1rem 0;
`;

const ContributorName = styled.h3`
  position: absolute;
  font-size: 32px;
  color: white;
  top: -3%;
  left: 4%;
  @media (min-width: ${ViewportSizes.TabletLandscape}px){
    font-size: 40px;
    
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const SponsorSection = (props: { page: PageProps["sponsorType"] }) => {
  // const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <Container>
        <Title>Sponsors</Title>
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
    </>
  );
};

export default SponsorSection;
