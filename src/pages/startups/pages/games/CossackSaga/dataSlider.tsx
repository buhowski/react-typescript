// Images
import cossacksReplyLetter from '../../../../../assets/startup/games/cossacks-refs.webp';
import cossackDrummer from '../../../../../assets/startup/games/saga-poster.webp';
import saga2Poster from '../../../../../assets/startup/games/saga-2.webp';
import saga3Poster from '../../../../../assets/startup/games/saga-3.webp';

// Posters
import witcherPoster from '../../../../../assets/startup/games/witcher-poster.webp';
import tsushimaPoster from '../../../../../assets/startup/games/tsushima.webp';
import replicantPoster from '../../../../../assets/startup/games/replicant.webp';
import automataPoster from '../../../../../assets/startup/games/automata-poster.webp';

// Videos
import ghostOfTsushimaTrailer from '../../../../../assets/startup/games/videos/ghostOfTsushimaTrailer.mp4';
import witcherTrailer from '../../../../../assets/startup/games/videos/witcherTrailer.mp4';
const replicantTrailer = 'https://www.youtube-nocookie.com/embed/sPcf4pfTqfY';
const automataTrailer = 'https://www.youtube-nocookie.com/embed/4bx02CEISLI';

export const dataSliderSaga = [
	{
		itemSrc: cossackDrummer,
		itemAlt: `AI-generated poster for Cossack Saga Part I–II — demonic baptism ritual and a heroine bound to the hero's soul.`,
		// itemCaption: 'Poster — Demonic Baptism / Bound Souls',
		// putImgTitle: true,
	},
	{
		itemPoster: automataPoster,
		itemSrc: automataTrailer,
		itemAlt:
			'NieR Automata boss combat — android warriors, cinematic sci-fi action and storytelling',
		itemCaption: 'Cinematic Boss Combat — NieR Automata',
	},
	{
		itemPoster: witcherPoster,
		itemSrc: witcherTrailer,
		itemAlt:
			'The Witcher 3 Wild Hunt — Geralt in a dark fantasy world, epic quests and immersive RPG design',
		itemCaption: 'Immersive World Design — The Witcher 3',
	},
	{
		itemPoster: tsushimaPoster,
		itemSrc: ghostOfTsushimaTrailer,
		itemAlt:
			'Ghost of Tsushima — samurai vs Mongol invasion, cinematic Japanese atmosphere and stealth action',
		itemCaption: 'Historical Japanese Atmosphere — Ghost of Tsushima',
	},
	{
		itemPoster: replicantPoster,
		itemSrc: replicantTrailer,
		itemAlt:
			'NieR Replicant — anime-style characters in cinematic combat, emotional narrative and unique fantasy world',
		itemCaption: 'World Atmosphere / Emotional Intensity — NieR Replicant',
	},
	{
		itemSrc: cossacksReplyLetter,
		itemAlt:
			'Ukrainian Cossacks writing a reply letter to the Turkish sultan — historical painting, 17th century military life',
		itemCaption: 'Hermit Cossacks / Gypsy Punks',
		putImgTitle: true,
	},
];

export const dataSliderSaga2 = [
	{
		itemSrc: saga2Poster,
		itemAlt:
			'Ukrainian Cossack Charakternyk sorcerer — warrior, shaman and seer, mystical folklore design',
	},
];

export const dataSliderSaga3 = [
	{
		itemSrc: saga3Poster,
		itemAlt:
			'Ukrainian Cossack Charakternyk sorcerer — warrior, shaman and seer, mystical folklore design',
	},
];
