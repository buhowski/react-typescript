import PageStructure from './PageStructure/PageStructure';
import { dataFilms } from './pages/films/dataFilms';

const StartupFilms = () => {
	return <PageStructure textData={dataFilms} />;
};

export default StartupFilms;
