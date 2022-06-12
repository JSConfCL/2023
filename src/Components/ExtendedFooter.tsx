import type { NextPage } from "next";
import styled from "@emotion/styled";

import {
  FooterQueryQuery,
  useFooterQueryQuery,
} from "../graphql/footer.generated";

import { ParseQuery } from "../helpers/types";
import FollowUsSection from "../Components/sections/FollowUsSection";
import { Footer } from "../Components/Footer/Footer";
import SubscribeSection from "../Components/sections/SubscribeSection";

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
  background-color: ${({ theme }) => theme.elements.global.backgroundColor};

  @media (min-width: 769px) {
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
        <FollowUsSection page={data.page.followUsBlock} />
        <SubscribeSection page={data.page.subscribeBlock} />
      </FlexRow>
      <Footer page={data.page.footer} />
    </Container>
  );
};

export default ExtendedFooter;
