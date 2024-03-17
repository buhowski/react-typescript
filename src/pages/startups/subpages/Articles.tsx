import Slider from '../../../components/Slider';
import { dataSlider } from '../data/SlidersData/SliderDataArticles';
import IdeaContent from '../components/IdeaContent';
import { gamesTextData } from '../data/textData';

const StartupArticles = () => {
	return (
		<IdeaContent
			title=''
			textData={gamesTextData}
			Slider={<Slider dataSlider={dataSlider} />}
		/>
	);
};

export default StartupArticles;
