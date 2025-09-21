import { LanguageCode, PageProps } from '../../../types/common';

export const LANGUAGES: LanguageCode[] = ['ua', 'en', 'ru'];

// Detect language by user's location via IP
const getLanguageByLocation = async () => {
	try {
		const res = await fetch('https://ipapi.co/json/');
		const data = await res.json();
		const countryCode = data?.country_code;

		if (countryCode === 'UA') return 'ua';
		if (countryCode === 'RU') return 'ru';
		return 'en';
	} catch (error) {
		console.log('Geolocation API failed. Falling back to "ua".', error);
		return 'ua';
	}
};

// Determine initial language with proper fallback logic
export const getInitialLanguage = async (
	pageData: PageProps['pageData'],
	availableLangs: LanguageCode[]
): Promise<LanguageCode> => {
	const storedLang = localStorage.getItem('currentLang') as LanguageCode | null;
	if (storedLang && pageData?.[storedLang]?.length) return storedLang;

	const detectedLang = await getLanguageByLocation();
	if (pageData?.[detectedLang]?.length) return detectedLang;

	return availableLangs.includes('ua')
		? 'ua'
		: availableLangs.includes('en')
		? 'en'
		: availableLangs[0] || 'en';
};
