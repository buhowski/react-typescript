// URLs for separate projects
import { pathToCossacksRPG } from '../../../../components/urlsData';

// Reusable Text Data
import {
	pitch01,
	pitch01TitleEN,
	pitch01FormatEN,
	pitch01GenreEN,
	pitch01LoglineTitleEN,
	pitch01LoglineTextEN,
	pitch01TitleUA,
	pitch01FormatUA,
	pitch01GenreUA,
	pitch01LoglineTitleUA,
	pitch01LoglineTextUA,
} from './dataReuseGames';

export const dataGamesText = {
	// English
	en: [
		// ### 01 - The Sich / Cossacks RPG ###
		{
			// Single Page URL
			filmsPreviewUrl: pathToCossacksRPG,

			pitchNumber: pitch01,
			pitchTitle: pitch01TitleEN,
			pitchInfo: [
				{ key: `Format: `, value: pitch01FormatEN },
				{ key: `Genre: `, value: pitch01GenreEN },
			],

			textBlock: [
				{
					title: pitch01LoglineTitleEN,

					text: pitch01LoglineTextEN,
				},
			],
		},
	],

	// Ukraine
	ua: [
		// ### 01 - The Sich / Cossacks RPG ###
		{
			pitchNumber: pitch01,
			pitchTitle: pitch01TitleUA,
			pitchInfo: [
				{
					key: `Формат: `,
					value: pitch01FormatUA,
				},
				{ key: `Жанр: `, value: pitch01GenreUA },
			],

			textBlock: [
				{
					title: pitch01LoglineTitleUA,
					text: pitch01LoglineTextUA,
				},
			],
		},
	],

	// rusian
	ru: [],
};
