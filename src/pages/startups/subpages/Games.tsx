import Slider from '../components/Slider';
import { dataSlider } from '../data/SlidersData/SliderDataGames';
import IdeaContent from '../components/IdeaContent';
import { gamesTextData } from '../data/textData';

const StartupGames = () => {
	return (
		<IdeaContent
			title='Startup Ideas'
			textData={gamesTextData}
			Slider={<Slider dataSlider={dataSlider} />}
		/>
	);
};

export default StartupGames;
