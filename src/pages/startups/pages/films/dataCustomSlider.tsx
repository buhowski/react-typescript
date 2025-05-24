import { dataSliderPodcastShow } from './SelfPresentation/PodcastShow/dataSliderPodcastShow';

// Custom ALT prefixes
const ALT_PODCAST_SHOW = 'Showcase for Podcast Show: ';

// Combine slides with corresponding alt prefixes
const rawCombinedSelfPresentationSlides = [
	// All Array
	...dataSliderPodcastShow.map((item) => ({ ...item, _prefix: ALT_PODCAST_SHOW })),

	// or simgle item
	// { ...dataSliderPodcastShow[0], _prefix: ALT_PODCAST_SHOW },
];

// Final export with constructed itemAlt
export const dataCustomSliderSelfPresentation = rawCombinedSelfPresentationSlides.map((item) => ({
	...item,
	itemAlt: `${item._prefix || ''}${item.itemAlt ?? ''}`,
}));
