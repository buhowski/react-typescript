import { dataSliderCossacks } from './Cossacks/dataSliderCossacks';

const ALT_PODCAST_SHOW = ' ';
const rawCombinedSelfPresentationSlides = [
	...dataSliderCossacks.map((item) => ({ ...item, _prefix: ALT_PODCAST_SHOW })),

	// or simgle item
	// { ...dataSliderCossacks[0], _prefix: ALT_PODCAST_SHOW },
];

export const dataSliderSelfPresentationCustom = rawCombinedSelfPresentationSlides.map((item) => ({
	...item,
	itemAlt: `${item._prefix || ''}${item.itemAlt ?? ''}`,
}));
