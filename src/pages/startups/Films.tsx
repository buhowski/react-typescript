import PageStructure from './PageStructure/PageStructure';
import { dataFilmsSlider } from './pages/films/dataFilmsSlider';
import { dataFilmsText } from './pages/films/dataFilmsText';

const StartupFilms = () => {
	return <PageStructure textData={dataFilmsText} sliderData={dataFilmsSlider} />;
};

export default StartupFilms;
