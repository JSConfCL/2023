import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';
import confetti from 'canvas-confetti';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

import { DefaultPageLayout } from '../../src/Components/Layouts/DefaultPageLayout';
import Seo from '../../src/Components/Seo';
import { Ticket } from '../../src/Components/Ticket/Ticket';
import { PageContainer } from '../../src/Components/common/PageContainer';
import { H2, H3 } from '../../src/Components/core/Typography';

import {
	TicketsQueryDocument,
	TicketsQueryQuery,
	TicketsQueryQueryVariables,
} from '../../src/graphql/tickets.generated';
import { urlQlient } from '../../src/graphql/urql';
import { me, myTickets } from '../../src/helpers/API';
import { ParseQuery } from '../../src/helpers/types';
import { colors, ViewportSizes } from '../../styles/theme';

type Page = ParseQuery<TicketsQueryQuery['page']>;

export interface PageProps {
	seo: Page['seo'];
}

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	padding-top: 1rem;
	padding-bottom: 8rem;
	gap: 3rem;
	transition: gap 250ms ease-in-out;
	@media (max-width: ${ViewportSizes.Phone}px) {
		gap: 4rem;
	}
	@media (min-width: ${ViewportSizes.TabletLandscape}px) {
		gap: 6rem;
	}
	@media (min-width: ${ViewportSizes.Desktop}px) {
		gap: 6rem;
	}
`;

const TextContainer = styled.div`
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 2rem;
`;

const Title = styled(H2)`
	text-align: center;
`;

const EndingTitle = styled(H3)`
	text-align: center;
`;

const Paragraph = styled.p`
	text-align: center;
	font-size: 2rem;
`;

const A = styled.a`
	font-weight: bold;
`;

const StyledCanvas = styled.canvas`
	position: fixed;
	top: 0;
	left: 0;
	height: 99vh;
	width: 100vw;
	overflow: hidden;
	z-index: 0;
`;

const confettiColors = [colors.jsconfYellow, colors.jsconfBlack];

export default function Tickets(props: PageProps) {
	const { data: user } = useQuery(['me'], me);
	const { data: allTickets } = useQuery(['mytickets'], myTickets);

	const ref =
		useRef<HTMLCanvasElement>() as React.MutableRefObject<HTMLCanvasElement>;

	useEffect(() => {
		if (!ref.current) {
			return;
		}
		const myConfetti = confetti.create(ref.current, {
			resize: true,
			useWorker: true,
		});

		setTimeout(() => {
			const end = Date.now() + 3 * 1000;

			function drawFrame() {
				void myConfetti({
					particleCount: 4,
					angle: 60,
					startVelocity: 50,
					spread: 80,
					origin: { x: 0, y: 0.45 },
					colors: confettiColors,
				});
				void myConfetti({
					particleCount: 4,
					angle: 120,
					startVelocity: 50,
					spread: 80,
					origin: { x: 1, y: 0.45 },
					colors: confettiColors,
				});

				if (Date.now() < end) {
					requestAnimationFrame(drawFrame);
				}
			}
			drawFrame();
		}, 1000);
	}, []);

	const latestTickets = allTickets?.sort(
		(a, b) =>
			new Date(a.updated_at).getTime() - new Date(b.updated_at).getTime(),
	);

	const ticket = latestTickets?.[0];
	return (
		<PageContainer>
			<Seo {...props.seo} />
			<Container style={{ zIndex: 1 }}>
				<TextContainer>
					<Title>YA ESTAS LIST@ PARA LA JSCONF! 🎉</Title>
					{user && ticket ? (
						<Ticket
							key={ticket.id}
							userTicketId={ticket.id}
							userTicketStatus={ticket.status}
							userPhoto={user.photo}
							userUsername={user.username}
							userName={user.name}
							ticketName={ticket.ticket.name}
							ticketType={ticket.ticket.type}
							ticketSeason={ticket.ticket.season}
							fadeIn
						/>
					) : null}
					{(latestTickets?.length ?? 0) > 1 ? (
						<Paragraph>
							(Sabemos que tienes {latestTickets?.length} tickets pero no
							podemos mostrar tantos en esta pantalla)
						</Paragraph>
					) : null}
					<Paragraph>
						Tu compra fue exitosa. Siempre podrás ver los tickets en{' '}
						<Link href={'/mytickets'} passHref>
							<A>tu página de tickets</A>
						</Link>{' '}
						(Recuerda traer tu ticket el día de la conferencia para hacer
						acreditación!)
					</Paragraph>
					<Paragraph>Cuéntale al mundo! Compártelo tus redes!</Paragraph>
					<EndingTitle>Nos vemos en Febrero!</EndingTitle>
				</TextContainer>
			</Container>
			<StyledCanvas ref={ref} id="confetti" />
		</PageContainer>
	);
}

export async function getStaticProps() {
	const queryResults = await urlQlient
		.query<TicketsQueryQuery, TicketsQueryQueryVariables>(
			TicketsQueryDocument,
			{
				id: '2izkVq9L0r7BEeoZbEAEsC',
				locale: 'es-CL',
				isPreview: Boolean(process.env.NEXT_PUBLIC_CONTENTFUL_IS_PREVIEW),
			},
		)
		.toPromise();

	const page = queryResults.data?.page as Page;
	const props: PageProps = {
		seo: page?.seo || null,
	};

	return {
		props,
	};
}

Tickets.getLayout = DefaultPageLayout;
