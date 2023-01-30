import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Suspense } from "react";

import Description from "../../src/Components/core/Description";

import {
  SponsorDetailsDocument,
  SponsorDetailsQuery,
  SponsorDetailsQueryVariables,
} from "../../src/graphql/sponsor-details.generated";
import {
  SponsorsDocument,
  SponsorsQuery,
  SponsorsQueryVariables,
} from "../../src/graphql/sponsors.generated";

import { urlQlient } from "../../src/graphql/urql";
import { ViewportSizes } from "../../styles/theme";

interface SponsorProps {
  sponsorCollection: SponsorDetailsQuery["sponsorBlockCollection"];
  colors: {
    bgColor: string;
    textColor: string;
    navColor: string;
    effectColors: string | string[];
  };
}

const NavBar = dynamic(
  async () => await import("../../src/Components/NavBar/NavBar"),
  {
    ssr: false,
  }
);

const Particles = dynamic(
  async () => await import("../../src/Components/Particles")
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.backgroundColor};
  scroll-behavior: smooth;
  width: 100%;
`;

const Hero = styled.section`
  font-size: 42px;
  width: 100vw;
  max-width: 1400px;
  margin: 0 auto;
  z-index: 3;
  height: calc(100vh - 150px);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 100px;
`;

const HeroInfo = styled.div`
  margin: 0 auto;
  width: 90%;
  max-width: 800px;
  padding: 32px;
  text-align: center;
  font-size: 20px;
`;

const Info = styled.div<{ color: string }>`
  color: ${({ color }) => color};
  margin-top: 16px;

  > a {
    display: inline-block;
    margin-top: 32px;
  }

  @media (min-width: ${ViewportSizes.Phone}px) {
    margin-top: 32px;

    > a {
      margin-top: 48px;
    }
  }
`;
const Sponsor = (props: SponsorProps) => {
  const {
    items: [sponsor],
  } = props?.sponsorCollection ?? { items: [] };
  const { colors } = props;

  return (
    <Container>
      <Suspense>
        <NavBar />
      </Suspense>
      <Suspense>
        <Particles
          backgroundColor={colors.bgColor}
          color={colors.effectColors}
          shape="circle"
          configuration="sponsors"
        />
        <Hero>
          <HeroInfo style={{ zIndex: "5" }}>
            <div>
              <Link
                rel="preconnect"
                href={sponsor?.externalLink ?? ""}
                passHref
              >
                <a target="_blank">
                  <img
                    alt={sponsor?.name ?? ""}
                    src={sponsor?.image?.url!}
                    style={{ maxWidth: "400px" }}
                  />
                </a>
              </Link>
            </div>
            <Info color={colors.textColor}>
              <Description data={sponsor?.description?.json} />
              <Link
                rel="preconnect"
                href={sponsor?.externalLink ?? ""}
                passHref
              >
                <a target="_blank">Ir a su página</a>
              </Link>
            </Info>
          </HeroInfo>
        </Hero>
      </Suspense>
    </Container>
  );
};

export async function getStaticPaths() {
  const queryResults = await urlQlient
    .query<SponsorsQuery, SponsorsQueryVariables>(SponsorsDocument, {
      isPreview: Boolean(process.env.NEXT_PUBLIC_CONTENTFUL_IS_PREVIEW),
    })
    .toPromise();

  const paths = queryResults?.data?.sponsorBlockCollection?.items
    .filter((item) => Boolean(item?.slug))
    .map((item) => ({ params: { id: item?.slug } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: any }) {
  if (!params?.id) {
    return { props: {} };
  }

  const queryResults = await urlQlient
    .query<SponsorDetailsQuery, SponsorDetailsQueryVariables>(
      SponsorDetailsDocument,
      {
        id: params.id,
        isPreview: Boolean(process.env.NEXT_PUBLIC_CONTENTFUL_IS_PREVIEW),
      }
    )
    .toPromise();

  const colors = {
    textColor:
      queryResults?.data?.sponsorBlockCollection?.items[0]?.textColor ?? "",
    bgColor:
      queryResults?.data?.sponsorBlockCollection?.items[0]?.bgColor ?? "",
    navColor:
      queryResults?.data?.sponsorBlockCollection?.items[0]?.navColor ?? "",
    effectColors:
      queryResults?.data?.sponsorBlockCollection?.items[0]?.effectColors ?? [],
  };

  return {
    props: {
      sponsorCollection: queryResults?.data?.sponsorBlockCollection ?? null,
      colors,
    },
  };
}

export default Sponsor;
