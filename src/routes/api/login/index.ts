import { findLoginUser, User } from '$lib/db/user';
import type { RequestHandler } from "@sveltejs/kit";

export interface LoginApiRequest {
	email: string;
	password: string;
}

export interface LoginApiResponse {
	user: User;
}

export const post: RequestHandler = async ({ request }) => {
	const json: LoginApiRequest = await request.json();
	if (!json) {
		return {
			status: 400,
		};
	}

	const user = await findLoginUser(json.email, json.password);
	if (!user) {
		return {
			status: 401,
		};
	}

	const resBody: LoginApiResponse = {
		user,
	};

	return {
		body: JSON.stringify(resBody),
	};
};
