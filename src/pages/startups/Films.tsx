import PageStructure from './PageStructure/PageStructure';
import { dataFilmsText } from './pages/films/dataTextFilms';

const StartupFilms = () => {
	return <PageStructure textData={dataFilmsText} />;
};

export default StartupFilms;
