import { buildUrl } from '../../../components/metaCoreUrls';
import { Alternate, LanguageCode, MetaTags } from '../../../types/common';

const LANGUAGES_MAP: Record<LanguageCode, string> = {
	en: '/en',
	ru: '/ru',
	ua: '/ua',
};

// Required types for SEO URL helpers
export type SeoLangsUrls = Required<Pick<MetaTags, 'canonicalUrl' | 'ogUrl' | 'langAlternates'>>;
export type BaseUrls = Required<Pick<MetaTags, 'canonicalUrl' | 'ogUrl'>>;

// Generate base canonical and ogUrl
export const generateBaseUrls = (path: string): BaseUrls => ({
	canonicalUrl: buildUrl(path),
	ogUrl: buildUrl(path),
});

// Generate all required SEO URLs
export const generateHreflangUrls = (path: string): SeoLangsUrls => {
	const baseUrls = generateBaseUrls(path);
	const canonicalUrl = baseUrls.canonicalUrl;

	const langAlternates: Alternate[] = (Object.keys(LANGUAGES_MAP) as LanguageCode[]).map(
		(langCode) => ({
			hreflang: langCode,
			href: buildUrl(`${LANGUAGES_MAP[langCode]}${path}`),
		})
	);

	langAlternates.push({
		hreflang: 'x-default',
		href: canonicalUrl,
	});

	return {
		...baseUrls,
		langAlternates: langAlternates,
	};
};
