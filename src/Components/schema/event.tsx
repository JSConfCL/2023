import React from "react";

const eventSctructuredData = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "JSConf Chile 2023",
  startDate: "2023-02-04T08:00-02:00",
  endDate: "2023-02-06T23:00-02:00",
  eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: [
    {
      "@type": "Place",
      name: "Matucana 100",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Matucana 100",
        addressLocality: "Santiago",
        postalCode: "",
        addressRegion: "RM",
        addressCountry: "CL",
      },
    },
  ],
  description: "La primera JSConf en Chile, evento de tecnologia",
  organizer: {
    "@type": "Organization",
    name: "JSConfCL",
    url: "https://jsconf.cl",
  },
};

const EventSchema = () => {
  return (
    <script type="application/ld+json">
      {JSON.stringify(eventSctructuredData)}
    </script>
  );
};

export default EventSchema;
