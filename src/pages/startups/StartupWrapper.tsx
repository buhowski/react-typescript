import React, { useLayoutEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { startupsMap } from '../../routesMap';

const StartupWrapper: React.FC = () => {
	const { lang } = useParams<{ lang?: string }>();
	const location = useLocation();

	const allowedLangs = ['en', 'ua', 'ru'];
	const urlLang = lang && allowedLangs.includes(lang) ? lang : null;
	const storedLang = localStorage.getItem('currentLang') || 'en';
	const currentLang = urlLang || storedLang;

	// Use useLayoutEffect to ensure DOM update happens before paint
	useLayoutEffect(() => {
		document.documentElement.lang = currentLang;
		localStorage.setItem('currentLang', currentLang);
	}, [currentLang]);

	const path = location.pathname.replace(/^\/(en|ua|ru)/, '').replace(/\/$/, '') || '/';
	const PageComponent = startupsMap[path] || Object.values(startupsMap)[0];

	return <PageComponent initialLang={currentLang} />;
};

export default StartupWrapper;
