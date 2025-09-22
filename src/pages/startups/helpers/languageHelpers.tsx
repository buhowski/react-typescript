import { LanguageCode, PageProps } from '../../../types/common';

export const LANGUAGES: LanguageCode[] = ['ua', 'en', 'ru'];
// Detect browser language
const getBrowserLanguage = (): LanguageCode => {
	const userLang = navigator.languages?.[0] || navigator.language || 'en';

	if (userLang.startsWith('uk')) return 'ua';
	if (userLang.startsWith('ru')) return 'ru';

	return 'en';
};

// Determine initial language
export const getInitialLanguage = (
	pageData: PageProps['pageData'],
	availableLangs: LanguageCode[]
): LanguageCode => {
	const storedLang = localStorage.getItem('currentLang') as LanguageCode | null;
	const browserLang = getBrowserLanguage();

	if (storedLang && availableLangs.includes(storedLang) && pageData?.[storedLang]?.length) {
		return storedLang;
	}

	if (availableLangs.includes(browserLang)) return browserLang;

	return availableLangs[0];
};
