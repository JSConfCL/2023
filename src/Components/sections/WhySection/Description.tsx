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

import { ViewportSizes } from '../../../../styles/theme';
import { B, UL } from '../../core/Typography';

export const P = styled(motion.p)`
	font-family: 'Barlow';
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
