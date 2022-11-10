import { useState, useEffect, lazy, Suspense } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { H2 } from "../core/Typography";
import { PageProps } from "../../../pages";
import useMediaQuery from "../../helpers/useMediaQuery";
import { ViewportSizes } from "../../../styles/theme";

const FlexLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media (min-width: ${ViewportSizes.TabletLandscape}) {
    flex-direction: row;
  }
`;

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  @media (min-width: ${ViewportSizes.TabletLandscape}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const RenderingLayout = (props: {
  constributorTypeName: string;
  children: any;
}) => {
  console.log(props.constributorTypeName);
  console.log(props.children);

  return (
    <>
      {props.constributorTypeName === "Platinum Sponsor" && (
        <FlexLayout>{props.children}</FlexLayout>
      )}
      {props.constributorTypeName === "Gold Sponsor" && (
        <FlexLayout>{props.children}</FlexLayout>
      )}
      {props.constributorTypeName === "Silver Sponsor" && (
        <FlexLayout>{props.children}</FlexLayout>
      )}
      {props.constributorTypeName === "Bronze Sponsor" && (
        <GridLayout>{props.children}</GridLayout>
      )}
    </>
  );
};

export default RenderingLayout;
