import styled from "@emotion/styled";
import { CustomMarkdown } from "../src/Components/CustomMarkdown";
import { DefaultPagelayout } from "../src/Components/Layouts/DefaultPagelayout";
import {
  PoliticasDePrivacidadPageDocument,
  PoliticasDePrivacidadPageQuery,
  PoliticasDePrivacidadPageQueryVariables,
} from "../src/graphql/politicas_de_privacidad.generated";
import { urlQlient } from "../src/graphql/urql";
import { ParseQuery } from "../src/helpers/types";
import { ViewportSizes } from "../styles/theme";

type Page = ParseQuery<PoliticasDePrivacidadPageQuery["page"]>;

export interface PageProps {
  content: Page["contentCollection"]["items"];
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

export default function PoliticasDePrivacidad(props: PageProps) {
  return (
    <>
      <ContentContainer>
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
    .query<
      PoliticasDePrivacidadPageQuery,
      PoliticasDePrivacidadPageQueryVariables
    >(PoliticasDePrivacidadPageDocument, {
      locale: "es-CL",
      isPreview: Boolean(process.env.NEXT_PUBLIC_CONTENTFUL_IS_PREVIEW),
    })
    .toPromise();

  const page = queryResults.data?.page as Page;
  const props: PageProps = {
    content: page.contentCollection.items,
  };

  return {
    props,
  };
}

PoliticasDePrivacidad.getLayout = DefaultPagelayout;
