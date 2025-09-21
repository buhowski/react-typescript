import { LanguageCode, PageProps } from '../../../types/common';

// Language detection logic
export const LANGUAGES: LanguageCode[] = ['ua', 'en', 'ru'];

// Get language from browser
const getBrowserLanguage = (): LanguageCode => {
	const browserLang = navigator.language.slice(0, 2).toLowerCase();

	// Return 'ua' for Ukrainian
	if (browserLang === 'uk' || browserLang === 'ua') return 'ua';
	// Return 'ru' for Russian
	if (browserLang === 'ru') return 'ru';
	// Default to English
	return 'en';
};

// Get language by user location
// const getLanguageByLocation = async (): Promise<LanguageCode | null> => {
//  try {
//    const res = await fetch('https://ipapi.co/json/');
//    const data = await res.json();
//    const countryCode = data?.country_code;

//    // Set 'ua' if country is Ukraine
//    if (countryCode === 'UA') return 'ua';

//    return null;
//  } catch (error) {
//    console.error('Error fetching location:', error);
//    return null;
//  }
// };

export const getInitialLanguage = (
	pageData: PageProps['pageData'],
	availableLangs: LanguageCode[]
) => {
	// Get from Local Storage
	const storedLang = localStorage.getItem('currentLang') as LanguageCode | null;
	if (storedLang && availableLangs.includes(storedLang) && pageData?.[storedLang]?.length) {
		return storedLang;
	}

	// Check browser language
	const browserLang = getBrowserLanguage();
	if (availableLangs.includes(browserLang)) {
		return browserLang;
	}

	// Final fallback to the first available language
	return availableLangs[0];
};
