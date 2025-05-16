import PageStructure from './PageStructure/PageStructure';
import { sliderStartup } from './pages/startup/dataSliderStartup';
import { dataTextStartup } from './pages/startup/dataTextStartup';

const Startup = () => {
	return <PageStructure textData={dataTextStartup} sliderData={sliderStartup} />;
};

export default Startup;
