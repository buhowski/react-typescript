import { dataSliderPodcastShow } from './SelfPresentation/PodcastShow/dataSliderPodcastShow';

// Custom Slider Data Previes

// ### Self Presentation Projects ###
const customSliderSelfPresentationAlts = ['Showcase for Podcast SHow: '];

// TODO: rewrite for several item slides can be added from different sliders
export const dataCustomSliderSelfPresentation = dataSliderPodcastShow.map((item, index) => ({
	...item,
	itemAlt: (customSliderSelfPresentationAlts[index] || '') + item.itemAlt,
}));
