import PageStructure from '../../../PageStructure/PageStructure';
import { dataText } from './dataText';
import { pathToStartupFilms } from '../../../../../components/urlsData';

const LilithsAdventure = () => {
	return <PageStructure textData={dataText} backButton={pathToStartupFilms} />;
};

export default LilithsAdventure;
