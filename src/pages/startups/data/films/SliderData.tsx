// Video Posters
import classicSetupPoster from '../../media/films/classicSetupPoster.webp';
import teaserPoster from '../../media/films/teaserPoster.webp';
import screamPoster from '../../media/films/screamPoster.webp';
import broadCityPoster from '../../media/films/broadCityPoster.webp';
import turboKidsPoster from '../../media/films/turboKidsPoster.webp';

// Videos
// import teaserVideo from '../../media/films/videos/teaserVideo.webm';
// import teamVideo from '../../media/films/videos/teamVideo.webm';
import screamVideo from '../../media/films/videos/screamVideo.webm';
import broadCityTrailer from '../../media/films/videos/broadCityTrailer.webm';
import newKidsTurboTrailer from '../../media/films/videos/newKidsTurboTrailer.webm';

import test from '../../media/films/videos/test.mp4';
import testv8 from '../../media/films/videos/testv8.webm';

export const dataSlider = [
	{
		itemPoster: teaserPoster,
		itemSrc: test,
		itemAlt: `Sample 01. Teaser. "It's Always Sunny in Philadelphia".`,
	},
	{
		itemPoster: classicSetupPoster,
		itemSrc: testv8,
		itemAlt: `Sample 02. Looks, brains, wild card. Classic setup. "It's Always Sunny in Philadelphia".`,
	},
	{
		itemPoster: screamPoster,
		itemSrc: screamVideo,
		itemAlt: `Sample 03. Bathroom Screams. "It's Always Sunny in Philadelphia".`,
	},
	{
		itemPoster: broadCityPoster,
		itemSrc: broadCityTrailer,
		itemAlt: `Sample 04. "Broad City" Trailer.`,
	},
	{
		itemPoster: turboKidsPoster,
		itemSrc: newKidsTurboTrailer,
		itemAlt: `Sample 05. "New Kids Turbo" Trailer.`,
	},
];
