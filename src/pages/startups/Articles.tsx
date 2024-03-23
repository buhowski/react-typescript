import Slider from '../../components/Slider';
import IdeaContent from './PageStructure/PageStructure';
import { dataSlider } from './data/articles/SliderData';
import { articlesTextData } from './data/articles/textData';

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
