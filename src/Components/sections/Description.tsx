import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import {
	Block,
	BLOCKS,
	Document,
	Inline,
	MARKS,
} from '@contentful/rich-text-types';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

import { B, P, UL } from '../core/Typography';

const Section = styled(motion.section)``;

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
		<Section variants={props.animationVariants}>
			{documentToReactComponents(props.data, descriptionRichTextOptions)}
		</Section>
	);
};

export default Description;
