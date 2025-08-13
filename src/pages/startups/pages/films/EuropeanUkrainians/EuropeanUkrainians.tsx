import PageStructure from '../../../PageStructure/PageStructure';
import { dataEuropeanUkrainians } from './dataEuropeanUkrainians';
import { pathToStartupFilms } from '../../../../../components/urlsData';

const EuropeanUkrainians = () => {
	return <PageStructure textData={dataEuropeanUkrainians} backButton={pathToStartupFilms} />;
};

export default EuropeanUkrainians;
