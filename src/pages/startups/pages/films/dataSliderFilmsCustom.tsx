import { dataSliderPodcastShow } from './SelfPresentation/PodcastShow/dataSliderPodcastShow';
// Images
import writer from '../../assets/writer.webp';

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
export const dataSliderSelfPresentationCustom = rawCombinedSelfPresentationSlides.map((item) => ({
	...item,
	itemAlt: `${item._prefix || ''}${item.itemAlt ?? ''}`,
}));

export const dataSliderFilmsPreface = [
	{
		itemSrc: writer,
		itemAlt: `Magazine showcasing articles on the future of journalism (new generation media), where new journalism is a separate form of art`,
	},
];
