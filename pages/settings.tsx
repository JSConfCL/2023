import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';

import { DefaultPageLayout } from '../src/Components/Layouts/DefaultPagelayout';
import { UserInformationForm } from '../src/Components/UserInformationForm';
import { Alert } from '../src/Components/common/app';

import { me } from '../src/helpers/API';
import { jsconfTheme, ViewportSizes } from '../styles/theme';

const Title = styled.h2`
	font-family: 'Koulen';
	font-style: normal;
	font-weight: 400;
	display: inline-block;
	line-height: 1;
	transition-duration: 250ms;
	transition-property: font-size;
	font-size: 2.5rem;

	@media (min-width: ${ViewportSizes.TabletLandscape}px) {
		font-size: 2.2rem;
	}
`;

const StyledContainer = styled.div`
	width: 100%;
	max-width: 500px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

const SytledImageContainer = styled.div`
	text-align: center;
`;

const IMAGE_SIZE = '200px';

const StyledLoadingImage = styled.div`
	width: ${IMAGE_SIZE};
	height: ${IMAGE_SIZE};
	background: ${jsconfTheme.colors.jsconfBlack};
	border-radius: 50%;
	border: 8px solid ${jsconfTheme.colors.jsconfYellow};
	margin: 0 auto;
`;

const Settings = () => {
	const { isLoading, data: user } = useQuery(['me'], me);
	return (
		<StyledContainer>
			{user?.id && !user.email ? (
				<Alert title="Informacion Importante:">
					Pudimos crear tu cuenta. Pero no conseguimos correo electrónico
					asociado. Por lo tanto, no podremos comunicarnos contigo. (Y tampoco
					podrás comprar entradas). Te pedimos registres un correo electrónico
					para poder informarte los próximos pasos.
				</Alert>
			) : null}
			<Title>Configuracion</Title>
			{isLoading ? (
				<SytledImageContainer>
					<StyledLoadingImage />
				</SytledImageContainer>
			) : (
				<UserInformationForm />
			)}
		</StyledContainer>
	);
};

Settings.getLayout = DefaultPageLayout;

export default Settings;
