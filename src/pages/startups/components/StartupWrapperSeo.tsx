import React, { useLayoutEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { buildUrl, generateHreflangUrls, normalizePath } from '../helpers/metaHelper';
import { startupsMap } from '../startupsMap';
import { pathToVision } from '../../../components/urlsData';
import { LANGUAGES, LanguageCode, htmlLangMap } from '../../../types/common';

type StartupWrapperSeoProps = {
	path?: string;
	initialLang?: LanguageCode;
};

const StartupWrapperSeo: React.FC<StartupWrapperSeoProps> = ({ path: fixedPath, initialLang }) => {
	const location = useLocation();
	const [langVersion, setLangVersion] = useState(0);
	const allowedLangs: LanguageCode[] = [...LANGUAGES];
	const { lang } = useParams<{ lang?: string }>();

	const urlLang =
		lang && allowedLangs.includes(lang as LanguageCode) ? (lang as LanguageCode) : undefined;

	const currentLang: LanguageCode =
		urlLang || (localStorage.getItem('currentLang') as LanguageCode) || initialLang;

	// Normalize path
	const rawPath = fixedPath ?? location.pathname;
	const basePath = normalizePath(rawPath);

	// Check if current path exists in the map
	const isExistingPage = !!startupsMap[basePath];

	// Strict check: vision path?
	const isStrictlyAtVision = basePath === pathToVision;

	// Fallback to Vision
	const PageComponent = startupsMap[basePath] || startupsMap[pathToVision];

	// SEO URLs
	const metaURL = generateHreflangUrls(basePath);
	const resolvedCanonicalUrl = buildUrl(`/${currentLang}${basePath}`);

	// Hard redirect to clean URL
	useLayoutEffect(() => {
		if (!isExistingPage && !isStrictlyAtVision) {
			window.location.replace(pathToVision);
		}
	}, [isExistingPage, isStrictlyAtVision]);

	// Language sync
	useLayoutEffect(() => {
		const handleLanguageChange = (_event: Event) => {
			setLangVersion((prev) => prev + 1);
		};

		window.addEventListener('languageChange', handleLanguageChange);
		return () => {
			window.removeEventListener('languageChange', handleLanguageChange);
		};
	}, []);

	// Update Metadata
	useLayoutEffect(() => {
		document.documentElement.lang = htmlLangMap[currentLang];
		localStorage.setItem('currentLang', currentLang);
	}, [currentLang, langVersion]);

	return (
		<PageComponent
			initialLang={currentLang}
			metaTags={{
				canonicalUrl: resolvedCanonicalUrl,
				ogUrl: resolvedCanonicalUrl,
				twitterUrl: resolvedCanonicalUrl,
				langAlternates: metaURL.langAlternates,
			}}
		/>
	);
};

export default StartupWrapperSeo;
