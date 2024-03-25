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
import cossackCharakternyk from '../../media/games/cossackCharakternyk.webp';

const defaultAlt = `Games, Gaming startups, top games, ukraine production game industry, the witcher wild hunt, cossacs, козаки, запорозька січ, козаки рпг, the sich, gogol, микола гоголь, козацтво, ігрова індустрія україна, запорозьке військо, The Cossacks writing letter to Turkish Sultan Sketch, Reply of the Zaporozhian Cossacks, Cossack-sorcerer a Zaporizhian Cossack attributed with magical powers, Cossacks Drummer, "When the battle started, he would start beating the kettledrums, and as long as they were heard, the battle was going well, Cossacks Combat Hopak, Ghost of Tsushima Trailer, about samurai and Japanese history, Cossacks Equipment`;

export const dataSlider = [
	{
		itemPoster: witcherPoster,
		itemSrc: witcherTrailer,
		itemAlt:
			'Sample 01. The Witcher 3: Wild Hunt (is based on the book series of the same name by Polish writer). For Visual Imagenations.',
	},
	{
		itemPoster: samuraiPoster,
		itemSrc: ghostOfTsushimaTrailer,
		itemAlt:
			'Sample 02. Ghost of Tsushima (about the last samurai on the island of Tsushima during the first Mongol invasion of Japan in 1274). For Visual Imagenations.',
	},
	{
		itemSrc: cossacksPoster,
		itemAlt: defaultAlt,
		itemTitle: `Zaporozhian Cossacks writing letter. Where the Cossacks strongly refuse on demand to surrender without a fight and mock the Turkish sultan and his army.`,
	},
	{
		itemSrc: cossackWarrior,
		itemAlt: defaultAlt,
		itemTitle: `Cossacks Style. Warrior master.`,
	},
	{
		itemSrc: combatHopak,
		itemAlt: defaultAlt,
		itemTitle: `Cossacks Combat Dance - Hopak.`,
	},
	{
		itemSrc: cossackCharakternyk,
		itemAlt: defaultAlt,
		itemTitle: `Cossack Characternyk (sorcerer) - was the name of a Cossack in the Zaporozhian Sich who was believed to have magical powers.`,
	},
	{
		itemSrc: cossackDrummer,
		itemAlt: defaultAlt,
		itemTitle: `Cossacks Drummer. When the battle started, he would start beating the kettledrums, and as long as they were heard, the battle was going well.`,
	},
	{
		itemSrc: cossacksEquipment,
		itemAlt: defaultAlt,
		itemTitle: `Cossacks Equipment.`,
	},
];
