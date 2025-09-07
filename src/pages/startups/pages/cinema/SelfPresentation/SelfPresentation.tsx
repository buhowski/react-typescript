import PageStructure from '../../../components/PageStructure';
import { dataSelfPresentation } from './dataSelfPresentation';
import { pathToCinema } from '../../../../../components/urlsData';

const SelfPresentation = () => {
	return <PageStructure textData={dataSelfPresentation} backButton={pathToCinema} />;
};

export default SelfPresentation;
