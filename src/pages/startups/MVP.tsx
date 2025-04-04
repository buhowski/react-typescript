import IdeaContent from './PageStructure/PageStructure';
import { dataSlider } from './data/MVP/SliderData';
import { articlesTextData } from './data/MVP/textData';

const StartupMVP = () => {
	return (
		<IdeaContent
			pageClassName='startup-mvp'
			langDisable=''
			textData={articlesTextData}
			sliderData={dataSlider}
		/>
	);
};

export default StartupMVP;
