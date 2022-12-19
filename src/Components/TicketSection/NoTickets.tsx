import styled from '@emotion/styled';
import { useAtomValue } from 'jotai';

import { isAuthenticatedAtom } from '../../helpers/auth';
import Image from '../core/Image';

import { SectionTile } from './Title';
import {
	Paragraph,
	SideContainer,
	LeftSide,
	RigthSide,
	ImageWrapper,
	Shadow,
	ImageContainer,
	GithubButton,
} from './shared';

// ;

const SocialAnchor = styled.a<{ type: 'twitter' | 'facebook' | 'linkedin' }>(
	({ theme, type }) => [
		{
			display: `inline-block`,
			position: 'relative',
			fontWeight: 'bold',
			'&:after': {
				content: `""`,
				position: 'absolute',
				width: '100%',
				transform: 'scaleX(0)',
				height: '4px',
				bottom: 0,
				left: 0,
				backgroundColor: theme.colors.social[type],
				transformOrigin: 'bottom right',
				transition: 'transform 0.25s ease-out',
			},
			'&:hover:after': {
				transform: 'scaleX(1)',
				transformOrigin: 'bottom left',
			},
		},
	],
);

const NoTickets = ({ imageUrl }: { imageUrl: string }) => {
	const isLoggedIn = useAtomValue(isAuthenticatedAtom);
	return (
		<>
			<SectionTile
				status="active"
				number="01."
				text={isLoggedIn ? 'Falta poco!' : 'Crea tu cuenta'}
			/>
			<SideContainer>
				<LeftSide>
					<Paragraph>Aún no tenemos tickets a la venta 😢</Paragraph>
					<Paragraph>Pero falta poco! </Paragraph>
					{isLoggedIn ? (
						<>
							<Paragraph>
								Ya tienes tu cuenta de JSConf creada! Cuando anunciemos la fecha
								de lanzamiento, recibirás un email (al correo de tu cuenta de
								Github).
							</Paragraph>
							<Paragraph>
								Para estar al tanto del lanzamiento de los tickets, noticias y
								todos los anuncios de la JSConf, puedes seguirnos en{' '}
								<SocialAnchor
									href="https://twitter.com/jsconfcl"
									target="_blank"
									rel="noreferrer"
									type="twitter"
								>
									Twitter (@JSconfCL)
								</SocialAnchor>
								,{' '}
								<SocialAnchor
									href="https://twitter.com/jsconfcl"
									target="_blank"
									rel="noreferrer"
									type="facebook"
								>
									Facebook
								</SocialAnchor>
								, o{' '}
								<SocialAnchor
									href="https://twitter.com/jsconfcl"
									target="_blank"
									rel="noreferrer"
									type="linkedin"
								>
									Linkedin
								</SocialAnchor>
							</Paragraph>
						</>
					) : (
						<>
							<Paragraph>
								Mientras tanto, puedes crear tu cuenta JSConf Chile, así estarás
								list@ para cuando salgan a la venta!
							</Paragraph>
							<GithubButton />
							<Paragraph>
								Podrás recibir correos cuando los tickets estén disponibles,
								notificaciones de preventas (promociones), y anuncios de la
								JSConf.
							</Paragraph>
						</>
					)}
				</LeftSide>
				<RigthSide>
					<ImageWrapper>
						<ImageContainer>
							<Image mobile={imageUrl} alt={'Un ticket de la JSCconf'} />
							<Shadow />
						</ImageContainer>
					</ImageWrapper>
				</RigthSide>
			</SideContainer>
		</>
	);
};

export default NoTickets;
