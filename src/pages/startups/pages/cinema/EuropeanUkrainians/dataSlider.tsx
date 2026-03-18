// Posters
import promoPoster from '../../../../../assets/startup/cinema/EuropeanUkrainians/promo.webp';
import broadCityPoster from '../../../../../assets/startup/cinema/EuropeanUkrainians/broadCityPoster.webp';
import fantasyPoster from '../../../../../assets/startup/cinema/EuropeanUkrainians/fantasyPoster.webp';
import bestMomentsPoster from '../../../../../assets/startup/cinema/EuropeanUkrainians/always-sunny-the-gang.webp';

// Videos
import promoVideo from '../../../../../assets/startup/cinema/videos/teaserVideo.mp4';
import broadCityTrailer from '../../../../../assets/startup/cinema/videos/broadCityTrailer.mp4';
import fantasy from '../../../../../assets/startup/cinema/videos/fantasy.mp4';
const bestMomentsVideo = 'https://www.youtube-nocookie.com/embed/cbSEr1oJ8mw';

export const dataSliderEuropeanUkrainians = [
	{
		itemPoster: bestMomentsPoster,
		itemSrc: bestMomentsVideo,
		itemAlt:
			"It's Always Sunny in Philadelphia — The Gang's chaotic interactions, dark humor, satirical social commentary and irreverent adult comedy.",
		itemCaption: "Live Action Vibe Ref — It's Always Sunny in Philadelphia",
	},
	{
		itemPoster: promoPoster,
		itemSrc: promoVideo,
		itemAlt:
			"It's Always Sunny in Philadelphia promo — absurd social interactions, chaotic humor and countercultural dark comedy.",
		itemCaption: "Promo Scene Vibe Ref — It's Always Sunny in Philadelphia",
	},
	{
		itemPoster: broadCityPoster,
		itemSrc: broadCityTrailer,
		itemAlt:
			"Broad City — Ilana and Abbi's comedic adventures, friendship dynamics and irreverent urban life humor.",
		itemCaption: 'Promo Scene Vibe Ref — Broad City',
	},
	{
		itemPoster: fantasyPoster,
		itemSrc: fantasy,
		itemAlt:
			'The Secret Life of Walter Mitty — fantasy sequence, grand imagined adventures, cinematic visual storytelling and creative narrative.',
		itemCaption: 'Fantasy Sequence Ref — The Secret Life of Walter Mitty',
	},
];
