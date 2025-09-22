import { LanguageCode, PageProps } from '../../../types/common';

// Language detection logic
export const LANGUAGES: LanguageCode[] = ['ua', 'en', 'ru'];

// Get language from browser
export const getBrowserLanguage = (): LanguageCode => {
	if (typeof window === 'undefined') return 'ua';

	const userLang = navigator.language.toLowerCase();
	const map: Record<string, LanguageCode> = {
		uk: 'ua',
		ru: 'ru',
		be: 'ru',
	};
	const prefix = userLang.slice(0, 2) as keyof typeof map;

	return map[prefix] ?? 'en';
};

export const getInitialLanguage = (
	pageData: PageProps['pageData'],
	availableLangs: LanguageCode[]
) => {
	const storedLang = localStorage.getItem('currentLang') as LanguageCode | null;
	const browserLang = getBrowserLanguage();

	// Get from Local Storage
	if (storedLang && availableLangs.includes(storedLang) && pageData?.[storedLang]?.length) {
		return storedLang;
	}

	// Check browser language
	if (availableLangs.includes(browserLang)) {
		return browserLang;
	}

	// Final fallback to the first available language
	return availableLangs[0];
};
