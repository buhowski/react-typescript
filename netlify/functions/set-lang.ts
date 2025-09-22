import { Handler } from '@netlify/functions';
import { LanguageCode } from '../../src/types/common';

export const handler: Handler = async (event) => {
	const countryCode = event.headers['x-nf-country']?.toLowerCase();
	let lang: LanguageCode = 'en';

	if (countryCode === 'ua') lang = 'ua';
	if (countryCode === 'ru') lang = 'ru';

	return {
		statusCode: 200,
		body: JSON.stringify({ lang }),
	};
};
