import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { Document, Block, Inline, BLOCKS } from "@contentful/rich-text-types";
import { P, B } from "./Typography";

const Block = styled(motion.section)``;

const descriptionRichTextOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: Block | Inline, children: ReactNode) => (
      <P>{children}</P>
    ),
  },
};
const Description = (props: { data: Document; animationVariants?: any }) => {
  return (
    <Block variants={props.animationVariants}>
      {documentToReactComponents(props.data, descriptionRichTextOptions)}
    </Block>
  );
};

export default Description;
