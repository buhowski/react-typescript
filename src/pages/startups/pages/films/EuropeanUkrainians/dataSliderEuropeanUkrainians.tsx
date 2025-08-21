// Posters
import promoPoster from '../../../assets/films/EuropeanUkrainians/promo.webp';
import broadCityPoster from '../../../assets/films/EuropeanUkrainians/broadCityPoster.webp';
import fantasyPoster from '../../../assets/films/EuropeanUkrainians/fantasyPoster.webp';
import bestMomentsPoster from '../../../assets/films/EuropeanUkrainians/always-sunny-the-gang.webp';

// Videos
import promoVideo from '../../../assets/films/videos/teaserVideo.mp4';
import broadCityTrailer from '../../../assets/films/videos/broadCityTrailer.mp4';
import fantasy from '../../../assets/films/videos/fantasy.mp4';
const bestMomentsVideo = 'https://www.youtube-nocookie.com/embed/cbSEr1oJ8mw';

export const dataSliderEuropeanUkrainians = [
	{
		itemPoster: bestMomentsPoster,
		itemSrc: bestMomentsVideo,
		itemAlt: `Promotional poster from "It's Always Sunny in Philadelphia" TV series, capturing The Gang's chaotic interactions with normal people, comedic disasters, dark humor, satirical social commentary, eccentric characters, ensemble cast, pop culture reference, situational comedy, adult humor, irreverent storytelling, and TV entertainment dynamics.`,
		itemCaption: `Live Action Scene Vibe I want to use: It's Always Sunny in Philadelphia.`,
	},

	{
		itemPoster: promoPoster,
		itemSrc: promoVideo,
		itemAlt: `Screenshot from 'It's Always Sunny in Philadelphia' promo, showing chaotic humor, absurd social interactions, and the iconic antics of The Gang, capturing the dark comedy and countercultural vibe of the series.`,
		itemCaption: `Promo Scene Vibe I want to use: It's Always Sunny in Philadelphia.`,
	},

	{
		itemPoster: broadCityPoster,
		itemSrc: broadCityTrailer,
		itemAlt: `Promo screenshot from Broad City, capturing Ilana and Abbi's comedic adventures, friendship dynamics, urban life humor, and irreverent, chaotic city experiences.`,
		itemCaption: `Promo Scene Vibe I want to use: Broad City.`,
	},

	{
		itemPoster: fantasyPoster,
		itemSrc: fantasy,
		itemAlt: `Screenshot from "The Secret Life of Walter Mitty" illustrating a fantasy sequence where the protagonist imagines grand adventures, escaping reality, showcasing cinematic imagination, visual storytelling, and creative narrative techniques.`,
		itemCaption: `Fantasy Sequence Example I want to use: The Secret Life of Walter Mitty.`,
	},
];
