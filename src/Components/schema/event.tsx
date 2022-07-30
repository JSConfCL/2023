import React from "react";

const eventSctructuredData = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "JSConf Chile 2023",
  startDate: "2023-02-04T08:00-02:00",
  endDate: "2023-02-06T23:00-02:00",
  eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    name: "Matucana 100",
    "@type": "Place",
    address: {
      name: "Matucana 100",
      "@type": "PostalAddress",
      postalCode: "9170023",
      streetAddress: "Matucana 100, santiago",
      addressCountry: "Chile",
      addressRegion: "RM",
    },
  },
  image:
    "https://media-exp1.licdn.com/dms/image/D561BAQFBh-DN5nHajg/company-background_10000/0/1657916825774?e=1658628000&v=beta&t=2osmCkiGex1gJ15PVapkkLfom3-y-Hh3yvHy2Y-xZwM",
  description: "La primera JSConf en Chile, evento de tecnologia",
  organizer: {
    "@type": "Organization",
    name: "JSConfCL",
    url: "https://jsconf.cl",
  },
  offers: [],
  performer: {
    "@type": "Person",
    name: "JSCONFCHILE",
  },
};

const EventSchema = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSctructuredData) }}
    />
  );
};

export default EventSchema;
