import styled from "@emotion/styled";
import { lazy } from "react";
import { PageProps } from "../../../pages";
import useMediaQuery from "../../helpers/useMediaQuery";

import { ViewportSizes } from "../../../styles/theme";
import { PrimaryStyledLink } from "../Links";

const Image = lazy(async () => await import("../core/Image"));
const RenderingLayout = lazy(
  async () => await import("../core/RenderingLayout")
);

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: ${ViewportSizes.TabletLandscape}px) {
    align-items: center;
    justify-self: center;
  }
`;

const ConstributorType = styled.section`
  background-color: #f45b6914;
  border-radius: 32px;
  position: relative;
  padding: 2rem 1rem;
  margin: 1rem 0;
  @media (min-width: ${ViewportSizes.TabletLandscape}px) {
    padding: 1.5rem 1rem;
  }
`;

const ContributorName = styled.h3`
  position: absolute;
  font-size: 32px;
  color: white;
  top: -5.5%;
  left: 6%;
  @media (min-width: ${ViewportSizes.TabletLandscape}px) {
    font-size: 40px;
    top: -18.5%;
    left: 3%;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 30px;
  justify-content: flex-start;
  @media (min-width: ${ViewportSizes.Phone}px) {
    align-items: center;
    flex-direction: row;
  }
`;

const SponsorSection = (props: { page: PageProps["sponsorType"] }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  if (!props.page?.items.length) {
    return <></>;
  }
  return (
    <Container>
      <Flex>
        <Title>Sponsors</Title>
        <PrimaryStyledLink href="/sponsor">
          {"Sponsors Registration"}
        </PrimaryStyledLink>
      </Flex>
      {props.page?.items?.map((item) => (
        <ConstributorType key={item.sys.id}>
          <ContributorName>{item.name}</ContributorName>
          <RenderingLayout constributorTypeName={item.name}>
            {item?.contributorsCollection?.items?.map((contributorItem) => (
              <ImageContainer key={contributorItem.sys.id}>
                <Flex>
                  <Image
                    alt=""
                    mobile={contributorItem?.image?.url}
                    desktop={contributorItem?.image?.url}
                    params={
                      isMobile
                        ? contributorItem?.imageParamsMobile
                        : contributorItem?.imageParamsDesktop
                    }
                  />
                </Flex>
              </ImageContainer>
            ))}
          </RenderingLayout>
        </ConstributorType>
      ))}
    </Container>
  );
};

export default SponsorSection;
