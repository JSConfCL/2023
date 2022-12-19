import { useFlags } from 'flagsmith/react';

import BannerVolunteer from '../src/Components/Banner/Volunteer';
import VolunteerForm from '../src/Components/Form/Volunteer';

import { DefaultPageLayout } from '../src/Components/Layouts/DefaultPagelayout';
import Seo from '../src/Components/Seo';
import TitleDescription from '../src/Components/common/TitleDescription';
import { urlQlient } from '../src/graphql/urql';
import {
	VolunteerQueryDocument,
	VolunteerQueryQuery,
	VolunteerQueryQueryVariables,
} from '../src/graphql/volunteer.generated';
import { ParseQuery } from '../src/helpers/types';

type Page = ParseQuery<VolunteerQueryQuery['page']>;

export interface PageProps {
	heroData: Page['heroBlock'];
	seo: Page['seo'];
}

export default function VolunteerPage(props: PageProps) {
	const { 'volunteer-form-enabled': volunteerFormEnabled } = useFlags([
		'volunteer-form-enabled',
	]);

	return (
		<>
			<Seo {...props.seo} />
			<BannerVolunteer {...props.heroData} />
			{volunteerFormEnabled.enabled ? (
				<VolunteerForm />
			) : (
				<TitleDescription
					title="Proceso Cerrado"
					description="El proceso de inscripción se ha cerrado, te invitamos a participar en las siguientes ediciones"
				/>
			)}
		</>
	);
}

export async function getStaticProps() {
	const queryResults = await urlQlient
		.query<VolunteerQueryQuery, VolunteerQueryQueryVariables>(
			VolunteerQueryDocument,
			{
				id: '2X6aesEoId54kb4oEw4QCb',
				locale: 'es-CL',
				isPreview: Boolean(process.env.NEXT_PUBLIC_CONTENTFUL_IS_PREVIEW),
			},
		)
		.toPromise();
	const page = queryResults.data?.page as Page;
	const props: PageProps = {
		heroData: page?.heroBlock || null,
		seo: page?.seo ?? null,
	};
	return {
		props,
	};
}

VolunteerPage.getLayout = DefaultPageLayout;
