import PageStructure from '../../../components/PageStructure';
import { dataCossackSaga } from './dataCossackSaga';
import { pathToGames } from '../../../../../components/urlsData';

const CossackSaga = () => {
	return <PageStructure textData={dataCossackSaga} backButton={pathToGames} />;
};

export default CossackSaga;
