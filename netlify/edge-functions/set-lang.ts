import type { Context } from 'netlify:edge';
import type { LanguageCode } from '../../src/types/common';

const setLang = async (_req: Request, context: Context) => {
	// Log geo data for local testing
	console.log('context.geo:', context.geo);

	// Fallback country if running locally
	const countryCode = context.geo?.country?.code?.toLowerCase() || 'ua';

	let lang: LanguageCode = 'en';
	if (countryCode === 'ua') lang = 'ua';
	if (countryCode === 'ru') lang = 'ru';

	return new Response(
		JSON.stringify({ lang, country: countryCode, timezone: context.geo?.timezone || null }),
		{
			status: 200,
			headers: { 'Content-Type': 'application/json' },
		}
	);
};

export default setLang;
