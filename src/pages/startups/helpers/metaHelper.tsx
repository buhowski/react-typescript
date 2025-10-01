import {
	MetaTags,
	PageMetaParams,
	Alternate,
	LanguageCode,
	LANGUAGES,
	htmlLangMap,
} from '../../../types/common';

// Map frontend codes to URL prefixes
const LANGUAGES_MAP: Record<LanguageCode, string> = {
	en: '/en',
	ru: '/ru',
	ua: '/ua',
};

// Types
export type BaseUrls = Required<Pick<MetaTags, 'canonicalUrl' | 'ogUrl'>>;
export type SeoLangsUrls = Required<Pick<MetaTags, 'canonicalUrl' | 'ogUrl' | 'langAlternates'>>;

// Base Website URL
export const website = 'https://buhowski.dev';

// Build absolute URL
export const buildUrl = (path: string) =>
	`${website}${path.startsWith('/') ? '' : '/'}${path || ''}`;

// Regex for stripping lang prefix
export const langPrefixRegex = new RegExp(`^/(${LANGUAGES.join('|')})(?=/|$)`);

// Normalize path
export const normalizePath = (rawPath: string): string =>
	rawPath.replace(langPrefixRegex, '').replace(/\/+$/, '') || '/';

// Generate base canonical + ogUrl
export const generateBaseUrls = (path: string): BaseUrls => ({
	canonicalUrl: buildUrl(path),
	ogUrl: buildUrl(path),
});

// Generate all SEO lang alternates
export const generateHreflangUrls = (path: string): SeoLangsUrls => {
	const baseUrls = generateBaseUrls(path);

	const langAlternates: Alternate[] = (Object.keys(LANGUAGES_MAP) as LanguageCode[]).map(
		(langCode) => ({
			hreflang: htmlLangMap[langCode],
			href: buildUrl(`${LANGUAGES_MAP[langCode]}${path}`),
		})
	);

	langAlternates.push({
		hreflang: 'x-default',
		href: baseUrls.canonicalUrl,
	});

	return {
		...baseUrls,
		langAlternates,
	};
};

// Meta generators
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
