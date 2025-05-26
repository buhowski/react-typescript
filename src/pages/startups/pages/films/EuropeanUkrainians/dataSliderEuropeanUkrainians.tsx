// Posters
import classicSetupPoster from '../../../assets/films/EuropeanUkrainians/classicSetupPoster.webp';
import promoPoster from '../../../assets/films/EuropeanUkrainians/promo.webp';
import broadCityPoster from '../../../assets/films/EuropeanUkrainians/broadCityPoster.webp';
import fantasyPoster from '../../../assets/films/EuropeanUkrainians/fantasyPoster.webp';
import bestMomentsPoster from '../../../assets/films/EuropeanUkrainians/best-moments.webp';

// Videos
import promoVideo from '../../../assets/films/videos/teaserVideo.mp4';
import teamVideo from '../../../assets/films/videos/teamVideo.mp4';
import broadCityTrailer from '../../../assets/films/videos/broadCityTrailer.mp4';
import fantasy from '../../../assets/films/videos/fantasy.mp4';
const bestMomentsVideo = 'https://www.youtube.com/embed/2gcEbzGbp38';

export const dataSliderEuropeanUkrainians = [
	{
		itemPoster: bestMomentsPoster,
		itemSrc: bestMomentsVideo,
		itemAlt: `The vibe I want to capture: moments example from "It's Always Sunny in Philadelphia"`,
	},

	{
		itemPoster: promoPoster,
		itemSrc: promoVideo,
		itemAlt: `The vibe I want to capture: promo from "It's Always Sunny in Philadelphia"`,
	},

	{
		itemPoster: classicSetupPoster,
		itemSrc: teamVideo,
		itemAlt: `The team I want to capture: Looks, brains and wild card - Classic setup. From "It's Always Sunny in Philadelphia"`,
	},

	{
		itemPoster: broadCityPoster,
		itemSrc: broadCityTrailer,
		itemAlt: `The vibe I want to capture: promo from "Broad City"`,
	},

	{
		itemPoster: fantasyPoster,
		itemSrc: fantasy,
		itemAlt: `Imagination Example: from "The Secret Life of Walter Mitty"`,
	},
];
