import { useAtomValue, useSetAtom } from 'jotai';
import { useMemo } from 'react';

import { accessTokenAtom, isAuthenticatedAtom } from '../../helpers/auth';

import { InternalNavBar } from './InternalNavBar';
import { parseNavBarData } from './helper';
import { useNavBarQueryQuery } from './navBar.generated';

const NavBar = ({ id = '22KytadLhMxFZMtvlUYCbl' }: { id?: string }) => {
	const [{ data }] = useNavBarQueryQuery({
		variables: {
			id,
			isPreview: Boolean(process.env.NEXT_PUBLIC_CONTENTFUL_IS_PREVIEW),
		},
	});
	// navData: parseNavBarData(page?.navBar as Page["navBar"]),

	const isLoggedIn = useAtomValue(isAuthenticatedAtom);
	const setAccessToken = useSetAtom(accessTokenAtom);
	/* const { 'ticket-sale-enabled': ticketSaleEnabled } = useFlags([
		'ticket-sale-enabled',
	]); */

	const navBarItems = useMemo(() => {
		if (!data) {
			return [];
		}
		const newItems = [...parseNavBarData(data.navigationBar).items];

		if (isLoggedIn) {
			newItems.push(
				...[
					{
						contenido: 'Mis Tickets',
						id: 'OwnTickets',
						isBlank: false,
						link: '/mytickets',
						onClick: undefined,
					},
					{
						contenido: 'Configuración',
						id: 'Settings',
						isBlank: false,
						link: '/settings',
						onClick: undefined,
					},
					{
						contenido: 'Salir',
						id: 'Log Out',
						onClick: () => {
							setAccessToken(null);
						},
					},
				],
			);
		}

		return newItems;
	}, [data, isLoggedIn, setAccessToken]);

	return <InternalNavBar items={navBarItems} />;
};

export default NavBar;
