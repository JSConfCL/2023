import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import { lazy, Suspense } from "react";

import { PageProps } from "../../../../pages/laprevia";

const WhyCard = lazy(async () => await import("../../Card/Why"));

const GetAccount = dynamic(async () => await import("../../GetAccount"), {
  ssr: false,
});

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

const WhySection = ({ whyItems }: { whyItems?: PageProps["whyItems"] }) => {
  return (
    <Container>
      {whyItems?.map((elem, index) => (
        <Suspense key={`why-card-${index}`} fallback={null}>
          <WhyCard number={index + 1} {...elem} key={`why-card-${index}`} />
        </Suspense>
      ))}
      <div style={{ textAlign: "center" }}>
        <GetAccount />
      </div>
    </Container>
  );
};
export default WhySection;
