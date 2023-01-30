import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import { Suspense } from "react";

import { PageProps as HomePageProps } from "../../../../pages/index";
import { PageProps as LaPreviaProps } from "../../../../pages/laprevia";

import WhyCard from "../../Card/Why";

const GetAccount = dynamic(async () => await import("../../GetAccount"), {
  ssr: false,
});

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

const WhySection = ({
  whyItems,
}: {
  whyItems?: LaPreviaProps["whyItems"] | HomePageProps["aboutItems"];
}) => {
  return (
    <Container>
      <Suspense fallback={null}>
        {whyItems?.map((elem, index) => (
          <WhyCard number={index + 1} {...elem} key={`why-card-${index}`} />
        ))}
      </Suspense>
      <div style={{ textAlign: "center" }}>
        <GetAccount />
      </div>
    </Container>
  );
};
export default WhySection;
