import { lazy, Suspense } from "react";
import styled from "@emotion/styled";
import { PageProps } from "../../../pages/sponsor";
import { H1 } from "../core/Typography";

const Description = lazy(() => import("../core/Description"));
const Image = lazy(() => import("../core/Image"));

const Container = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 32px 0px;
  max-width: 1440px;
  padding: 16px;
  align-items: flex-start;

  > section:nth-last-child() {
    width: 100%;
  }

  @media (min-width: 769px) {
    padding: 48px;
    align-items: center;
    > section:last-child {
      max-width: 615px;
      width: calc(100% - 140px);
      align-self: flex-end;
      margin-right: 140px;
    }
  }
`;

const Block = styled.section`
  position: relative;
  width: 100vw;
  max-width: 100%;
  min-height: 200px;
  margin-bottom: 16px;

  > h1 {
    position: absolute;
    z-index: 3;
    font-size: 48px;
    line-height: 48px;
    font-weight: 400;
    width: 100%;
    max-width: 250px;
  }

  img {
    position: absolute;
    top: 80px;
    width: 100% !important;
    min-height: 112px;
    max-height: 240px;
    object-position: center center;
    z-index: 1;
  }

  @media (min-width: 426px) {
    min-height: 270px;
    margin-bottom: 16px;
  }

  @media (min-width: 769px) {
    padding: 48px;
    align-items: center;
    min-height: 420px;
    > h1 {
      width: 70%;
      max-width: 100%;
      font-size: 120px;
      line-height: 120px;
    }

    img {
      top: 70px;
      right: 48px;
      width: 100%;
      object-position: center center;
    }
  }

  @media (min-width: 1140px) {
    img {
      right: 153px;
    }
    > h1 {
      width: 50%;
    }
  }
`;

const BannerSponsor = (props: PageProps["heroData"]) => {
  return (
    <Container>
      <Block>
        <H1 color="#F45B69">{props.tile}</H1>
        <Suspense fallback={null}>
          <Image
            mobile={props?.background?.url!}
            alt={props?.background?.title! || ""}
            style={{
              maxWidth: "864px",
              borderRadius: "0px 32px 0px 0px",
              aspectRatio: "864 / 273",
              objectFit: "cover",
            }}
          />
        </Suspense>
      </Block>
      <Suspense fallback={null}>
        <Description data={props?.description?.json!} />
      </Suspense>
    </Container>
  );
};

export default BannerSponsor;
