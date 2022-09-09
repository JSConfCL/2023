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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
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
