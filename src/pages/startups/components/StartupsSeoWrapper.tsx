import React, { useLayoutEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { startupsMap } from '../startupsRoutes';
import { pathToVision } from '../../../components/urlsData';
import { LANGUAGES, LanguageCode } from '../../../types/common';

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
	const langPattern = `^/(${LANGUAGES.join('|')})`;
	const path = location.pathname.replace(new RegExp(langPattern), '').replace(/\/$/, '') || '/';

	// Get page component from map, fallback to first page
	const PageComponent = startupsMap[path] || startupsMap[pathToVision];

	return <PageComponent initialLang={currentLang} />;
};

export default StartupsSeoWrapper;
