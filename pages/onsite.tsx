import { lazy, Suspense } from "react";

import { DefaultPageLayout } from "../src/Components/Layouts/DefaultPagelayout";
import Seo from "../src/Components/Seo";
import {
  HowQueryDocument,
  HowQueryQuery,
  HowQueryQueryVariables,
} from "../src/graphql/how.generated";
import { urlQlient } from "../src/graphql/urql";
import { ParseQuery } from "../src/helpers/types";

const HowCard = lazy(async () => await import("../src/Components/Card/How"));

type Page = ParseQuery<HowQueryQuery["page"]>;

export interface PageProps {
  howItems: Page["howBlockCollection"];
  followUsData: Page["followUsBlock"];
  GM_KEY: string;
  seo: Page["seo"];
}

export default function OnSitePage(props: PageProps) {
  return (
    <>
      <Seo {...props.seo} />
      {props.howItems?.items?.map((elem, index) =>
        elem.sectionsCollection?.items.map((item, subIndex) => (
          <Suspense key={subIndex} fallback={null}>
            <HowCard
              {...item}
              number={subIndex + 1}
              key={subIndex}
              GM_KEY={props.GM_KEY}
            />
          </Suspense>
        ))
      )}
    </>
  );
}

export async function getStaticProps() {
  const queryResults = await urlQlient
    .query<HowQueryQuery, HowQueryQueryVariables>(HowQueryDocument, {
      id: "6WMOBLoBEhCWUtyQtw872A",
      locale: "es-CL",
      isPreview: Boolean(process.env.NEXT_PUBLIC_CONTENTFUL_IS_PREVIEW),
    })
    .toPromise();
  const page = queryResults.data?.page as Page;
  if (!page) return { props: {} };
  const props: PageProps = {
    howItems: page?.howBlockCollection,
    followUsData: page?.followUsBlock,
    GM_KEY: process.env.NEXT_PUBLIC_CONTENTFUL_API_GOOGLE_MAP,
    seo: page?.seo || null,
  };
  return {
    props,
  };
}

OnSitePage.getLayout = DefaultPageLayout;
