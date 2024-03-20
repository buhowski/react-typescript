import Slider from '../../../components/Slider';
import { dataSlider } from '../data/SlidersData/SliderDataArticles';
import IdeaContent from '../components/IdeaContent';
import { articlesTextData } from '../data/textData';

const StartupArticles = () => {
	return (
		<IdeaContent
			title='New Generation Media'
			textData={articlesTextData}
			Slider={<Slider dataSlider={dataSlider} />}
		/>
	);
};

export default StartupArticles;
