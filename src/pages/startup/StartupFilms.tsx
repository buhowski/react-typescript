import GeneralStructure from './GeneralStructure';
import { filmsTextData } from './components/textData';

const StartupFilms = () => {
	return <GeneralStructure title='Films' textData={filmsTextData} />;
};

export default StartupFilms;
