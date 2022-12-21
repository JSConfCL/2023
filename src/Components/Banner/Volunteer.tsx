import styled from "@emotion/styled";
import { Suspense, lazy } from "react";
import ReactMarkdown from "react-markdown";

import remarkGfm from "remark-gfm";

import { PageProps } from "../../../pages/volunteer";
import { ViewportSizes } from "../../../styles/theme";
import Image from "../core/Image";
import { Anchor, H1, P, UL, LI, Strong } from "../core/Typography";
import JSConfLogo from "../svgs/logo";

const Description = lazy(async () => await import("../core/Description"));

const StyledH1 = styled(H1)`
  z-index: 3;
  max-width: 250px;
  width: 100%;
  color: ${({ theme }) => theme.colors.jsconfRed};
  font-size: 64px;
  line-height: 64px;

  @media (min-width: ${ViewportSizes.Phone}px) {
    max-width: 250px;
    font-size: 120px;
    line-height: 120px;
  }
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 0rem;

  @media (min-width: ${ViewportSizes.Phone}px) {
    gap: 3rem;
    flex-direction: row;
  }
`;

const Block = styled.section<{ width: string }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;

  @media (min-width: ${ViewportSizes.Phone}px) {
    width: ${({ width }) => width};
    min-height: 500px;
  }
`;

const ImageBlock = styled.section`
  display: flex;
  position: relative;
  overflow-x: clip;
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(244, 91, 105, 0.32033778317152106) 67%,
    rgba(0, 0, 0, 1) 100%
  );
  margin-top: 66px;

  picture {
    width: initial;
  }

  svg {
    position: absolute;
    width: 40px;
    right: 36px;
    top: 26px;
    z-index: 3;
  }

  @media (min-width: ${ViewportSizes.Phone}px) {
    margin-top: 166px;
  }
`;

const BannerVolunteer = (props: PageProps["heroData"]) => {
  return (
    <Container>
      <Block width="38%">
        <StyledH1>{props.tile}</StyledH1>
        <P>{props?.firstSubtitle}</P>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            strong: (args: any) => <Strong {...args} />,
            p: (args: any) => <P {...args} />,
            a: (args: any) => <Anchor {...args} />,
            ul: (args: any) => <UL {...args} />,
            li: (args: any) => <LI {...args} />,
          }}
        >
          {props?.secondSubtitle}
        </ReactMarkdown>
      </Block>
      <Block width="60%">
        <ImageBlock>
          <JSConfLogo />
          <Image
            mobile="https://images.ctfassets.net/1kfhsqlc8ewi/3N0MGioufHIKv6bghApVdE/c3545a885192924e0627a8fd1b6ec730/image-background.png"
            alt="background"
            className="background"
            style={{
              position: "absolute",
              zIndex: 1,
              width: "100%",
              bottom: "30px",
              right: "-50px",
            }}
          />
          <Image
            mobile={props?.background?.url}
            alt={props?.background?.title || ""}
            style={{
              maxWidth: "830px",
              width: "100%",
              borderRadius: "0px 32px 0px 0px",
              aspectRatio: "830 / 365",
              objectFit: "cover",
              zIndex: 2,
              mixBlendMode: "luminosity",
            }}
          />
        </ImageBlock>

        <Suspense fallback={null}>
          <Description data={props?.description?.json} />
        </Suspense>
      </Block>
    </Container>
  );
};

export default BannerVolunteer;
