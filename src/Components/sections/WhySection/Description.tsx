import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import {
  Document,
  Block,
  Inline,
  BLOCKS,
  MARKS,
} from "@contentful/rich-text-types";
import { UL, B } from "../../core/Typography";
import { ViewportSizes } from "../../../../styles/theme";

export const P = styled(motion.p)`
  font-family: "Barlow";
  font-weight: 400;
  font-size: 16px;
  font-style: normal;
  color: #e2e2e2;
  letter-spacing: 0.5px;
  line-height: 25px;

  @media (min-width: ${ViewportSizes.Phone}px) {
    font-size: 16px;
  }
  @media (min-width: ${ViewportSizes.TabletLandscape}) {
    font-size: 18px;
  }
`;

const Block = styled(motion.section)``;

const descriptionRichTextOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: Block | Inline, children: ReactNode) => (
      <P>{children}</P>
    ),
    [BLOCKS.UL_LIST]: (node: Block | Inline, children: ReactNode) => (
      <UL>{children}</UL>
    ),
  },
  renderMark: {
    [MARKS.BOLD]: (text: ReactNode) => <B>{text}</B>,
  },
  renderText: (text: string) => text,
};
const Description = (props: { data: Document; animationVariants?: any }) => {
  return (
    <Block variants={props.animationVariants}>
      {documentToReactComponents(props.data, descriptionRichTextOptions)}
    </Block>
  );
};

export default Description;
