// import db from '$lib/database';
import type { RequestHandler } from "@sveltejs/kit";

export const post: RequestHandler = async ({ params }) => {
	// // `params.id` comes from [id].js
	// const item = await db.get(params.id);
 
	// if (item) {
	// 	return {
	// 		body: { item }
	// 	};
	// }
 
	return {
		status: 500,
		body: {
			title: "Not implemented yet",
		},
	};
};
