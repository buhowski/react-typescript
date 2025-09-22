import { Handler } from '@netlify/functions';

export const handler: Handler = async (event) => {
	const countryCode = event.headers['x-netlify-country']?.toLowerCase();

	if (countryCode === 'ua') {
		return {
			statusCode: 200,
			body: 'ua',
		};
	}

	if (countryCode === 'ru') {
		return {
			statusCode: 200,
			body: 'ru',
		};
	}

	return {
		statusCode: 200,
		body: 'en',
	};
};
