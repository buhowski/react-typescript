import PageStructure from '../../../PageStructure/PageStructure';
import { dataTheCorp } from './dataTheCorp';
import { pathToStartupFilms } from '../../../../../components/urlsData';

const TheCorp = () => {
	return <PageStructure textData={dataTheCorp} backButton={pathToStartupFilms} />;
};

export default TheCorp;
