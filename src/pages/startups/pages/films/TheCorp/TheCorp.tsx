import PageStructure from '../../../PageStructure/PageStructure';
import { sliderTheCorp } from './dataSliderTheCorp';
import { dataTextTheCorp } from './dataTextTheCorp';

const TheCorp = () => {
	return <PageStructure textData={dataTextTheCorp} sliderData={sliderTheCorp} />;
};

export default TheCorp;
