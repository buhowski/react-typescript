import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { startupsMap } from '../../pagesMap';

const StartupWrapper: React.FC = () => {
	const { lang } = useParams<{ lang?: string }>();
	const location = useLocation();

	const allowedLangs = ['en', 'ua', 'ru'];
	const storedLang = localStorage.getItem('currentLang') || 'en';
	const currentLang = allowedLangs.includes(lang || '') ? lang! : storedLang;

	if (document.documentElement.lang !== currentLang) {
		document.documentElement.lang = currentLang;
		localStorage.setItem('currentLang', currentLang);
	}

	const path = location.pathname.replace(/^\/(en|ua|ru)/, '').replace(/\/$/, '') || '/';
	const PageComponent = startupsMap[path] || Object.values(startupsMap)[0];

	return <PageComponent />;
};

export default StartupWrapper;
