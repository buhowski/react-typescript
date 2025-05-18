import PageStructure from '../../../PageStructure/PageStructure';
import { sliderPodcastShow } from './dataSliderPodcastShow';
import { dataTextPodcastShow } from './dataTextPodcastShow';

const PodcastShow = () => {
	return <PageStructure textData={dataTextPodcastShow} sliderData={sliderPodcastShow} />;
};

export default PodcastShow;
