import { buildUrl } from '../../../components/metaTags';
import { Alternate } from '../../../types/common';

const LANGUAGES_MAP = {
	en: '/en',
	ru: '/ru',
	ua: '/ua',
};

export const generateMetaAlternates = (path: string): Alternate[] => {
	const langAlternates = Object.entries(LANGUAGES_MAP).map(([langCode, prefix]) => ({
		hreflang: langCode,
		href: buildUrl(`${prefix}${path}`),
	}));

	langAlternates.push({
		hreflang: 'x-default',
		href: buildUrl(path),
	});

	return langAlternates as Alternate[];
};
