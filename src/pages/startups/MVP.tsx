import Slider from '../../components/Slider';
import IdeaContent from './PageStructure/PageStructure';
import { dataSlider } from './data/MVP/SliderData';
import { articlesTextData } from './data/MVP/textData';

const StartupMVP = () => {
	return (
		<IdeaContent
			title='New Generation Media'
			textData={articlesTextData}
			Slider={<Slider dataSlider={dataSlider} />}
		/>
	);
};

export default StartupMVP;
