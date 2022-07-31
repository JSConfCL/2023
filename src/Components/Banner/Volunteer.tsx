import { Suspense, lazy } from "react";
import styled from "@emotion/styled";
import { PageProps } from "../../../pages/volunteer";
import { H1, P } from "../core/Typography";
import { ViewportSizes } from "../../../styles/theme";

const JSConfLogo = lazy(() => import("../svgs/logo"));

const Description = lazy(() => import("../core/Description"));
const Image = lazy(() => import("../core/Image"));

const StyledH1 = styled(H1)`
  z-index: 3;
  max-width: 250px;
  width: 100%;
  color: #f45b69;
  font-size: 48px;
  line-height: 48px;

  @media (min-width: ${ViewportSizes.Phone}px) {
    max-width: 250px;
    font-size: 120px;
    line-height: 120px;
  }
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 16px;

  @media (min-width: ${ViewportSizes.Phone}px) {
    flex-direction: row;
    padding: 48px;
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
        <StyledH1>{props?.tile}</StyledH1>
        <P>{props?.firstSubtitle!}</P>
        <P>{props?.secondSubtitle!}</P>
      </Block>
      <Block width="60%">
        <ImageBlock>
          <Suspense fallback={null}>
            <JSConfLogo />
          </Suspense>
          <Suspense fallback={null}>
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
          </Suspense>
          <Image
            mobile={props?.background?.url!}
            alt={props?.background?.title! || ""}
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
          <Description data={props?.description?.json!} />
        </Suspense>
      </Block>
    </Container>
  );
};

export default BannerVolunteer;
