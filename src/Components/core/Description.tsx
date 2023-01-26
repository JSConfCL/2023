import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {
  Block,
  BLOCKS,
  Document,
  Inline,
  INLINES,
  MARKS,
} from "@contentful/rich-text-types";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { ReactNode } from "react";

import { B, P, UL, LI, Anchor } from "./Typography";

const Section = styled(motion.section)``;

const getDescriptionRichTextOptions = (variant: "sm" | null | undefined) => ({
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: Block | Inline, children: ReactNode) => (
      <P variant={variant}>{children}</P>
    ),
    [BLOCKS.UL_LIST]: (node: Block | Inline, children: ReactNode) => (
      <UL variant={variant}>{children}</UL>
    ),
    [BLOCKS.LIST_ITEM]: (node: Block | Inline, children: ReactNode) => (
      <LI variant={variant}>{children}</LI>
    ),
    [INLINES.HYPERLINK]: (node: Block | Inline, children: ReactNode) => (
      <Anchor href={node?.data?.uri ?? ""}>{children}</Anchor>
    ),
  },
  renderMark: {
    [MARKS.BOLD]: (text: ReactNode) => <B>{text}</B>,
  },
  renderText: (text: string) => text,
});

const Description = (props: {
  data: Document;
  animationVariants?: any;
  variant?: "sm" | null;
}) => {
  return (
    <Section variants={props.animationVariants}>
      {documentToReactComponents(
        props.data,
        getDescriptionRichTextOptions(props.variant)
      )}
    </Section>
  );
};

export default Description;
