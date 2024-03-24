// Video Posters
import witcherPoster from '../../media/games/witcherPoster.webp';
import samuraiPoster from '../../media/games/samuraiPoster.webp';

// Videos
import ghostOfTsushimaTrailer from '../../media/games/videos/ghostOfTsushimaTrailer.webm';
import witcherTrailer from '../../media/games/videos/witcherTrailer.webm';

// Images
import cossacksPoster from '../../media/games/cossacksPoster.webp';
import cossackWarrior from '../../media/games/cossackWarrior.webp';
import cossackDrummer from '../../media/games/cossackDrummer.webp';
import cossacksEquipment from '../../media/games/cossacksEquipment.webp';
import combatHopak from '../../media/games/combatHopak.webp';

const defaultAlt = `Games, Gaming startups, top games, ukraine production game industry, the witcher wild hunt, cossacs, козаки, запорозька січ, козаки рпг, the sich, gogol, микола гоголь, козацтво, ігрова індустрія україна, запорозьке військо, The Cossacks writing letter to Turkish Sultan Sketch, Reply of the Zaporozhian Cossacks`;

export const dataSlider = [
	{
		itemPoster: witcherPoster,
		itemSrc: witcherTrailer,
		itemAlt: 'Sample 01. For Visual Imagenations. The Witcher 3: Wild Hunt Trailer.',
	},
	{
		itemPoster: samuraiPoster,
		itemSrc: ghostOfTsushimaTrailer,
		itemAlt:
			'Sample 02. For Visual Imagenations. Ghost of Tsushima Trailer (about samurai and Japanese history)',
	},
	{
		itemSrc: cossacksPoster,
		itemAlt: defaultAlt,
		itemTitle: `Zaporozhian Cossacks Writing Manifesto. Painting.`,
	},
	{
		itemSrc: cossackWarrior,
		itemAlt: defaultAlt,
		itemTitle: `Cossacks Style.`,
	},
	{
		itemSrc: cossackDrummer,
		itemAlt: defaultAlt,
		itemTitle: `Cossacks Drummer. "When the battle started, he would start beating the kettledrums, and as long as they were heard, the battle was going well.`,
	},
	{
		itemSrc: combatHopak,
		itemAlt: defaultAlt,
		itemTitle: `Cossacks Combat Hopak.`,
	},
	{
		itemSrc: cossacksEquipment,
		itemAlt: defaultAlt,
		itemTitle: `Cossacks Equipment.`,
	},
];
