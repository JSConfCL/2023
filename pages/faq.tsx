import styled from "@emotion/styled";
import { H1 } from "../src/Components/core/Typography";
import { CustomMarkdown } from "../src/Components/CustomMarkdown";
import { DefaultPagelayout } from "../src/Components/Layouts/DefaultPagelayout";
import Seo from "../src/Components/Seo";
import {
  FaqDocument,
  FaqQueryVariables,
  FaqQuery,
} from "../src/graphql/faq.generated";
import { urlQlient } from "../src/graphql/urql";
import { ParseQuery } from "../src/helpers/types";
import { ViewportSizes } from "../styles/theme";

type Page = ParseQuery<FaqQuery["page"]>;

export interface PageProps {
  content: Page["contentCollection"]["items"];
  seo: Page["seo"];
}

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-top: 4rem;
  width: 100vw;
  max-width: 1440px;
  padding-left: 1rem;
  padding-right: 1rem;
  @media (min-width: ${ViewportSizes.Phone}px) {
    padding-left: 3rem;
    padding-right: 3rem;
  }
  @media (min-width: ${ViewportSizes.TabletLandscape}px) {
  }
  @media (min-width: ${ViewportSizes.Desktop}px) {
    gap: 32px;
  }
`;

const StyledH1 = styled(H1)`
  @media (max-width: ${ViewportSizes.Phone}px) {
    font-size: 64px;
  }
`;

export default function FAQ(props: PageProps) {
  return (
    <>
      <Seo {...props.seo} />
      <ContentContainer>
        <StyledH1>Preguntas Frecuentes</StyledH1>
        {props.content
          .map((el) => {
            if (el.__typename === "MarkdownBlock") {
              return (
                <CustomMarkdown key={el.sys.id}>
                  {el.markdownTextContent}
                </CustomMarkdown>
              );
            }
            return null;
          })
          .filter(Boolean)}
      </ContentContainer>
    </>
  );
}

export async function getStaticProps() {
  const queryResults = await urlQlient
    .query<FaqQuery, FaqQueryVariables>(FaqDocument, {
      locale: "es-CL",
      isPreview: Boolean(process.env.NEXT_PUBLIC_CONTENTFUL_IS_PREVIEW),
      id: "63a4MlorsHw5TRVyg2lQNU",
    })
    .toPromise();

  const page = queryResults.data?.page as Page;
  const props: PageProps = {
    content: page.contentCollection.items,
    seo: page?.seo || null,
  };

  return {
    props,
  };
}

FAQ.getLayout = DefaultPagelayout;
