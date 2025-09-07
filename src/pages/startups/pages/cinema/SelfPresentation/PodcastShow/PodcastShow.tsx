import PageStructure from '../../../../components/PageStructure';
import { dataPodcastShow } from './dataPodcastShow';
import { pathToSelfPresentation } from '../../../../../../components/urlsData';

const PodcastShow = () => {
	return <PageStructure textData={dataPodcastShow} backButton={pathToSelfPresentation} />;
};

export default PodcastShow;
