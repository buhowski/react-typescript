import { LanguageCode, PageProps } from '../../../types/common';

// Available languages
export const LANGUAGES: LanguageCode[] = ['ua', 'en', 'ru'];

// Detect language by country IP using Netlify Function
const getLanguageByCountry = async (): Promise<LanguageCode | null> => {
	try {
		const res = await fetch('/.netlify/functions/set-lang');
		if (!res.ok) return null;

		const data = await res.text();
		return data as LanguageCode;
	} catch {
		return null;
	}
};

// Get language from browser settings
const getBrowserLanguage = (): LanguageCode => {
	if (typeof window === 'undefined') return 'ua';

	const userLang = navigator.language.toLowerCase();
	if (userLang.startsWith('uk')) return 'ua';
	if (userLang.startsWith('ru')) return 'ru';

	return 'en';
};

// Main function to determine initial language
export const getInitialLanguage = async (
	pageData: PageProps['pageData'],
	availableLangs: LanguageCode[]
): Promise<LanguageCode> => {
	// Get from Local Storage first
	const storedLang = localStorage.getItem('currentLang') as LanguageCode | null;
	if (storedLang && availableLangs.includes(storedLang) && pageData?.[storedLang]?.length) {
		return storedLang;
	}

	// Then check country IP
	const countryLang = await getLanguageByCountry();
	if (countryLang && availableLangs.includes(countryLang)) {
		return countryLang;
	}

	// Then check browser language
	const browserLang = getBrowserLanguage();
	if (availableLangs.includes(browserLang)) {
		return browserLang;
	}

	// Final fallback
	return availableLangs[0];
};
