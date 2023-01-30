import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import Link from "next/link";
import { transparentize } from "polished";

import { PageProps } from "../../../pages";
import { ViewportSizes } from "../../../styles/theme";
import useMediaQuery from "../../helpers/useMediaQuery";

import { PrimaryStyledLink } from "../Links";

const Image = dynamic(async () => await import("../core/Image"));
const RenderingLayout = dynamic(
  async () => await import("../core/RenderingLayout")
);

const Container = styled.section`
  align-self: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
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

const ContributorType = styled.section`
  background-color: ${({ theme }) =>
    transparentize(0.86, theme.colors.contributorFooter)};
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
  color: ${({ theme }) => theme.colors.textColor};
  top: -34px;
  left: 29px;
  @media (min-width: ${ViewportSizes.TabletLandscape}px) {
    font-size: 40px;
    top: -34px;
    left: 29px;
  }
`;

const Flex = styled.div<{ direction?: string }>`
  display: flex;
  justify-content: space-between;
  flex-direction: ${({ direction }) => direction ?? "row"};
  gap: 30px;
  justify-content: flex-start;

  @media (min-width: ${ViewportSizes.Phone}px) {
    align-items: center;
  }
`;

const FlexSpace = styled(Flex)`
  justify-content: space-between;
  padding: 48px 0px 96px 0px;
  @media (min-width: ${ViewportSizes.Phone}px) {
    justify-content: space-between;
  }
`;

const SponsorSection = (props: { page: PageProps["sponsorType"] }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  if (!props.page?.items.length) {
    return <></>;
  }
  return (
    <Container>
      <FlexSpace>
        <Title>Sponsors</Title>
        <PrimaryStyledLink href="/sponsor">
          Sponsors Registration
        </PrimaryStyledLink>
      </FlexSpace>
      {props.page?.items?.map((item) => (
        <ContributorType key={item.sys.id}>
          <ContributorName>{item.name}</ContributorName>
          <RenderingLayout contributorTypeName={item.name}>
            {item?.contributorsCollection?.items?.map((contributorItem) => (
              <ImageContainer key={contributorItem.sys.id}>
                <Flex direction="column">
                  <Link
                    rel="preconnect"
                    href={contributorItem.externalLink}
                    passHref
                  >
                    <a target="_blank">
                      <Image
                        alt=""
                        mobile={contributorItem?.image?.url}
                        desktop={contributorItem?.image?.url}
                        params={
                          isMobile
                            ? contributorItem?.imageParamsMobile
                            : contributorItem?.imageParamsDesktop || ""
                        }
                      />
                    </a>
                  </Link>
                  {contributorItem?.slug ? (
                    <Link
                      rel="preconnect"
                      href={`/sponsors/${contributorItem.slug}`}
                      passHref
                    >
                      <a>Ver Perfil</a>
                    </Link>
                  ) : null}
                </Flex>
              </ImageContainer>
            ))}
          </RenderingLayout>
        </ContributorType>
      ))}
    </Container>
  );
};

export default SponsorSection;
