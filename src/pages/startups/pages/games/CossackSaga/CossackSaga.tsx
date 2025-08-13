import PageStructure from '../../../PageStructure/PageStructure';
import { dataCossackSaga } from './dataCossackSaga';
import { pathToStartupGames } from '../../../../../components/urlsData';

const CossackSaga = () => {
	return <PageStructure textData={dataCossackSaga} backButton={pathToStartupGames} />;
};

export default CossackSaga;
