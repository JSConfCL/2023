import { lazy, Suspense } from "react";
import styled from "@emotion/styled";

import {
  FooterQueryQuery,
  useFooterQueryQuery,
} from "../graphql/footer.generated";

import { ParseQuery } from "../helpers/types";
import { ViewportSizes } from "../../styles/theme";

const Footer = lazy(() => import("../Components/Footer/Footer"));
const SubscribeSection = lazy(
  () => import("../Components/sections/SubscribeSection")
);
const FollowUsSection = lazy(
  () => import("../Components/sections/FollowUsSection")
);

type Page = ParseQuery<FooterQueryQuery["page"]>;

export type PageProps = {
  navBar: Page["navBar"];
  followUsBlock: Page["followUsBlock"];
  footer: Page["footer"];
  subscribeBlock: Page["subscribeBlock"];
};

const FlexRow = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  width: 100vw;
  align-self: flex-start;
  padding: 16px;
  gap: 3rem;
  background-color: ${({ theme }) => theme.elements.global.backgroundColor};
  @media (min-width: ${ViewportSizes.Phone}px) {
    gap: 0;
    flex-direction: row;
    align-self: center;
    padding: 48px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.elements.global.backgroundColor};
  justify-content: center; ;
`;

const ExtendedFooter = () => {
  const [{ data }] = useFooterQueryQuery({
    variables: {
      id: "45QeQG01Mx67Ng2XNWksmo",
      locale: "es-CL",
      isPreview: Boolean(process.env.NEXT_PUBLIC_CONTENTFUL_IS_PREVIEW),
    },
  });
  if (!data?.page) {
    return null;
  }
  return (
    <Container>
      <FlexRow>
        <Suspense fallback={null}>
          <FollowUsSection page={data.page.followUsBlock} />
        </Suspense>
        <Suspense fallback={null}>
          <SubscribeSection page={data.page.subscribeBlock} />
        </Suspense>
      </FlexRow>
      <Suspense fallback={null}>
        <Footer page={data.page.footer} />
      </Suspense>
    </Container>
  );
};

export default ExtendedFooter;
