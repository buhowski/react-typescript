import PageStructure from '../../../PageStructure/PageStructure';
import { dataText } from './dataText';
import { pathToStartupFilms } from '../../../../../components/urlsData';

const EuropeanUkrainians = () => {
	return <PageStructure textData={dataText} backButton={pathToStartupFilms} />;
};

export default EuropeanUkrainians;
