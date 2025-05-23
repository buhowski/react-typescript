// Define specific language codes
export type LanguageCode = 'en' | 'ua' | 'ru';

// Re-use SlideItem and LanguageCode types from PageStructure/Slider
export interface SlideItem {
	itemSrc?: string;
	itemAlt?: string;
	itemPoster?: string;
	itemTitle?: string;
}
