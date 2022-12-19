import { nanoid } from 'nanoid';

import { Entrada } from '../../Components/Cart/CartAtom';
import { getValidToken } from '../auth';

import {
	OwnTicket,
	PublicTicket,
	UserPayload,
	UserType,
	VolunteerPayload,
} from './types';

export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export type ErrorResponse = {
	error: string;
	message: string[];
};

const customFetch = async (
	input: RequestInfo | URL,
	init?: RequestInit | undefined,
): Promise<any> => {
	const headers = new Headers(init?.headers);
	const token = getValidToken();
	if (token !== null) {
		headers.append('Authorization', `Bearer ${token}`);
	}
	headers.append('content-type', 'application/json');
	headers.append('x-trace-id', `traceid_${nanoid()}`);
	headers.append('Accept-Language', `es`);
	headers.append('x-fetch', `raw`);
	const res = await fetch(input, { ...init, headers });
	if (res.status >= 200 && res.status < 300) {
		return await res.json();
	}

	if (res.status === 401 && typeof window !== 'undefined') {
		if (typeof window !== 'undefined') {
			const url = new URL(window.location.href);
			url.pathname = '/auth/logout';
			window.location.replace(url);
		}
		return;
	}

	if (res.status === 422) {
		const response = await res.json();
		return {
			error: response.error as string,
			message: response.message as string[],
		};
	}
	throw new Error('Error');
};

export const fetchTickets = async (): Promise<Entrada[]> =>
	await customFetch(`${API_URL}/tickets`);

export const createPayment = async (object: {
	gateway: 'mercadopago' | 'stripe';
	tickets: Array<{ id: string; quantity: number; name: string; email: string }>;
}): Promise<{ paymentUrl: string }> => {
	return await customFetch(`${API_URL}/payments`, {
		method: 'POST',
		body: JSON.stringify(object),
	});
};

export const me = async (): Promise<UserType> => {
	return await customFetch(`${API_URL}/users/me`);
};

export const myTickets = async (): Promise<OwnTicket[]> => {
	return await customFetch(`${API_URL}/users/me/tickets`);
};

export const publicTicket = async (ticketId: string): Promise<PublicTicket> => {
	return await customFetch(
		`${API_URL}/tickets/qr/info/user_ticket_${ticketId}`,
	);
};

export const updateMe = async (
	object: Partial<UserPayload>,
): Promise<UserType> => {
	return await customFetch(`${API_URL}/users/`, {
		method: 'PUT',
		body: JSON.stringify(object),
	});
};

export const subscribeVolunteer = async (
	object: VolunteerPayload,
): Promise<void> => {
	return await customFetch(`${API_URL}/subscriptions/volunteer`, {
		method: 'POST',
		body: JSON.stringify(object),
	});
};

export const subscribeUser = async (object: {
	email: string;
}): Promise<{ some: string }> => {
	return await customFetch(`${API_URL}/subscriptions`, {
		method: 'POST',
		body: JSON.stringify(object),
	});
};

export const finishGithubLogin = async ({
	code,
}: {
	code: string;
}): Promise<{
	token: string;
	user: UserType;
}> => {
	return await customFetch(`${API_URL}/auth/github/callback?code=${code}`);
};

export const finishGoogleLogin = async ({
	code,
}: {
	code: string;
}): Promise<{
	token: string;
	user: UserType;
}> => {
	return await customFetch(`${API_URL}/auth/google/callback?code=${code}`);
};
