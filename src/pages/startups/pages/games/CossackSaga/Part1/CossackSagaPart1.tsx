import PageStructure from '../../../../components/PageStructure';
import { dataCossackSagaPart1 } from './dataCossackSagaPart1';
import { pathToCossackSaga } from '../../../../../../components/urlsData';

const CossackSagaPart1 = () => {
	return <PageStructure textData={dataCossackSagaPart1} backButton={pathToCossackSaga} />;
};

export default CossackSagaPart1;
