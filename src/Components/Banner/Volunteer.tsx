import styled from "@emotion/styled";
import { PageProps } from "../../../pages/volunteer";
import { H1 } from "../core/Typography";
import Image from "../core/Image";

const Container = styled.section`
  display: flex;
  position: relative;
  flex-direction: row;
  max-width: 1440px;
  height: 100vh;
  padding: 16px;
  align-items: flex-start;
  max-height: 240px;
  > h1 {
    z-index: 3;
    font-size: 48px;
    line-height: 48px;
    font-weight: 400;
    width: 100%;
    max-width: 250px;
  }

  img {
    right: 16px;
    top: 80px;
    width: calc(100% - 33px) !important;
    min-height: 112px;
    object-position: center center;
  }

  @media (min-width: 500px) {
    margin-bottom: 100px;
  }

  @media (min-width: 769px) {
    padding: 48px;
    align-items: center;
    max-height: 420px;
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

const BannerVolunteer = (props: PageProps["heroData"]) => {
  return (
    <Container>
      <H1 color="#F45B69">{props.tile}</H1>
      <Image
        mobile={props?.background?.url!}
        alt={props?.background?.title! || ""}
        style={{
          position: "absolute",
          maxWidth: "864px",
          borderRadius: "0px 32px 0px 0px",
          aspectRatio: "864 / 273",
          objectFit: "cover",
          zIndex: 2,
        }}
      />
    </Container>
  );
};

export default BannerVolunteer;
