import PageStructure from '../../../PageStructure/PageStructure';
import { sliderPodcastShow } from './PodcastShow/dataSliderPodcastShow';
import { dataTextPodcastShow } from './PodcastShow/dataTextPodcastShow';

const SelfPresentation = () => {
	return <PageStructure textData={dataTextPodcastShow} sliderData={sliderPodcastShow} />;
};

export default SelfPresentation;
