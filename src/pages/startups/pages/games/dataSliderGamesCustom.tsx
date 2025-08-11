import { dataSliderCossackSaga } from './CossackSaga/dataSliderCossackSaga';

const ALT_PODCAST_SHOW = ' ';
const rawCombinedSelfPresentationSlides = [
	...dataSliderCossackSaga.map((item) => ({ ...item, _prefix: ALT_PODCAST_SHOW })),

	// or simgle item
	// { ...dataSliderCossacks[0], _prefix: ALT_PODCAST_SHOW },
];

export const dataSliderSelfPresentationCustom = rawCombinedSelfPresentationSlides.map((item) => ({
	...item,
	itemAlt: `${item._prefix || ''}${item.itemAlt ?? ''}`,
}));
