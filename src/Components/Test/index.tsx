import React from "react";
import { useAssetCollectionQuery } from "./test.generated";

type Props = {};

export const Test = (props: Props) => {
  const [{ data, fetching, error }] = useAssetCollectionQuery();
  if (error) {
    return <div>error</div>;
  }
  if (fetching) {
    return <div>FETCHING</div>;
  }
  return <div>{JSON.stringify(data)}</div>;
};
