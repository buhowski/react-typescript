import PageStructure from '../../../../components/PageStructure';
import { pathToSelfPresentation } from '../../../../../../components/urlsData';
import { dataGodEvening } from './dataGodEvening';

const GodEvening = () => {
	return <PageStructure textData={dataGodEvening} backButton={pathToSelfPresentation} />;
};

export default GodEvening;
