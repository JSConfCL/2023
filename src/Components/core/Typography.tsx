import styled from '@emotion/styled';
import { motion } from 'framer-motion';

import { ViewportSizes } from '../../../styles/theme';

export const H1 = styled(motion.h1)<{ color?: string }>`
	font-family: 'Koulen';
	font-style: normal;
	font-weight: 400;
	font-size: 120px;
	line-height: 120px;
	/* or 100% */
	display: flex;
	align-items: center;
	text-transform: uppercase;
	color: ${({ color }) => color ?? 'white'};
`;

export const H2 = styled(motion.h2)`
	font-family: 'Koulen';
	letter-spacing: 1px;
	color: #ffffff;
	font-weight: 400;
	text-align: left;
	font-size: 40px;
	line-height: 40px;
	text-transform: uppercase;
	@media (min-width: ${ViewportSizes.Phone}px) {
		font-size: 80px;
		line-height: 80px;
	}
`;

export const H3 = styled(motion.h3)`
	font-family: 'Barlow';
	font-style: normal;
	font-weight: 800;
	font-size: 28px;
	line-height: 24px;
	letter-spacing: 0.5px;
	color: #ffffff;
	@media (min-width: ${ViewportSizes.Phone}px) {
		font-size: 32px;
		line-height: 43px;
	}
`;

export const P = styled(motion.p)`
	font-family: 'Barlow';
	font-weight: 400;
	font-size: 18px;
	font-style: normal;
	color: #e2e2e2;
	letter-spacing: 0.5px;
	line-height: 1.75rem;

	@media (min-width: ${ViewportSizes.Phone}px) {
		font-size: 20px;
	}
`;

export const B = styled(motion.b)`
	font-weight: bold;
	font-size: 18px;
	line-height: 1.75rem;
	@media (min-width: ${ViewportSizes.Phone}px) {
		font-size: 20px;
	}
`;

export const UL = styled(motion.ul)`
	list-style: disc;
	margin-inline-start: 1em;
	padding-left: 1rem;
	line-height: 1.75rem;
`;

export const LI = styled(motion.li)`
	font-size: 18px;
	line-height: 1.75rem;
	@media (min-width: ${ViewportSizes.Phone}px) {
		font-size: 20px;
	}
`;

export const Strong = styled.strong`
	font-weight: bold;
	font-size: 18px;
	line-height: 1.75rem;
	@media (min-width: ${ViewportSizes.Phone}px) {
		font-size: 20px;
	}
`;
