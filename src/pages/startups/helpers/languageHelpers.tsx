import { LanguageCode, PageProps } from '../../../types/common';

// Define your desired default language here
const PRIMARY_FALLBACK_LANG: LanguageCode = 'ua';
export const LANGUAGES: LanguageCode[] = ['ua', 'en', 'ru'];

export const getInitialLanguage = (
	pageData: PageProps['pageData'],
	availableLangs: LanguageCode[]
) => {
	const storedLang = localStorage.getItem('currentLang') as LanguageCode | null;

	if (storedLang && pageData?.[storedLang]?.length) {
		return storedLang;
	}

	return availableLangs.includes(PRIMARY_FALLBACK_LANG)
		? PRIMARY_FALLBACK_LANG
		: availableLangs[0] || 'ua';
};
