import GeneralStructure from './GeneralStructure';
import { startupTextData } from './components/textData';

const StartupFilms = () => {
	return <GeneralStructure title='Startup Presentation' textData={startupTextData} />;
};

export default StartupFilms;
