import React, { ReactNode } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import {
  Document,
  Block,
  Inline,
  MARKS,
  BLOCKS,
} from "@contentful/rich-text-types";
import { P, B } from "./Typography";

const descriptionRichTextOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: Block | Inline, children: ReactNode) => (
      <P>{children}</P>
    ),
  },
};
const Description = (props: { data: Document }) => {
  return (
    <>{documentToReactComponents(props.data, descriptionRichTextOptions)}</>
  );
};

export default Description;
