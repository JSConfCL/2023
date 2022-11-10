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
  grid-template-colums: 50% 50%;
  @media (min-width: ${ViewportSizes.TabletLandscape}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const RenderingLayout = (props: { constributorTypeName: string }) => {
  console.log(props.constributorTypeName);

  return;
  // {props.constributorTypeName === 'Platinum Sponsor' ? <FlexLayout/> : <GridLayout/>}
  // if((props.constributorTypeName === "Platinum Sponsor")|| (props.constributorTypeName === "Gold Sponsor") || (props.constributorTypeName === "Silver Sponsor")){
  //     <FlexLayout/>
  // }
  // else{
  //    <GridLayout/>
  // }
  {
    props.constributorTypeName === "Platinum" && <FlexLayout />;
    props.constributorTypeName === "Gold" && <FlexLayout />;
    props.constributorTypeName === "Silver" && <FlexLayout />;
    props.constributorTypeName === "Bronze" && <GridLayout />;
  }
};

export default RenderingLayout;
