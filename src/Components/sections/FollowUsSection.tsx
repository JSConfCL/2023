import styled from "@emotion/styled";
import { Suspense, lazy } from "react";
import { Get } from "type-fest";

import { ViewportSizes } from "../../../styles/theme";
import { FooterQueryQuery } from "../../graphql/footer.generated";
import { H2 } from "../core/Typography";

const Image = lazy(async () => await import("../core/Image"));

interface Props {
  page: Get<FooterQueryQuery, "page.followUsBlock">;
}

const Container = styled.section`
  align-self: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1440px;
  justify-content: space-between;
  align-items: flex-start;
  min-height: 10px;

  > h2 {
    padding: 48px 0px;
    font-size: 32px;
    line-height: 58px;
  }

  @media (min-width: ${ViewportSizes.Phone}px) {
    width: 50%;
    min-height: 280px;
  }

  @media (min-width: ${ViewportSizes.TabletLandscape}) {
    min-height: 240px;
  }
`;

const Flex = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  gap: 32px;

  @media (min-width: ${ViewportSizes.Phone}px) {
    padding-bottom: 46px;
  }

  @media (min-width: ${ViewportSizes.TabletLandscape}) {
    padding-bottom: 6px;
  }
`;

const StyledA = styled.a`
  &:hover {
    transform: scale(1.2);
  }
`;

const titleAnimation = {
  scale: 1.01,
  transition: {
    duration: 0.1,
    type: "tween",
  },
};

const FollowUsSection = (props: Props) => (
  <Container>
    <H2 whileHover={titleAnimation}>{props.page?.title}</H2>
    <Suspense>
      <Flex>
        {props.page?.socialNetworksCollection?.items.map((item, index) => (
          <StyledA
            target="_blank"
            rel="noreferrer"
            href={item?.url!}
            key={`social-${index}`}
          >
            <Suspense>
              <Image
                key={`logo-${index}`}
                mobile={item?.icon?.url!}
                alt={`${item?.name!} logo`}
                params="&w=40"
                style={{ width: "40px", aspectRatio: "40 / 40" }}
              />
            </Suspense>
          </StyledA>
        ))}
      </Flex>
    </Suspense>
  </Container>
);

export default FollowUsSection;
