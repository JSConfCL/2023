import styled from "@emotion/styled";
import { PageProps } from "../../../pages/cfp";
import { H1, P } from "../core/Typography";
import Description from "../core/Description";
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

  .principal img {
    top: 140px;
  }

  @media (min-width: 500px) {
    margin-bottom: 100px;
  }

  @media (min-width: 769px) {
    padding: 48px;
    align-items: center;
    max-height: 620px;
    > h1 {
      width: 70%;
      max-width: 100%;
      font-size: 120px;
      line-height: 120px;
    }

    img {
      top: 100px;
      right: 48px;
      width: 100%;
      object-position: center center;
    }
  }

  @media (min-width: 1140px) {
    > h1 {
      width: 50%;
    }
  }
`;

const ImageContainer = styled.section`
  position: absolute;
  display: flex;
  flex-direction: column;
  right: 0px;
  top: 0px;
  width: calc(100% - 240px);
  z-index: 1;
`;

const WrapperDescription = styled.section`
  max-width: 600px;
  > section {
    max-width: 350px;
    padding: 16px 0px;
  }
  z-index: 3;
`;

const BannerCFP = (props: PageProps["heroData"]) => {
  return (
    <Container>
      <WrapperDescription>
        <H1 color="#F45B69">{props.tile}</H1>
        <Description data={props?.description?.json!} />
        <Description data={props?.secondDescription?.json!} />
      </WrapperDescription>
      <ImageContainer>
        <Image
          mobile={props?.background?.url!}
          alt={props?.background?.title! || ""}
          className="principal"
          style={{
            position: "absolute",
            maxWidth: "864px",
            borderRadius: "0px 32px 0px 0px",
            aspectRatio: "830 / 365",
            objectFit: "cover",
            zIndex: 2,
          }}
        />
        <Image
          mobile="/images/image-background.png"
          alt="background"
          className="background"
          style={{
            position: "absolute",
            zIndex: 1,
            width: "70%",
            bottom: "30px",
            right: "0px",
          }}
        />
      </ImageContainer>
    </Container>
  );
};

export default BannerCFP;
