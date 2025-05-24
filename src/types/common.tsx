// Define specific language codes (already perfect!)
export type LanguageCode = 'en' | 'ua' | 'ru';

// --- Shared Data Interfaces ---

// Re-use SlideItem (already perfect!)
export interface SlideItem {
	itemSrc?: string;
	itemAlt?: string;
	itemPoster?: string;
	itemTitle?: string;
}

// Common properties for content related URLs (markdown, film previews)
export interface ContentUrls {
	markdownAPI?: string;
	filmsPreviewUrl?: string;
}

// Common property for components that might have optional slider content
export interface WithOptionalSliderContent {
	sliderContent?: SlideItem[];
}

// Common property for components that need to know the current language
export interface WithLanguage {
	currentLanguage: LanguageCode;
}

// --- Component Props and Data Structures ---

// TextDataItem interface for PageStructure text data.
export interface TextDataItem extends ContentUrls, WithOptionalSliderContent {}

// LanguageSwitcher component Props (already perfect and now uses LanguageCode)
export interface LanguageSwitcherProps {
	currentLang: LanguageCode;
	availableLangs: LanguageCode[];
	changeLanguage: (lang: LanguageCode) => void;
}

// PageStructure component Props
export interface PageProps {
	textData: Record<LanguageCode, TextDataItem[]>;
	tableOfContent?: boolean;
}

// PitchContainer component Props
export interface PitchContainerProps extends WithLanguage, WithOptionalSliderContent {
	structure: ContentUrls;
	index: number;
}

// MarkdownBlock component props
export interface MarkdownBlockProps extends WithLanguage, WithOptionalSliderContent {
	src: string;
}

// Slider component props
export interface SliderProps extends WithLanguage {
	slides: SlideItem[];
}

// Table of Content component props (already perfect!)
export interface TocProps {
	contentLength: number;
	onSelectIndex: (index: number) => void;
	activeIndex: number;
}
