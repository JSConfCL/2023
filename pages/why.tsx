import { lazy, Suspense } from "react";

import { DefaultPagelayout } from "../src/Components/Layouts/DefaultPagelayout";
import Seo from "../src/Components/Seo";
import { urlQlient } from "../src/graphql/urql";
import {
  WhyQueryDocument,
  WhyQueryQuery,
  WhyQueryQueryVariables,
} from "../src/graphql/why.generated";
import { ParseQuery } from "../src/helpers/types";

const WhyBanner = lazy(
  async () => await import("../src/Components/Banner/Why")
);
const WhyCard = lazy(async () => await import("../src/Components/Card/Why"));

type Page = ParseQuery<WhyQueryQuery["page"]>;

export interface PageProps {
  whyItems: Page["whyBlockCollection"];
  heroData: Page["heroBlock"];
  seo: Page["seo"];
}

export default function Why(props: PageProps) {
  return (
    <>
      <Seo {...props.seo} />
      <Suspense fallback={null}>
        <WhyBanner {...props.heroData} />
      </Suspense>
      {props.whyItems?.items?.map((elem, index) => (
        <Suspense key={`why-card-${index}`} fallback={null}>
          <WhyCard number={index + 1} {...elem} key={`why-card-${index}`} />
        </Suspense>
      ))}
    </>
  );
}

export async function getStaticProps() {
  const queryResults = await urlQlient
    .query<WhyQueryQuery, WhyQueryQueryVariables>(WhyQueryDocument, {
      id: "7rT5EZIWOXMxoy8151P9WL",
      locale: "es-CL",
      isPreview: Boolean(process.env.NEXT_PUBLIC_CONTENTFUL_IS_PREVIEW),
    })
    .toPromise();
  const page = queryResults.data?.page as Page;
  const props: PageProps = {
    heroData: page?.heroBlock || null,
    whyItems: page?.whyBlockCollection || null,
    seo: page?.seo || null,
  };
  return {
    props,
  };
}

Why.getLayout = DefaultPagelayout;
