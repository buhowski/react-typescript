import { Context } from '@netlify/edge-functions';
import { LanguageCode } from '../../src/types/common';

// Assign function to a variable first
const setLang = async (request: Request, context: Context) => {
	let lang: LanguageCode = 'en';
	const countryCode = context.geo?.country?.code?.toLowerCase();

	if (countryCode === 'ua') lang = 'ua';
	if (countryCode === 'ru') lang = 'ru';

	return new Response(JSON.stringify({ lang }), {
		status: 200,
		headers: { 'Content-Type': 'application/json' },
	});
};

export default setLang;
