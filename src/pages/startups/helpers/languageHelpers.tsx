import { LanguageCode, PageProps } from '../../../types/common';

export const LANGUAGES: LanguageCode[] = ['ua', 'en', 'ru'];

// Detect language by Edge Function
const getLanguageByCountry = async (): Promise<LanguageCode | null> => {
	try {
		// Local dev fallback: use /set-lang
		const res = await fetch('/set-lang');
		if (!res.ok) return null;
		const data = await res.json();
		console.log('getLanguageByCountry:', data);
		return data.lang as LanguageCode;
	} catch {
		return null;
	}
};

// Detect language from browser
const getBrowserLanguage = (): LanguageCode => {
	if (typeof window === 'undefined') return 'ua';
	const userLang = navigator.language.toLowerCase();
	if (userLang.startsWith('uk')) return 'ua';
	if (userLang.startsWith('ru')) return 'ru';
	return 'en';
};

// Main function to get initial language
export const getInitialLanguage = async (
	pageData: PageProps['pageData'],
	availableLangs: LanguageCode[]
): Promise<LanguageCode> => {
	const storedLang = localStorage.getItem('currentLang') as LanguageCode | null;
	const countryLang = await getLanguageByCountry();
	const browserLang = getBrowserLanguage();

	console.log('Country:', countryLang, 'Storage:', storedLang, 'Browser:', browserLang);

	if (storedLang && availableLangs.includes(storedLang) && pageData?.[storedLang]?.length) {
		return storedLang;
	}
	if (countryLang && availableLangs.includes(countryLang)) {
		return countryLang;
	}
	if (availableLangs.includes(browserLang)) {
		return browserLang;
	}
	return availableLangs[0];
};
