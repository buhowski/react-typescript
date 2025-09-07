import React, { useLayoutEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { startupsMap, startupPaths } from './startupsRoutes';
import { LanguageCode } from '../../types/common';

// Wrapper for all startup pages with SEO & language handling
const StartupsSeoWrapper: React.FC = () => {
	const { lang } = useParams<{ lang?: string }>();
	const location = useLocation();

	const allowedLangs: LanguageCode[] = ['en', 'ua', 'ru'];
	const urlLang =
		lang && allowedLangs.includes(lang as LanguageCode) ? (lang as LanguageCode) : undefined;
	const storedLang = (localStorage.getItem('currentLang') as LanguageCode) || 'en';
	const currentLang: LanguageCode = urlLang || storedLang;

	useLayoutEffect(() => {
		document.documentElement.lang = currentLang;
		localStorage.setItem('currentLang', currentLang);
	}, [currentLang]);

	// Get path relative to root, ignoring lang prefix
	const path = location.pathname.replace(/^\/(en|ua|ru)/, '').replace(/\/$/, '') || '/';

	// Get page component from map, fallback to first page
	const PageComponent = startupsMap[path] || startupsMap[startupPaths[0]];

	return <PageComponent initialLang={currentLang} />;
};

export default StartupsSeoWrapper;
