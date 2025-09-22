import type { Context } from 'netlify:edge';
import type { LanguageCode } from '../../src/types/common';

const setLang = async (_req: Request, context: Context) => {
	let lang: LanguageCode = 'en';
	const country = context.geo?.country?.code?.toLowerCase();
	const timezone = context.geo?.timezone;

	if (country === 'ua') lang = 'ua';
	if (country === 'ru') lang = 'ru';

	return new Response(JSON.stringify({ lang, country, timezone }), {
		status: 200,
		headers: { 'Content-Type': 'application/json' },
	});
};

export default setLang;
