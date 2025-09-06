import PageStructure from '../../../PageStructure/PageStructure';
import { dataSelfPresentation } from './dataSelfPresentation';
import { pathToStartupFilms } from '../../../../../components/urlsData';

const SelfPresentation = () => {
	return <PageStructure textData={dataSelfPresentation} backButton={pathToStartupFilms} />;
};

export default SelfPresentation;
