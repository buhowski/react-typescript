import { LanguageCode, PageProps } from '../../../types/common';

export const LANGUAGES: LanguageCode[] = ['ua', 'en', 'ru'];

// Get browser language safely, map 'uk' -> 'ua', only ua/ru allowed.
const getBrowserLanguage = (): LanguageCode | null => {
	const lang = navigator.language.slice(0, 2);
	if (lang === 'uk') return 'ua';
	if (lang === 'ru') return 'ru';
	return null; // all other -> fallback to location or English
};

// Detect language by location, returns valid LanguageCode or null
const getLanguageByLocation = async (): Promise<LanguageCode | null> => {
	try {
		const res = await fetch('https://ipapi.co/json/');
		const data = await res.json();
		const countryCode = data?.country_code;
		if (countryCode === 'UA') return 'ua';
		if (countryCode === 'RU') return 'ru';
		return null; // all other countries -> fallback to English
	} catch {
		return null; // fallback to English on error
	}
};

// Determines initial language with robust fallback:
export const getInitialLanguage = async (
	pageData: PageProps['pageData'],
	availableLangs: LanguageCode[]
): Promise<LanguageCode> => {
	// start: Stored language
	const storedLang = localStorage.getItem('currentLang') as LanguageCode | null;
	if (storedLang && pageData?.[storedLang]?.length) return storedLang;

	// next: Browser language (ua/ru only)
	const browserLang = getBrowserLanguage();
	if (browserLang && pageData?.[browserLang]?.length) return browserLang;

	// next: Location-based detection
	const detectedLang = await getLanguageByLocation();
	if (detectedLang && pageData?.[detectedLang]?.length) return detectedLang;

	// next: Final fallback
	return availableLangs.includes('ua')
		? 'ua'
		: availableLangs.includes('en')
		? 'en'
		: availableLangs[0] || 'en';
};
