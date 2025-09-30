// Define specific language codes
export const LANGUAGES = ['en', 'ua', 'ru'] as const;
export type LanguageCode = (typeof LANGUAGES)[number];

// Map frontend codes to correct HTML lang
export const htmlLangMap: Record<LanguageCode, string> = {
	en: 'en',
	ru: 'ru',
	ua: 'uk',
};

// --- Shared Data Interfaces ---

// Meta tags structure for SEO
export interface Alternate {
	hreflang: string;
	href: string;
}

export interface MetaTags {
	title?: string;
	description?: string;
	canonicalUrl?: string;
	langAlternates?: Alternate[];

	// Open Graph Meta Tags
	ogUrl?: string;
	ogTitle?: string;
	ogDescription?: string;
	ogImage?: string;

	// Twitter Meta Tags
	twitterUrl?: string;
	twitterTitle?: string;
	twitterDescription?: string;
	twitterImage?: string;
}

// Reusable type for generating page meta
export type PageMetaParams = Pick<MetaTags, 'title' | 'description' | 'ogImage'> & {
	path: string;
};

export interface PageHelmetProps {
	metaTags: MetaTags;
}

// Re-use SlideItem
export interface SlideItem {
	itemPoster?: string;
	itemSrc?: string;
	itemAlt: string;
	itemCaption?: string;
	putImgTitle?: boolean;
}

// VideoPreview component
export interface VideoPreviewProps extends SlideItem {
	onClick: () => void;
	onLoad?: () => void;
}

// Common properties for content related URLs
export interface ContentUrls {
	markdownAPI?: string;
	pagePreviewUrl?: string;
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

// Interface for a heading collected *within* MarkdownBlock
export interface CollectedHeading {
	text: string;
	level: number;
	id: string;
}

// Interface for a full heading entry used in PageStructure and TableOfContent
export interface HeadingInfo extends CollectedHeading {
	pitchIndex: number;
}

// TextDataItem interface for PageStructure text data
export interface TextDataItem extends ContentUrls, WithOptionalSliderContent {}

// LanguageSwitcher component Props
export interface LanguageSwitcherProps {
	currentLang: LanguageCode;
	availableLangs: LanguageCode[];
	changeLanguage: (lang: LanguageCode) => void;
}

// PageStructure component Props
export interface PageProps {
	pageData: Record<LanguageCode, TextDataItem[]>;
	backButton?: string | null;
	metaTags?: MetaTags;
}

export interface SinglePageProps extends PageProps {
	initialLang?: LanguageCode;
}

// PitchContainer component Props
export interface PitchContainerProps extends WithLanguage, WithOptionalSliderContent {
	structure: ContentUrls;
	index: number;
	onHeadingsExtracted?: (index: number, headings: CollectedHeading[]) => void;
}

// MarkdownBlock component props
export interface MarkdownBlockProps extends WithLanguage, WithOptionalSliderContent {
	src: string;
	pitchIndex: number;
	onError?: (hasError: boolean) => void;
	onHeadingsExtracted?: (headings: CollectedHeading[]) => void;
}

// Slider component props
export interface SliderProps extends WithLanguage {
	slides: SlideItem[];
}

// Table of Content component props
export interface TocProps {
	onSelectIndex: (id: string) => void;
	activeHeadingId: string | null;
	headings: HeadingInfo[];
	isLoadingContent: boolean;
}
