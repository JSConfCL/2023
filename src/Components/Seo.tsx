import Head from "next/head";

interface IMetadata {
  name?: string;
  property?: string;
  content: string;
}

const Seo = (props: {
  title: string;
  description: string;
  metadata: IMetadata[];
  scripts?: any;
}) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={props.description} />
        {props.metadata?.map((elem, index) => (
          <meta key={`metadata-${index}`} {...elem} />
        ))}

        {props.scripts}
      </Head>
    </>
  );
};

export default Seo;
