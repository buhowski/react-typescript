import React, { useLayoutEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { startupsMap } from '../startupsRoutes';
import { pathToVision } from '../../../components/urlsData';
import { LANGUAGES, LanguageCode } from '../../../types/common';
import { buildUrl } from '../../../components/metaCoreUrls';
import { generateHreflangUrls } from '../helpers/seoHelper';

// Wrapper for all startup pages with SEO & language handling
const StartupsSeoWrapper: React.FC = () => {
	const { lang } = useParams<{ lang?: string }>();
	const location = useLocation();
	const allowedLangs: LanguageCode[] = [...LANGUAGES];
	const urlLang =
		lang && allowedLangs.includes(lang as LanguageCode) ? (lang as LanguageCode) : undefined;
	const storedLang = (localStorage.getItem('currentLang') as LanguageCode) || 'en';
	const currentLang: LanguageCode = urlLang || storedLang;

	useLayoutEffect(() => {
		document.documentElement.lang = currentLang;
		localStorage.setItem('currentLang', currentLang);
	}, [currentLang]);

	// Get path relative to root, ignoring lang prefix
	let path = location.pathname.replace(new RegExp(`^/(${LANGUAGES.join('|')})`), '');
	path = path.replace(/\/+/g, '/').replace(/\/$/, '') || '/';

	// Build canonical with lang prefix
	const urlMeta = generateHreflangUrls(path);
	const finalPathWithLang = `/${currentLang}${path}`;
	const canonicalUrlWithLang = buildUrl(finalPathWithLang);

	// Get page component from map, fallback to first page
	const PageComponent = startupsMap[path] || startupsMap[pathToVision];

	return (
		<PageComponent
			initialLang={currentLang}
			metaTags={{
				canonicalUrl: canonicalUrlWithLang,
				langAlternates: urlMeta.langAlternates,
				ogUrl: canonicalUrlWithLang,
				twitterUrl: canonicalUrlWithLang,
			}}
		/>
	);
};

export default StartupsSeoWrapper;
