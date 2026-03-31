import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { getInitialLanguage } from '../helpers/languageHelper';
import { LanguageCode, htmlLangMap, LANGUAGES, PageProps } from '../../../types/common';
import LanguageSwitcher from './LanguageSwitcher';

interface StartupLanguageProps {
	pageData: PageProps['pageData'];
}

const StartupLanguage: React.FC<StartupLanguageProps> = ({ pageData }) => {
	const availableLangs = useMemo(
		() => [...LANGUAGES].filter((lang) => pageData?.[lang]?.length),
		[pageData],
	);

	const [currentLang, setCurrentLang] = useState<LanguageCode>(
		() => getInitialLanguage(pageData, availableLangs) as LanguageCode,
	);

	useEffect(() => {
		const lang = getInitialLanguage(pageData, availableLangs) as LanguageCode;
		setCurrentLang(lang);
	}, [pageData, availableLangs]);

	useEffect(() => {
		document.documentElement.lang = htmlLangMap[currentLang];
	}, [currentLang]);

	const changeLanguage = useCallback((lang: LanguageCode) => {
		setCurrentLang(lang);
		localStorage.setItem('currentLang', lang);
		window.dispatchEvent(new CustomEvent('languageChange', { detail: { lang } }));
	}, []);

	return (
		<LanguageSwitcher
			currentLang={currentLang}
			availableLangs={availableLangs}
			changeLanguage={changeLanguage}
		/>
	);
};

export default React.memo(StartupLanguage);
