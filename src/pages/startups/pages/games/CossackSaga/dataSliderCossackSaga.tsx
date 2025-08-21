// Posters
import witcherPoster from '../../../assets/games/witcherPoster.webp';
import samuraiPoster from '../../../assets/games/samuraiPoster.webp';

// Images
import cossacksPoster from '../../../assets/games/cossacksPoster.webp';
import cossackWarrior from '../../../assets/games/cossackWarrior.webp';
import cossackDrummer from '../../../assets/games/saga-poster.webp';
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
		itemSrc: cossackDrummer,
		itemAlt:
			'Illustration of Ukrainian Hermit Cossacks, sorcerers, and drummers forming a nomadic tribal battle band inspired by Mad Max, featuring fantasy, historical, and cinematic elements.',
		itemCaption: `AI Reference: Hermit Cossacks / Sorcerers / Drums of War — tribal battle band.`,
		putImgTitle: true,
	},

	{
		itemPoster: automataPoster,
		itemSrc: automataTrailer,
		itemAlt:
			'NieR Automata boss battle poster, showcasing sci-fi combat, android warriors, cinematic action, and video game storytelling.',
		itemCaption: 'Reference to The Directing Style: Cinematic boss combat — NieR Automata.',
	},

	{
		itemPoster: witcherPoster,
		itemSrc: witcherTrailer,
		itemAlt:
			'The Witcher 3 poster, featuring Geralt of Rivia in a dark fantasy world, epic quests, magical monsters, immersive RPG gameplay, and medieval environments.',
		itemCaption: 'Visual Reference: Design / Immersive world — The Witcher 3: Wild Hunt.',
	},

	{
		itemPoster: samuraiPoster,
		itemSrc: ghostOfTsushimaTrailer,
		itemAlt:
			'Ghost of Tsushima poster, depicting a samurai during the Mongol invasion, with cinematic landscapes, stealth action, epic battles, and Japanese culture.',
		itemCaption: 'Visual Reference: Setting / Historical Japanese atmosphere — Ghost of Tsushima.',
	},

	{
		itemPoster: replicantPoster,
		itemSrc: replicantTrailer,
		itemAlt:
			'NieR Replicant trailer poster, highlighting anime-style characters, intense combat, immersive fantasy world, and dramatic narrative.',
		itemCaption:
			'Atmosphere Reference: Cinematic combat, emotional intensity, and unique world vibe — NieR Replicant.',
	},

	{
		itemSrc: cossacksPoster,
		itemAlt:
			'Painting of Ukrainian Cossacks writing a letter to the Turkish sultan, showing historical accuracy, traditional costumes, 17th-century military life, and cultural heritage.',
		itemCaption: `Reference to Ukrainian Cossacks.`,
		putImgTitle: true,
	},

	{
		itemSrc: cossackWarrior,
		itemAlt:
			'Illustration of a Ukrainian Cossack warrior, depicting traditional armor, sabre, mustache, heroic stance, and Slavic cultural heritage.',
		itemCaption: `Reference to Cossacks Warrior Style.`,
		putImgTitle: true,
	},

	{
		itemSrc: cossackCharakternyk,
		itemAlt:
			'Illustration of a Ukrainian Cossack Charakternyk, combining warrior, shaman, and seer traits, mystical elements, folklore-inspired design, and dynamic Eastern European storytelling.',
		itemCaption: `Reference to Cossack sorcerers, seers, and shamans.`,
		putImgTitle: true,
	},
];
