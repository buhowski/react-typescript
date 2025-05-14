import { pathToEuropeanUkrainians } from '../../../../components/urlsData';

// Reusable Text Data
const pitch01 = 'Pitch 01. Shows / Series';

export const filmsTextData = {
	// ############## English ##############
	en: [
		// European Ukrainians
		{
			filmsPreviewUrl: pathToEuropeanUkrainians,
			pitchNumber: pitch01,
			pitchTitle: `European Ukrainians`,
			pitchInfo: [
				{ key: `Format: `, value: `Sarcastic-ironic sitcom for streaming platforms` },
				{ key: `Genre: `, value: `Comedy, Drama, Dark Humor` },
			],

			textBlock: [
				{
					title: `Logline`,

					text: `A group of young people challenge the absurd realities of the system on their path to self-development. With self-irony and dark humor, they navigate the world around them to avoid going crazy. Thanks to their friendship and support, they try to find their place in society, constantly getting into comedic situations.`,
				},
			],
		},

		{
			filmsPreviewUrl: pathToEuropeanUkrainians,
			pitchNumber: 'Pitch 02. Shows / Series',
			pitchTitle: `The Corp .!.`,
			pitchInfo: [{ key: `Status: `, value: `Coming soon...` }],

			textBlock: [
				{
					title: `Logline`,

					text: `A group of young people challenge the absurd realities of the system on their path to self-development. With self-irony and dark humor, they navigate the world around them to avoid going crazy. Thanks to their friendship and support, they try to find their place in society, constantly getting into comedic situationsA group of young people challenge the absurd realities of the system on their path to self-development. With self-irony and dark humor, they navigate the world around them to avoid going crazy. Thanks to their friendship and support, they try to find their place in society, constantly getting into comedic situationsA group of young people challenge the absurd realities of the system on their path to self-development. With self-irony and dark humor, they navigate the world around them to avoid going crazy. Thanks to their friendship and support, they try to find their place in society, constantly getting into comedic situationsA group of young people challenge the absurd realities of the system on their path to self-development. With self-irony and dark humor, they navigate the world around them to avoid going crazy. Thanks to their friendship and support, they try to find their place in society, constantly getting into comedic situationsA group of young people challenge the absurd realities of the system on their path to self-development. With self-irony and dark humor, they navigate the world around them to avoid going crazy. Thanks to their friendship and support, they try to find their place in society, constantly getting into comedic situations.`,
				},
			],
		},
	],

	// ############## Ukraine ##############
	ua: [
		{
			pitchNumber: pitch01,
			pitchTitle: `Європейські Українці`,
			pitchInfo: [
				{
					key: `Формат: `,
					value: `Саркастично-іронічний ситком для стрімінгових платформ`,
				},
				{ key: `Жанр: `, value: `Комедія, Драма, Чорний гумор` },
			],

			textBlock: [
				{
					title: `Логлайн`,
					text: `Група молодих людей кидає виклик абсурдним реаліям системи на шляху до саморозвитку. З самоіронією та чорним гумором вони сприймають навколишній світ, щоб не зійти з розуму. Завдяки дружбі і підтримці вони намагаються знайти своє місце в суспільстві, потрапляючи постійно в казусні ситуації.`,
				},
			],
		},
	],

	// ############## rusian ##############
	ru: [
		{
			pitchNumber: pitch01,

			textBlock: [],
		},
	],
};
