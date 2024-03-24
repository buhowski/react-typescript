import witcherPoster from '../../media/games/witcherPoster.webp';
import cossacksPoster from '../../media/games/cossacksPoster.webp';
import samuraiPoster from '../../media/games/samuraiPoster.webp';
import cossackWarrior from '../../media/games/cossackWarrior.jpg';
import cossackDrummer from '../../media/games/cossackDrummer.png';
import cossacksEquipment from '../../media/games/cossacksEquipment.jpg';

const defaultAlt = `Games, Gaming startups, top games, ukraine production game industry, the witcher wild hunt, cossacs, козаки, запорозька січ, козаки рпг, the sich, gogol, микола гоголь, козацтво, ігрова індустрія україна, запорозьке військо, The Cossacks writing letter to Turkish Sultan Sketch, Reply of the Zaporozhian Cossacks`;

export const dataSlider = [
	{
		itemPoster: witcherPoster,
		itemSrc:
			'https://cdn.cloudflare.steamstatic.com/steam/apps/256927226/movie_max_vp9.webm?t=1674829926',
		itemAlt: 'Sample 01. For Visual Imagenations. The Witcher 3: Wild Hunt Trailer.',
	},
	{
		itemPoster: samuraiPoster,
		itemSrc:
			'https://cdn.cloudflare.steamstatic.com/steam/apps/257004078/movie_max_vp9.webm?t=1709740583',
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
		itemSrc: cossacksEquipment,
		itemAlt: defaultAlt,
		itemTitle: `Cossacks Equipment.`,
	},
];
