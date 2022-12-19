import styled from '@emotion/styled';
import { useMutation } from '@tanstack/react-query';
import { useSetAtom } from 'jotai';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { ErrorComponent } from '../../../src/Components/ErrorComponent';
import { finishGoogleLogin } from '../../../src/helpers/API';
import { accessTokenAtom } from '../../../src/helpers/auth';

const Container = styled.section`
	display: flex;
	flex-direction: column;
`;

const StyledBlackWrapp = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: calc(100vh);
	gap: 32px 0px;
	background-color: ${({ theme }) => theme.elements.global.backgroundColor};
`;

const ActuallyRun = () => {
	const { query, replace } = useRouter();
	const [error, setError] = useState(false);
	const setAccessToken = useSetAtom(accessTokenAtom);
	const mutation = useMutation(finishGoogleLogin, {
		onSuccess: async ({ token }) => {
			setAccessToken(token);
			await replace('/tickets');
		},
		onError: () => {
			setError(true);
		},
	});

	useEffect(() => {
		if (query.code) {
			mutation.mutate({ code: query.code as string });
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (mutation.error || error) {
		return (
			<ErrorComponent
				url="/tickets"
				errorMessage="Ocurrió un error al intentar iniciar sesión con tu cuenta. Prueba intentando nuevamente."
			/>
		);
	}

	return null;
};

const GoogleAuth: NextPage = (props) => {
	const { isReady } = useRouter();
	return (
		<Container>
			<StyledBlackWrapp>{isReady && <ActuallyRun />}</StyledBlackWrapp>
		</Container>
	);
};

export default GoogleAuth;
