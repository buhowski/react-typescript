// Video Posters
import witcherPoster from '../../../assets/games/witcherPoster.webp';
import samuraiPoster from '../../../assets/games/samuraiPoster.webp';

// Videos
import ghostOfTsushimaTrailer from '../../../assets/games/videos/ghostOfTsushimaTrailer.mp4';
import witcherTrailer from '../../../assets/games/videos/witcherTrailer.mp4';

// Images
import cossacksPoster from '../../../assets/games/cossacksPoster.webp';
import cossackWarrior from '../../../assets/games/cossackWarrior.webp';
import cossackDrummer from '../../../assets/games/cossackDrummer.webp';
import cossacksEquipment from '../../../assets/games/cossacksEquipment.webp';
import combatHopak from '../../../assets/games/combatHopak.webp';
import cossackCharakternyk from '../../../assets/games/cossackCharakternyk.webp';

export const dataSliderCossacksRPG = [
	{
		itemPoster: witcherPoster,
		itemSrc: witcherTrailer,
		itemAlt: 'Sample 01. For Visual Imagenations. From The Witcher 3: Wild Hunt.',
	},
	{
		itemPoster: samuraiPoster,
		itemSrc: ghostOfTsushimaTrailer,
		itemAlt:
			'Sample 02. For Visual Imagenations. From Ghost of Tsushima (about the last samurai on the island of Tsushima during the first Mongol invasion of Japan).',
	},
	{
		itemSrc: cossacksPoster,
		itemTitle: `03. Ref to Zaporozhian Cossacks writing letter. Where the Cossacks strongly refuse on demand to surrender without a fight and mock the Turkish sultan and his army.`,
	},
	{
		itemSrc: cossackWarrior,
		itemTitle: `04. Ref to Cossacks Style. Warrior master.`,
	},
	{
		itemSrc: combatHopak,
		itemTitle: `05. Ref to Cossacks Combat Dance - Hopak (almost).`,
	},
	{
		itemSrc: cossackCharakternyk,
		itemTitle: `06. Ref to Cossack Characternyk (sorcerer) - was the name of a Cossack in the Zaporozhian Sich who was believed to have magical powers.`,
	},
	{
		itemSrc: cossackDrummer,
		itemTitle: `07. Ref to Cossacks Drummer. When the battle started, he would start beating the kettledrums, and as long as they were heard, the battle was going well.`,
	},
	{
		itemSrc: cossacksEquipment,
		itemTitle: `08. Ref to Cossacks Equipment.`,
	},
];

// Use To Import On Page
export const sliderCossacksRPG = {
	en: [
		{
			sliderContent: dataSliderCossacksRPG,
		},
	],
};
