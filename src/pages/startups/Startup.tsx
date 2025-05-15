import PageStructure from './PageStructure/PageStructure';
import { dataSlider } from './pages/startup/dataSlider';
import { dataStartupText } from './pages/startup/dataStartupText';

const Startup = () => {
	return <PageStructure textData={dataStartupText} sliderData={dataSlider} />;
};

export default Startup;
