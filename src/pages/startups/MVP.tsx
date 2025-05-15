import PageStructure from './PageStructure/PageStructure';
import { dataSlider } from './pages/MVP/SliderData';
import { articlesTextData } from './pages/MVP/textData';

const StartupMVP = () => {
	return <PageStructure textData={articlesTextData} sliderData={dataSlider} />;
};

export default StartupMVP;
