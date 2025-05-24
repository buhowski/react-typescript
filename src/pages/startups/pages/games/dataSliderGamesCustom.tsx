import { dataSliderCossacks } from './Cossacks/dataSliderCossacks';

// Custom ALT prefixes
const ALT_PODCAST_SHOW = 'Showcase for Podcast Show: ';

// Combine slides with corresponding alt prefixes
const rawCombinedSelfPresentationSlides = [
	// All Array
	...dataSliderCossacks.map((item) => ({ ...item, _prefix: ALT_PODCAST_SHOW })),

	// or simgle item
	// { ...dataSliderCossacks[0], _prefix: ALT_PODCAST_SHOW },
];

// Final export with constructed itemAlt
export const dataSliderSelfPresentationCustom = rawCombinedSelfPresentationSlides.map((item) => ({
	...item,
	itemAlt: `${item._prefix || ''}${item.itemAlt ?? ''}`,
}));
