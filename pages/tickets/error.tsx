import styled from '@emotion/styled';

import { ErrorComponent } from '../../src/Components/ErrorComponent';
import { DefaultPageLayout } from '../../src/Components/Layouts/DefaultPagelayout';
import { TicketsQueryQuery } from '../../src/graphql/tickets.generated';
import { ParseQuery } from '../../src/helpers/types';
import { ViewportSizes } from '../../styles/theme';

type Page = ParseQuery<TicketsQueryQuery['page']>;

export interface PageProps {
	seo: Page['seo'];
}

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	padding-top: 8rem;
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

export default function Tickets(props: PageProps) {
	return (
		<Container>
			<ErrorComponent
				errorMessage={`No se pudo completar el pago de tu(s) ticket(s). Puede ser que tu tarjeta fuese declinada o que el procesador de pagos no pudiese comunicarse con tu institución bancaria. Porfavor intenta nuevamente. Si aun no funciona, ponte en contacto con nosotros.`}
				mainText="Algo salio mal"
				textoDelBoton="Navegar a /tickets"
				url="/tickets"
			/>
		</Container>
	);
}

Tickets.getLayout = DefaultPageLayout;
