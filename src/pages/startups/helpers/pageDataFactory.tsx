import { LanguageCode, TextDataItem, SlideItem, ContentUrls } from '../../../types/common';

// --- Input type for each block ---
interface PageBlock extends ContentUrls {
	sliderContent?: SlideItem[];
}

// --- Factory to create multi-language page data ---
export const createData = (pageBlocks: PageBlock[]): Record<LanguageCode, TextDataItem[]> => {
	return {
		en: pageBlocks.map((b) => ({
			markdownAPI: b.markdownAPI?.replace('.md', 'EN.md'),
			sliderContent: b.sliderContent,
			pagePreviewUrl: b.pagePreviewUrl,
		})),

		ru: pageBlocks.map((b) => ({
			markdownAPI: b.markdownAPI?.replace('.md', 'RU.md'),
		})),

		ua: pageBlocks.map((b) => ({
			markdownAPI: b.markdownAPI?.replace('.md', 'UA.md'),
		})),
	};
};
