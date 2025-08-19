// Posters
import witcherPoster from '../../../assets/games/witcherPoster.webp';
import samuraiPoster from '../../../assets/games/samuraiPoster.webp';

// Images
import cossacksPoster from '../../../assets/games/cossacksPoster.webp';
import cossackWarrior from '../../../assets/games/cossackWarrior.webp';
import cossackDrummer from '../../../assets/games/drummer.webp';
import replicantPoster from '../../../assets/games/replicant.webp';
import automataPoster from '../../../assets/games/automata.webp';
import cossackCharakternyk from '../../../assets/games/cossackCharakternyk.webp';

// Videos
import ghostOfTsushimaTrailer from '../../../assets/games/videos/ghostOfTsushimaTrailer.mp4';
import witcherTrailer from '../../../assets/games/videos/witcherTrailer.mp4';
const replicantTrailer = 'https://www.youtube-nocookie.com/embed/sPcf4pfTqfY';
const automataTrailer = 'https://www.youtube-nocookie.com/embed/4bx02CEISLI';

export const dataSliderCossackSaga = [
	{
		itemPoster: witcherPoster,
		itemSrc: witcherTrailer,
		itemAlt: 'Poster for The Witcher 3: Wild Hunt game.',
		itemCaption: 'Visual Reference: Design / Immersive world — The Witcher 3: Wild Hunt.',
	},
	{
		itemPoster: samuraiPoster,
		itemSrc: ghostOfTsushimaTrailer,
		itemAlt:
			'Poster for Ghost of Tsushima game, featuring a samurai during the Mongol invasion of Japan.',
		itemCaption: 'Visual Reference:  Setting / Historical Japanese atmosphere — Ghost of Tsushima.',
	},
	{
		itemPoster: replicantPoster,
		itemSrc: replicantTrailer,
		itemAlt: 'Poster for NieR Replicant ver.1.22474487139... Official Trailer.',
		itemCaption:
			'Atmosphere Reference: Cinematic combat, emotional intensity, and unique world vibe — NieR Replicant.',
	},
	{
		itemPoster: automataPoster,
		itemSrc: automataTrailer,
		itemAlt: 'Poster for NieR Automata Official Boss Battle Gameplay Trailer.',
		itemCaption: 'Reference for Direction: Cinematic boss combat — NieR Automata.',
	},
	{
		itemSrc: cossackDrummer,
		itemAlt:
			'Illustration of a Ukrainian Cossack drummer with Cossack Drum of War — tribal battle band, inspired by Mad Max.',
		itemCaption: `Reference to Cossack Drum of War — tribal battle band, inspired by Mad Max.`,
		putImgTitle: true,
	},
	{
		itemSrc: cossacksPoster,
		itemAlt: 'Painting depicting Ukrainian Cossacks writing a letter to the Turkish sultan.',
		itemCaption: `Reference to Ukrainian Cossacks.`,
		putImgTitle: true,
	},
	{
		itemSrc: cossackWarrior,
		itemAlt: 'Illustration of a Ukrainian Cossack warrior.',
		itemCaption: `Reference to Cossacks Warrior Style.`,
		putImgTitle: true,
	},

	{
		itemSrc: cossackCharakternyk,
		itemAlt: 'Illustration of a Ukrainian Cossack Characternyk, a sorcerer.',
		itemCaption: `Reference to Cossack Sorcerer.`,
		putImgTitle: true,
	},
];
