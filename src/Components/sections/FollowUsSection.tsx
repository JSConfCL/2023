import styled from "@emotion/styled";
import { Suspense } from "react";
import { Linkedin, Twitter, Facebook } from "react-feather";
import { Get } from "type-fest";

import { FooterQueryQuery } from "../../graphql/footer.generated";
import { H2 } from "../core/Typography";
import { ViewportSizes } from "../../../styles/theme";

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
  color: ${({ theme }) => theme.colors.textColor};

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

const Icons = {
  Linkedin,
  Twitter,
  Facebook,
};

const Icon = ({ name }: { name?: "Linkedin" | "Twitter" | "Facebook" }) => {
  if (!name) {
    return null;
  }

  const TheIcon = Icons[name];

  return <TheIcon size={40} />;
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
              <Icon
                name={
                  (item?.name ?? undefined) as
                    | "Linkedin"
                    | "Facebook"
                    | "Twitter"
                    | undefined
                }
              />
            </Suspense>
          </StyledA>
        ))}
      </Flex>
    </Suspense>
  </Container>
);

export default FollowUsSection;
