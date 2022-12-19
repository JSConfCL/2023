import styled from '@emotion/styled';
import { lazy, Suspense } from 'react';

import { DefaultPageLayout } from '../src/Components/Layouts/DefaultPagelayout';
import Seo from '../src/Components/Seo';
import {
	SponsorQueryDocument,
	SponsorQueryQuery,
	SponsorQueryQueryVariables,
} from '../src/graphql/sponsor.generated';
import { urlQlient } from '../src/graphql/urql';
import { ParseQuery } from '../src/helpers/types';
import { ViewportSizes } from '../styles/theme';

const BannerSponsor = lazy(
	async () => await import('../src/Components/Banner/Sponsor'),
);
const SponsorCard = lazy(
	async () => await import('../src/Components/Card/Sponsor'),
);

type Page = ParseQuery<SponsorQueryQuery['page']>;

export interface PageProps {
	followUsData: Page['followUsBlock'];
	heroData: Page['heroBlock'];
	sponsors: Page['sponsorTypeCollection'];
	seo: Page['seo'];
}

const SponsorWrapper = styled.section`
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 64px;
	@media (min-width: ${ViewportSizes.Phone}px) {
		gap: 32px;
	}
`;

export default function OnSitePage(props: PageProps) {
	return (
		<>
			<Seo {...props.seo} />
			{props.heroData && (
				<Suspense fallback={null}>
					<BannerSponsor {...props.heroData} />
				</Suspense>
			)}
			{props.sponsors?.items?.length && (
				<SponsorWrapper>
					{props.sponsors?.items?.map((elem, index) => (
						<Suspense key={`sponsor-${index}`} fallback={null}>
							<SponsorCard
								{...elem}
								number={index + 1}
								key={`sponsor-${index}`}
							/>
						</Suspense>
					))}
				</SponsorWrapper>
			)}
		</>
	);
}

export async function getStaticProps() {
	const queryResults = await urlQlient
		.query<SponsorQueryQuery, SponsorQueryQueryVariables>(
			SponsorQueryDocument,
			{
				id: '1S7E2fm8TuIuOZY5jMAY8K',
				locale: 'es-CL',
				isPreview: Boolean(process.env.NEXT_PUBLIC_CONTENTFUL_IS_PREVIEW),
			},
		)
		.toPromise();
	const page = queryResults.data?.page as Page;
	if (!page) return { props: {} };
	const props: PageProps = {
		heroData: page?.heroBlock || null,
		followUsData: page?.followUsBlock,
		sponsors: page?.sponsorTypeCollection,
		seo: page?.seo || null,
	};
	return {
		props,
	};
}

OnSitePage.getLayout = DefaultPageLayout;
