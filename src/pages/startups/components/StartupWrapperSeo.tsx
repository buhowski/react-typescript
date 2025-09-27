import React, { useLayoutEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import {
	buildUrl,
	generateHreflangUrls,
	langPrefixRegex,
	normalizePath,
} from '../helpers/metaHelper';
import { startupsMap } from '../startupsMap';
import { pathToVision } from '../../../components/urlsData';
import { LANGUAGES, LanguageCode } from '../../../types/common';

type StartupWrapperSeoProps = {
	path?: string;
	initialLang?: LanguageCode;
};

const StartupWrapperSeo: React.FC<StartupWrapperSeoProps> = ({ path: fixedPath, initialLang }) => {
	const location = useLocation();
	const allowedLangs: LanguageCode[] = [...LANGUAGES];
	const { lang } = useParams<{ lang?: string }>();
	const urlLang =
		lang && allowedLangs.includes(lang as LanguageCode) ? (lang as LanguageCode) : undefined;

	const currentLang: LanguageCode =
		urlLang || (localStorage.getItem('currentLang') as LanguageCode) || initialLang;

	// Normalize path
	const rawPath = fixedPath ?? location.pathname;
	const basePath = normalizePath(rawPath);
	const hasLangPrefix = langPrefixRegex.test(rawPath);

	// SEO URLs
	const metaURL = generateHreflangUrls(basePath);
	const canonicalWithLangOrClean = hasLangPrefix
		? buildUrl(`/${currentLang}${basePath}`)
		: metaURL.canonicalUrl;

	// Page Component
	const PageComponent = startupsMap[basePath] || startupsMap[pathToVision];

	useLayoutEffect(() => {
		document.documentElement.lang = currentLang;
		localStorage.setItem('currentLang', currentLang);
	}, [currentLang]);

	return (
		<PageComponent
			initialLang={currentLang}
			metaTags={{
				canonicalUrl: canonicalWithLangOrClean,
				ogUrl: canonicalWithLangOrClean,
				twitterUrl: canonicalWithLangOrClean,
				langAlternates: metaURL.langAlternates,
			}}
		/>
	);
};

export default StartupWrapperSeo;
