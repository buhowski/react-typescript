// URLs for separate projects
import { pathToEuropeanUkrainians, pathToTheCorp } from '../../../../components/urlsData';

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
	pitch02,
	pitch02TitleEN,
	pitch02FormatEN,
	pitch02LoglineTitleEN,
	pitch02LoglineTextEN,
} from './dataReuseFilms';

export const dataFilmsText = {
	// English
	en: [
		// ###### 01 - European Ukrainians ######
		{
			filmsPreviewUrl: pathToEuropeanUkrainians,

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

		// ###### 02 - The Corp .!. ######
		{
			filmsPreviewUrl: pathToTheCorp,

			pitchNumber: pitch02,
			pitchTitle: pitch02TitleEN,
			pitchInfo: [
				{ key: `Status: `, value: pitch02FormatEN },
				// { key: `Genre: `, value: pitch02GenreEN },
			],

			textBlock: [
				{
					title: pitch02LoglineTitleEN,

					text: pitch02LoglineTextEN,
				},
			],
		},
	],

	// Ukraine
	ua: [
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

		// ###### The Corp .!. ######
		{
			pitchNumber: pitch02,
			pitchTitle: pitch02TitleEN,
			pitchInfo: [
				{ key: `Status: `, value: pitch02FormatEN },
				// { key: `Genre: `, value: pitch02GenreEN },
			],

			textBlock: [
				{
					title: pitch02LoglineTitleEN,

					text: pitch02LoglineTextEN,
				},
			],
		},
	],

	// rusian
	ru: [],
};
