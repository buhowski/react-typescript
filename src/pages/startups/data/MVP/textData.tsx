import { lastWordsEn, lastWordsUa, lastWordsRu } from '../lastWords';

// Articles Page text
export const articlesTextData = [
	// ############## rusian ##############
	{
		section: [
			{
				pitchInfo: [
					{
						key: `Status: `,
						value: `Comming soon ...`,
					},
				],
			},
			{
				title: `Новая журналистика`,
				text: [
					`Современное повествование свежего дыхания, журналистика, как отдельный вид искусства, различные мнения, правда и грязный реализм. Своеобразная подача информации без цензуры – прямая, саркастичная с характером стиля письменности повседневного языка, честность и простота в описании жизни.`,

					`Гонзо-журналистика – ведение сюжетных дневников от первого лица или группы лиц, включаясь в события, становясь частью истории, непредсказуемый и экспериментальный стиль. Нырять в самое пекло проблемы, изучая вопрос изнутри или создавать определенные условия для его появления. Темы связанные с современной культурой и социальными проблемами.`,
				],
			},
		],

		// Last words
		lastWords: lastWordsRu,
	},

	// ############## English ##############
	{
		section: [
			{
				pitchInfo: [
					{
						key: `Status: `,
						value: `Comming soon ...`,
					},
				],
			},
			{
				title: `New journalism`,
				text2: [
					`A modern narrative of fresh breath, journalism as a separate form of art, different opinions, truth and dirty realism. A unique presentation of information without censorship – direct, sarcastic, with a character of everyday language writing style, honesty, and simplicity in describing life.`,

					`Gonzo journalism – making story diaries from the first person or group of people, immersing oneself in events, becoming part of the history, an unpredictable and experimental style. Diving into the heart of the problem, studying it from inside, or creating specific conditions for its appearance. Subjects dealing with modern culture and social problems.`,
				],
			},
		],

		// Last words
		lastWords: lastWordsEn,
	},

	// ############## Ukraine ##############
	{
		section: [
			{
				pitchInfo: [
					{
						key: `Status: `,
						value: `Comming soon ...`,
					},
				],
			},
			{
				title: `Нова журналістика`,
				text2: [
					`Сучасний наратив свіжого подиху, журналістика, як окремий вид мистецтва, різноманітні міркування, правда чистої води та брудний реалізм. Своєрідна подача інформації без цензури – пряма, саркастична, з характером стилю писемності повсякденної мови, чесність і простота в описі життя.`,

					`Гонзо-журналістика – ведення сюжетних щоденників від першої особи чи групи лиць, включаючись у події, стаючи частиною історії, непередбачуваний і експериментальний стиль. Пірнати в саме пекло проблеми, вивчаючи питання зсередини, або створювати певні умови для його появи. Теми пов'язані з сучасною культурою та соціальними проблемами.`,
				],
			},
		],

		// Last words
		lastWords: lastWordsUa,
	},
];
