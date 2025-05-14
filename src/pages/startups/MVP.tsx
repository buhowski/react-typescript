import IdeaContent from './PageStructure/PageStructure';
import { dataSlider } from './pages/MVP/SliderData';
import { articlesTextData } from './pages/MVP/textData';

const StartupMVP = () => {
	return (
		<IdeaContent
			pageClassName='startup-mvp'
			textData={articlesTextData}
			sliderData={dataSlider}
			langDisable=''
			// toc={true}
		/>
	);
};

export default StartupMVP;
