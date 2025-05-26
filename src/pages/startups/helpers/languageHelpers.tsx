// languageHelpers.ts
import { LanguageCode, PageProps } from '../../../types/common';

export const LANGUAGES: LanguageCode[] = ['en', 'ua', 'ru'];

export const getInitialLanguage = (
	textData: PageProps['textData'],
	availableLangs: LanguageCode[]
) => {
	const storedLang = localStorage.getItem('currentLang') as LanguageCode | null;
	if (storedLang && textData?.[storedLang]?.length) {
		return storedLang;
	}
	return availableLangs.includes('ua') ? 'ua' : availableLangs[0] || 'en';
};
