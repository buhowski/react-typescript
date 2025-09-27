import React, { useLayoutEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { startupsMap } from '../../../routesData';
import { pathToVision } from '../../../components/urlsData';
import { LANGUAGES, LanguageCode } from '../../../types/common';
import { buildUrl } from '../../../components/metaCoreUrls';
import { generateHreflangUrls } from '../helpers/seoHelper';

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

	// Get current path without language prefix (e.g., /ua/test -> /test)
	let path = fixedPath ?? location.pathname;
	path = path.replace(new RegExp(`^/(${LANGUAGES.join('|')})`), '').replace(/\/+$/, '') || '/';

	// Seo Meta Tags URLs
	const urlMeta = generateHreflangUrls(path);
	const canonicalUrlWithLang = buildUrl(`/${currentLang}${path}`);

	// Get Page Component
	const PageComponent = startupsMap[path] || startupsMap[pathToVision];

	useLayoutEffect(() => {
		document.documentElement.lang = currentLang;
		localStorage.setItem('currentLang', currentLang);
	}, [currentLang]);

	return (
		<PageComponent
			initialLang={currentLang}
			metaTags={{
				canonicalUrl: canonicalUrlWithLang,
				ogUrl: canonicalUrlWithLang,
				twitterUrl: canonicalUrlWithLang,
				langAlternates: urlMeta.langAlternates,
			}}
		/>
	);
};

export default StartupWrapperSeo;
