import PageStructure from './PageStructure/PageStructure';
import { dataFilmsSlider } from './pages/films/dataSliderFilms';
import { dataFilmsText } from './pages/films/dataTextFilms';

const StartupFilms = () => {
	return <PageStructure textData={dataFilmsText} sliderData={dataFilmsSlider} />;
};

export default StartupFilms;
