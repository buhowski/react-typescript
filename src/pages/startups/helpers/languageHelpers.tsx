import { LanguageCode, PageProps } from '../../../types/common';

// Detect browser language
const detectBrowserLanguage = (): LanguageCode => {
	const langs = navigator.languages ?? [navigator.language ?? 'ua'];
	const hasLang = (prefix: string) => langs.some((l) => l.toLowerCase().startsWith(prefix));
	console.log(langs);

	if (hasLang('uk')) return 'ua';
	if (hasLang('ru')) return 'ru';

	return 'en';
};

// Determine initial language
export const getInitialLanguage = (
	pageData: PageProps['pageData'],
	availableLangs: LanguageCode[]
): LanguageCode => {
	const storedLang = localStorage.getItem('currentLang') as LanguageCode | null;
	const browserLang = detectBrowserLanguage();

	if (storedLang && availableLangs.includes(storedLang) && pageData?.[storedLang]?.length) {
		return storedLang;
	}

	if (availableLangs.includes(browserLang)) return browserLang;

	return availableLangs[0];
};
