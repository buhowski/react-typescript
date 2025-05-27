import { dataSliderPodcastShow } from './SelfPresentation/PodcastShow/dataSliderPodcastShow';

// Images
// import writer from '../../assets/writer.webp';

const ALT_PODCAST_SHOW = 'Example for Podcast Show: ';

const rawCombinedSelfPresentationSlides = [
	...dataSliderPodcastShow.map((item) => ({ ...item, _prefix: ALT_PODCAST_SHOW })),

	// or simgle item
	// { ...dataSliderPodcastShow[0], _prefix: ALT_PODCAST_SHOW },
];

export const dataSliderSelfPresentationCustom = rawCombinedSelfPresentationSlides.map((item) => ({
	...item,
	itemCaption: `${item._prefix || ''}${item.itemCaption ?? ''}`,
}));

export const dataSliderFilmsPreface = [
	// {
	// 	itemSrc: '',
	// 	itemAlt: ``,
	// },
];
