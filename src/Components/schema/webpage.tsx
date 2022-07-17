const webSctructuredData = {
  "@context": "https://schema.org/",
  "@type": "WebSite",
  name: "JSConfChile",
  url: "https://jsconf.cl",
  description:
    "a primera edición Chilena, de la más prestigiosa conferencia de JavaScript. 2 días de Charlistas internacionales, comunidad, aprendizaje y conexiones, este 03 y 04 de Febrero, 2023.",
  image:
    "https://images.ctfassets.net/1kfhsqlc8ewi/54n9o2bhIcJqb441e7BgXq/7e5437a6687bec04e0ee38ec36a2106a/no-background-black.png",
};

const WebSchema = () => {
  return (
    <script type="application/ld+json">
      {JSON.stringify(webSctructuredData)}
    </script>
  );
};

export default WebSchema;
