import styled from '@emotion/styled';

import { ViewportSizes } from '../../../styles/theme';
import Image from '../core/Image';
import { H2, P } from '../core/Typography';

const Container = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 64px 16px;
`;
const ImageWrapper = styled.section`
	width: 50%;
	@media (min-width: ${ViewportSizes.Phone}px) {
		width: 60%;
	}

	@media (min-width: ${ViewportSizes.TabletLandscape}px) {
		width: 90%;
	}

	@media (min-width: ${ViewportSizes.Desktop}px) {
		width: 100%;
	}
`;

const TitleDescription = (props: { title: string; description: string }) => {
	return (
		<Container>
			<ImageWrapper>
				<Image
					mobile="https://images.ctfassets.net/1kfhsqlc8ewi/vWYrXTF1XIpXzCrCOKate/41a1703baf107004ff6f08719a69c8d7/404.svg"
					alt=""
				/>
			</ImageWrapper>
			<H2>{props.title}</H2>
			<P>{props.description}</P>
		</Container>
	);
};

export default TitleDescription;
