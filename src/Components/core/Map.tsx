import GoogleMapReact from "google-map-react";
import React from "react";

const Ping = (props: { text: string }) => <section>{props.text}</section>;

const SimpleMap = (props: {
  center: { lat: number; lng: number };
  pto: { lat: number; lng: number };
  zoom: number;
  name: string;
}) => {
  return (
    <section style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={props.center}
        defaultZoom={props.zoom}
      >
        <Ping {...props.pto} text={props.name} />
      </GoogleMapReact>
    </section>
  );
};

export default SimpleMap;
