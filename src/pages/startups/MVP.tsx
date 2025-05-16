import PageStructure from './PageStructure/PageStructure';
import { sliderMVP } from './pages/MVP/dataSliderMVP';
import { dataTextMVP } from './pages/MVP/dataTextMVP';

const StartupMVP = () => {
	return <PageStructure textData={dataTextMVP} sliderData={sliderMVP} />;
};

export default StartupMVP;
