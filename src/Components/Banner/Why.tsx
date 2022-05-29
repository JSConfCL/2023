import styled from "@emotion/styled";
import { PageProps } from "../../../pages/why";
import { H1 } from "../core/Typography";
import Image from "../core/Image";

const Container = styled.section`
  display: flex;
  position: relative;
  flex-direction: row;
  max-width: 1440px;
  height: 100vh;
  padding: 64px;
  align-items: center;
  max-height: 420px;

  > h1 {
    z-index: 3;
    width: 50%;
  }
`;

const BannerWhy = (props: PageProps["heroData"]) => {
  return (
    <Container>
      <H1 color="#F45B69">{props.tile}</H1>
      <Image
        mobile={props?.background?.url!}
        alt={props?.background?.title! || ""}
        style={{
          position: "absolute",
          width: "864px",
          aspectRatio: "864 / 273",
          objectFit: "cover",
          objectPosition: "bottom",
          right: "153px",
          top: "64px",
          zIndex: 2,
        }}
      />
    </Container>
  );
};

export default BannerWhy;
