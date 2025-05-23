// Video Posters
import classicSetupPoster from '../../../assets/films/classicSetupPoster.webp';
import teaserPoster from '../../../assets/films/teaserPoster.webp';
import screamPoster from '../../../assets/films/screamPoster.webp';
import broadCityPoster from '../../../assets/films/broadCityPoster.webp';
import turboKidsPoster from '../../../assets/films/turboKidsPoster.webp';
import fantasyPoster from '../../../assets/films/fantasyPoster.webp';

// Videos
import teaserVideo from '../../../assets/films/videos/teaserVideo.mp4';
import teamVideo from '../../../assets/films/videos/teamVideo.mp4';
import screamVideo from '../../../assets/films/videos/screamVideo.mp4';
import broadCityTrailer from '../../../assets/films/videos/broadCityTrailer.mp4';
import newKidsTurboTrailer from '../../../assets/films/videos/newKidsTurboTrailer.mp4';
import fantasy from '../../../assets/films/videos/fantasy.mp4';

export const dataSliderEU = [
	{
		itemPoster: screamPoster,
		itemSrc: screamVideo,
		itemAlt: `Example 01. Bathroom Screams. From "It's Always Sunny in Philadelphia".`,
	},
	{
		itemPoster: teaserPoster,
		itemSrc: teaserVideo,
		itemAlt: `Example 02. From "It's Always Sunny in Philadelphia" – promo.`,
	},
	{
		itemPoster: classicSetupPoster,
		itemSrc: teamVideo,
		itemAlt: `Example 03. Looks, brains, wild card. Classic setup. From "It's Always Sunny in Philadelphia".`,
	},

	{
		itemPoster: broadCityPoster,
		itemSrc: broadCityTrailer,
		itemAlt: `Example 04. From "Broad City" – promo.`,
	},
	{
		itemPoster: turboKidsPoster,
		itemSrc: newKidsTurboTrailer,
		itemAlt: `Example 05. From "New Kids Turbo" – trailer.`,
	},
	{
		itemPoster: fantasyPoster,
		itemSrc: fantasy,
		itemAlt: `Example 06. From "The Secret Life of Walter Mitty".`,
	},
];

// Use To Import On Page
export const sliderEU = {
	en: [
		{
			sliderContent: dataSliderEU,
		},
	],
};
