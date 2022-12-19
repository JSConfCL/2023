import dynamic from "next/dynamic";
import { Suspense } from "react";

import { DefaultPageLayout } from "../src/Components/Layouts/DefaultPagelayout";
import Seo from "../src/Components/Seo";
import {
  CfpQueryDocument,
  CfpQueryQuery,
  CfpQueryQueryVariables,
} from "../src/graphql/cfp.generated";
import { urlQlient } from "../src/graphql/urql";
import { ParseQuery } from "../src/helpers/types";

const BannerCFP = dynamic(
  async () => await import("../src/Components/Banner/CFP")
);

type Page = ParseQuery<CfpQueryQuery["page"]>;

export interface PageProps {
  heroData: Page["heroBlock"];
  seo: Page["seo"];
}

export default function OnSitePage(props: PageProps) {
  return (
    <>
      <Seo {...props.seo} />
      {Boolean(props.heroData) && (
        <Suspense fallback={null}>
          <BannerCFP {...props.heroData} />
        </Suspense>
      )}
    </>
  );
}

export async function getStaticProps() {
  const queryResults = await urlQlient
    .query<CfpQueryQuery, CfpQueryQueryVariables>(CfpQueryDocument, {
      id: "1GDpX9fgkG15wZWOYFV4il",
      locale: "es-CL",
      isPreview: Boolean(process.env.NEXT_PUBLIC_CONTENTFUL_IS_PREVIEW),
    })
    .toPromise();
  const page = queryResults.data?.page;
  if (page === null || page === undefined) {
    return { props: {} };
  }
  const props = {
    heroData: page?.heroBlock ?? null,
    seo: page?.seo ?? null,
  };
  return {
    props,
  };
}

OnSitePage.getLayout = DefaultPageLayout;
