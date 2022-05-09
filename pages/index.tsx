import type { NextPage } from "next";
import { NavBar } from "../src/Components/NavBar/NavBar";
import { Hero } from "../src/Components/sections/Hero";
import WhySection from "../src/Components/sections/WhySection";
import {
  HomeQueryDocument,
  HomeQueryQuery,
} from "../src/graphql/home.generated";
import { urlQlient } from "../src/graphql/urql";


type Props = {
  logo: string;
  whyItems: HomeQueryQuery["whyBlockCollection"]
};


const Home: NextPage<Props> = () => {
  return (
    <div>

      <NavBar logo={props.logo} />
      <Hero logo={props.logo} />
      <WhySection page={props.whyItems} />
    </div>
  );
};

export async function getStaticProps() {
  const queryResults = await urlQlient
    .query<HomeQueryQuery>(HomeQueryDocument)
    .toPromise();

  const props: Props = {
    logo: queryResults?.data?.darkLogo?.url!,
    whyItems: queryResults?.data?.whyBlockCollection!
  };

  return {
    props,
  };
}

export default Home;
