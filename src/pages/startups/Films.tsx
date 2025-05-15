import PageStructure from './PageStructure/PageStructure';
import { dataSliderPreview } from './pages/films/dataSliderPreview';
import { dataFilmsTextPreview } from './pages/films/dataFilmsTextPreview';

const StartupFilms = () => {
	return <PageStructure textData={dataFilmsTextPreview} sliderData={dataSliderPreview} />;
};

export default StartupFilms;
