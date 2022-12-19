import { useQuery } from '@tanstack/react-query';
import { useAtomValue, useSetAtom } from 'jotai';

import {
	availableTicketsAtom,
	ticketsAtom,
} from '../../src/Components/Cart/CartAtom';
import { CartContainer } from '../../src/Components/Cart/CartContainer';
import { DefaultPageLayout } from '../../src/Components/Layouts/DefaultPageLayout';
import Seo from '../../src/Components/Seo';
import NoTickets from '../../src/Components/TicketSection/NoTickets';
import YesTicketsCreateAccount from '../../src/Components/TicketSection/YesTicketsCreateAccount';
import { PageContainer } from '../../src/Components/common/PageContainer';
import {
	TicketsQueryDocument,
	TicketsQueryQuery,
	TicketsQueryQueryVariables,
} from '../../src/graphql/tickets.generated';
import { urlQlient } from '../../src/graphql/urql';
import { fetchTickets } from '../../src/helpers/API';
import { isAuthenticatedAtom } from '../../src/helpers/auth';
import { ParseQuery } from '../../src/helpers/types';

type Page = ParseQuery<TicketsQueryQuery['page']>;

export interface PageProps {
	seo: Page['seo'];
}

const image =
	'https://images.ctfassets.net/1kfhsqlc8ewi/EAE7GIGq6Uk26KmdTC9T6/00be1cabc2d9b1dea800dbdb7e31c1bd/ticket.png';

const ticket = ['tickets'];
const TicketContent = () => {
	const isSaleEnabled = useAtomValue(availableTicketsAtom);
	const isLoggedIn = useAtomValue(isAuthenticatedAtom);

	if (isSaleEnabled) {
		if (isLoggedIn) {
			return <CartContainer />;
		}
		return <YesTicketsCreateAccount imageUrl={image} />;
	} else {
		return <NoTickets imageUrl={image} />;
	}
};
export default function Tickets(props: PageProps) {
	const setAvailableTicketsAtom = useSetAtom(availableTicketsAtom);
	const setTicketsAtom = useSetAtom(ticketsAtom);
	const { isLoading } = useQuery(ticket, fetchTickets, {
		onSuccess: (data) => {
			setAvailableTicketsAtom(data.length > 0);
			setTicketsAtom(data.map((el) => ({ ...el, currentQuantity: 0 })));
		},
	});
	return (
		<PageContainer>
			<Seo {...props.seo} />
			{!isLoading && <TicketContent />}
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
