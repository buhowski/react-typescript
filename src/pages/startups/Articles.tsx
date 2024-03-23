import Slider from './PageStructure/Slider';
import IdeaContent from './PageStructure/IdeaContent';
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
