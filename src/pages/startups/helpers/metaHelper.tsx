import {
	MetaTags,
	PageMetaParams,
	Alternate,
	LanguageCode,
	LANGUAGES,
} from '../../../types/common';

const LANGUAGES_MAP: Record<LanguageCode, string> = {
	en: '/en',
	ru: '/ru',
	ua: '/ua',
};

// Base Website URL
export const website = 'https://buhowski.dev';
export const buildUrl = (path: string) =>
	`${website}${path.startsWith('/') ? '' : '/'}${path || ''}`;

// regex LANGUAGES
export const langPrefixRegex = new RegExp(`^/(${LANGUAGES.join('|')})(?=/|$)`);

// Required types for SEO URL helpers
export type BaseUrls = Required<Pick<MetaTags, 'canonicalUrl' | 'ogUrl'>>;
export type SeoLangsUrls = Required<Pick<MetaTags, 'canonicalUrl' | 'ogUrl' | 'langAlternates'>>;

// Generate base canonical and ogUrl
export const generateBaseUrls = (path: string): BaseUrls => ({
	canonicalUrl: buildUrl(path),
	ogUrl: buildUrl(path),
});

// Generate all required SEO URLs
export const generateHreflangUrls = (path: string): SeoLangsUrls => {
	const baseUrls = generateBaseUrls(path);

	const langAlternates: Alternate[] = (Object.keys(LANGUAGES_MAP) as LanguageCode[]).map(
		(langCode) => ({
			hreflang: langCode,
			href: buildUrl(`${LANGUAGES_MAP[langCode]}${path}`),
		})
	);

	// x-default points to base canonical
	langAlternates.push({
		hreflang: 'x-default',
		href: baseUrls.canonicalUrl,
	});

	return {
		...baseUrls,
		langAlternates,
	};
};

// Helper to generate public page meta tags
export const generatePageMeta = ({
	title,
	description,
	path,
	ogImage,
}: PageMetaParams): MetaTags => {
	const baseUrls = generateBaseUrls(path);
	return {
		title,
		description,
		canonicalUrl: baseUrls.canonicalUrl,
		ogUrl: baseUrls.ogUrl,
		ogTitle: title,
		ogDescription: description,
		ogImage,
	};
};

// Helper to generate startups page meta tags with hreflang
export const generateStartupsMeta = ({
	title,
	description,
	path,
	ogImage,
}: PageMetaParams): MetaTags => {
	const hreflangUrls = generateHreflangUrls(path);

	return {
		title,
		description,
		ogTitle: title,
		ogDescription: description,
		ogImage,
		...hreflangUrls,
	};
};
