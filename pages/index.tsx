import type { NextPage } from "next";
import { NavBar } from "../src/Components/NavBar/NavBar";
import { Hero } from "../src/Components/sections/Hero";
import WhySection from "../src/Components/sections/WhySection";
import HowSection from "../src/Components/sections/HowSection";
import {
  HomeQueryDocument,
  HomeQueryQuery,
} from "../src/graphql/home.generated";
import { urlQlient } from "../src/graphql/urql";


type Props = {
  whyItems: HomeQueryQuery["whyBlockCollection"];
  howItems: HomeQueryQuery["howBlockCollection"];
};


const Home: NextPage<Props> = (props) => {
  return (
    <div>
      <NavBar />
      <Hero />
      <WhySection page={props.whyItems} />
      <HowSection page={props.howItems} />
    </div>
  );
};

export async function getStaticProps() {
  const queryResults = await urlQlient
    .query<HomeQueryQuery>(HomeQueryDocument)
    .toPromise();

  const props: Props = {
    whyItems: queryResults?.data?.whyBlockCollection!,
    howItems: queryResults?.data?.howBlockCollection!,
  };

  return {
    props,
  };
}

export default Home;
