import { TextLink } from '../../PageStructure/IdeaElements';
import { lastWordsEn, lastWordsUa, lastWordsRu } from '../lastWords';

// Film Industry Page text
export const filmsHeadlineData = [];

export const filmsTextData = [
	// ############## rusian ##############
	{
		section: [],

		// Last words
		lastWords: lastWordsRu,
	},
	// ############## English ##############
	{
		section: [
			{
				// pitchNumber: `Pitch 01`,
				pitchTitle: `European Ukrainians`,
				pitchInfo: [
					{ key: `Format: `, value: `Sarcastic-ironic sitcom for streaming platforms` },
					{ key: `Genre: `, value: `Comedy, Drama, Dark Humor` },
					{ key: `Duration: `, value: `20-40 minutes episode` },
					{ key: `Audience: `, value: `Teens, Adults` },
				],
				loglineTitle: `Logline`,
				loglineText: `A group of young people challenge the absurd realities of the system on their path to self-development. With self-irony and dark humor, they navigate the world around them to avoid going crazy. Thanks to their friendship and support, they try to find their place in society, constantly getting into comedic situations.`,
			},

			{
				title: `Overview`,
				text: [
					<>
						The concept of the series is a hilarious mix inspired by shows like “Trailer
						Park Boys” (
						<TextLink
							linkHref='https://www.imdb.com/title/tt0290988/'
							linkName={`IMDB`}
						/>
						), "It's Always Sunny in Philadelphia" (examples 01-03 in slider, or{' '}
						<TextLink
							linkHref='https://www.imdb.com/title/tt0472954/'
							linkName={`IMDB`}
						/>
						), "Broad City" (example 04 in slider, or{' '}
						<TextLink
							linkHref='https://www.imdb.com/title/tt2578560/'
							linkName={`IMDB`}
						/>
						), and the "New Kids Turbo" movie (example 05 in slider, or{' '}
						<TextLink
							linkHref='https://www.imdb.com/title/tt1648112/'
							linkName={`IMDB`}
						/>
						).
					</>,
					<>
						The videos are provided for better understanding. I want to use it in a
						Ukrainian way, a close similar style of presentation, character
						temperaments, dynamic style of comedic situations, and unpredictability of
						events. The main focus is on authenticity, allowing the main characters to
						play themselves or characters close to their spirits.
					</>,
					<>
						The idea of the series uses humor and satire to sharply, ironically, and at
						the same time insightfully reflect the shortcomings and achievements of
						Ukraine on the path to European integration. It will also showcase
						stereotypes and cultural peculiarities of each European country through the
						prism of Ukrainian reality.
					</>,
					<>
						The viewer will discover the reality of Ukrainian life – from the depths of
						the countryside to the pulsating heart of the capital. This is a series for
						people who are not afraid to laugh at problems, but at the same time want
						their voices to be heard.
					</>,
				],
				subtitle: `Plot`,
				list: [
					`Topical issues that are close to the young audience.`,

					`The main characters are ordinary people of different generations who are constantly struggling with financial difficulties, but who are trying their best to find their way in the world of work and relationships.`,

					`Each episode is a new adventure in the lives of the main characters, in which they face various problems and challenges of society, such as corruption, lack of culture, gender inequality, outdated views, violence, addiction, unemployment, and so on.`,

					`The characters' egocentric, hysterical, and anxious views and judgments often lead them into trouble, creating a myriad of uncomfortable situations that usually only get worse before they get better.`,

					`The goal is to show reality without censorship, with soulful, and sometimes black humor.`,

					`Important for the series to be sincere.`,

					`It should encourage people to reflect on the problems of Ukrainian society, highlighting painful topics through humor.`,
				],
			},

			{
				title: `Characters`,
				text: `Age range 21-30 years. Strangers meet each other in certain circumstances. The situation leads them to further friendship.`,
				character01Title: `Character 01. Male:`,
				charackter01List: [
					`Fond of alcohol, always carries a thermos (or a glass or goblet) with self-made cocktails.`,

					`Knows how to control himself and not lose control of the situation.`,

					`Kind, stylish, positive, with a writer's mindset and good use of swearing.`,

					`Master of dude quotes and silly toasts (sarcasm and self-irony).`,

					`Favorite drink: port wine.`,
				],

				character02Title: `Character 02. Male:`,
				charackter02List: [
					`Fond of smoking marijuana, well-read,  interested in science fiction and psychology.`,

					`Often "spaces out" or loses touch with reality, vividly imagining the development of events (example 06 in slider).`,
				],

				character03Title: `Character 03. Male:`,
				charackter03List: [
					`Tries to lead a healthy lifestyle without bad habits, but understands that there is no healthy lifestyle – only common sense.`,

					`Enjoys sports, non-stereotypical.`,

					`Treats everything with understanding and does not judge.`,

					`Strong character and self-control.`,
				],

				character04Title: `Character 04. Female:`,
				charackter04List: [
					`Energetic, optimistic-emotional, creative personality, loves art.`,

					`Has a sharp tongue and enjoys dark humor, often jokes inappropriately.`,
				],

				character05Title: `Character 05. Female:`,
				charackter05List: [
					`Calm, thoughtful, with a diplomatic mindset, strategist.`,

					`Knows how to find common ground with people, although she hates them in general.`,

					`Values friendship and is always ready to help.`,
				],

				character06Title: `Wildcard Character (age 50+):`,
				charackter06List: [
					`Cunning, cynical, with a sharp mind and sarcastic sense of humor, orator.`,

					`Has rich life experience. `,

					`Knows how to find a way out of any situation, but "too old for this shit".`,

					`Values freedom and independence, a lone wolf, but works in a team when necessary.`,
				],
			},
			{
				title: `Conclusion`,
				text: [
					`I believe that with a new approach to implementation and a more professional attitude to the emotional transmission of the picture, "European Ukrainians" will become a successful project and a calling card on the world television market, attracting investments for the development of future ideas. There are an endless number of ideas and a lot to work with, but resources are needed.`,

					`Therefore, I ask you to support this unique project, which will change your view of modern Ukrainian life and prove how much potential is hidden behind the barriers of the system.`,
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
				// pitchNumber: `Pitch 01`,
				pitchTitle: `Європейські Українці`,
				pitchInfo: [
					{
						key: `Формат: `,
						value: `Саркастично-іронічний ситком для стрімінгових платформ`,
					},
					{ key: `Жанр: `, value: `Комедія, Драма, Чорний гумор` },
					{ key: `Тривалість: `, value: `20-40 хвилин серія` },
					{ key: `Аудиторія: `, value: `Підлітки, Дорослі` },
				],
				loglineTitle: `Логлайн`,
				loglineText: `Група молодих людей кидає виклик абсурдним реаліям системи на шляху до саморозвитку. З самоіронією та чорним гумором вони сприймають навколишній світ, щоб не зійти з розуму. Завдяки дружбі і підтримці вони намагаються знайти своє місце в суспільстві, потрапляючи постійно в казусні ситуації.`,
			},

			{
				title: `Огляд`,
				text: [
					<>
						Концепція серіалу – це веселий мікс, навіяний серіалами “Trailer Park Boys”
						(
						<TextLink
							linkHref='https://www.imdb.com/title/tt0290988/'
							linkName={`IMDB`}
						/>
						), "It's Always Sunny in Philadelphia" (приклади 01-03 у слайдері, або{' '}
						<TextLink
							linkHref='https://www.imdb.com/title/tt0472954/'
							linkName={`IMDB`}
						/>
						), "Broad City" (приклад 04 у слайдері, або{' '}
						<TextLink
							linkHref='https://www.imdb.com/title/tt2578560/'
							linkName={`IMDB`}
						/>
						), та фільмом "New Kids Turbo" (приклад 05 у слайдері, або{' '}
						<TextLink
							linkHref='https://www.imdb.com/title/tt1648112/'
							linkName={`IMDB`}
						/>
						).
					</>,
					<>
						Відео надані для кращого уявлення. Хочу використати це під Український лад,
						схожу манеру подачі, темпераменти героїв, динамічний стиль комічних ситуацій
						і непередбачуваність подій. Головне – це відчуття справжності, щоб головні
						герої відігравали самих себе, або близьке їм по духу.
					</>,
					<>
						Ідея серіалу використовує гумор та сатиру, щоб гостро, з іронією, та
						водночас проникливо відобразити недоліки та досягнення України на шляху до
						європейської інтеграції. Також будуть показані стереотипи та культурні
						особливості кожної європейської країни через призму української реальності.
					</>,
					<>
						Перед глядачем відкривається реальність українського життя – від глибин
						сільської місцевості до пульсуючого серця столиці. Це серіал для людей, які
						не бояться сміятися над проблемами, але при цьому хочуть, щоб їхні голоси
						були почуті.
					</>,
				],
				subtitle: `Сюжет`,
				list: [
					`Актуальні теми, які близькі молодій аудиторії.`,

					`Головні герої – це звичайні люди різних поколінь, у яких грошовий дефіцит – їх постійний супутник, але які з усіх сил намагаються знайти свій шлях у світі роботи та стосунків.`,

					`Кожна серія – це нова пригода з життя головних героїв, в якій вони стикаються з різними проблемами та викликами суспільства, як корупція, безкультур'я, гендерна нерівність, застаріле бачення, насилля, залежності, безробіття, і далі в такому дусі.`,

					`Егоцентричні, істеричні та тривожні погляди та судження часто призводять героїв до неприємностей, створюючи безліч незручних ситуацій, які зазвичай лише погіршуються, перш ніж стануть кращими.`,

					`Показати реальність без цензури, з душевним гумором.`,

					`Важливо, щоб серіал був щирим.`,

					`Він має спонукати людей до роздумів над проблемами українського суспільства, освітлюючи болючі теми через гумор.`,
				],
			},

			{
				title: `Персонажі`,
				text: `Віковий діапазон 21-30 років. Незнайомці стикаються при певних обставинах. Ситуація зводить їх до подальшої дружби.`,

				character01Title: `Персонаж 01. Чоловічий:`,
				charackter01List: [
					`Полюбляє алкоголь, постійно носить з собою термокружку (або бокал чи кубок), попиваючи власно зроблені коктейлі.`,

					`В цілому вміє тримати себе в руках і не втрачати контроль над ситуацією.`,

					`Добрий, стильний, позитивний, письменницький нрав з доречним використанням лайки.`,

					`Мастер пацанських цитат і тупих тостів (сарказм і самоіронія).`,

					`Улюблений напій портвей.`,
				],

				character02Title: `Персонаж 02. Чоловічий:`,
				charackter02List: [
					`Полюбляє курити маріхуану, начитаний, цікавить область наукової фантастики і психологія.`,

					`Часто тупить чи вилітає з реальності, яскраво уявляючи  розвиток подій (приклад 06 у слайдері).`,
				],

				character03Title: `Персонаж 03. Чоловічий:`,
				charackter03List: [
					`Намагається вести здоровий спосіб життя, без шкідливих звичок, але сам розуміє що не існує здорового способу життя – лише здоровий глузд.`,

					`Полюбляє займатися спортом, нестереотипний.`,

					`До всього ставиться з розумінням і без осуду.`,

					`Сильний характер і самоконтроль.`,
				],

				character04Title: `Персонаж 04. Жіночий:`,
				charackter04List: [
					`Енергійна, оптимістично-емоційна, творчий характер, любить мистецтво.`,

					`Має гострий язик і полюбляє чорний гумор, часто недоречно жартує.`,
				],

				character05Title: `Персонаж 05. Жіночий:`,
				charackter05List: [
					`Спокійна, розважлива, з дипломатичним складом мислення, стратегиня.`,

					`Вміє знаходити спільну мову з людьми, хоча в цілому їх ненавидить.`,

					`Цінує дружбу і завжди готова прийти на допомогу.`,
				],

				character06Title: `Козирний персонаж (вік 50+ років):`,
				charackter06List: [
					`Хитрий, цинічний, з гострим розумом і саркастичним почуттям гумору, оратор.`,

					`Має багатий життєвий досвід.`,

					`Вміє знаходити вихід з будь-якої ситуації, але "занадто старий для подібного лайна".`,

					`Цінує свободу і незалежність, вовк одинак, але якщо потрібно, то працює в команді.`,
				],
			},
			{
				title: `Висновок`,
				text: [
					`Я вірю, що з новим підходом до реалізації і більш професійним відношенням до передачі емоцій картиною – "Європейські Українці" стане успішним проектом і візитівкою на світовому телевізійному ринку, для подальших інвестицій на розвиток наступних ідей. Бо ідей безмежна кількість, і є з чим працювати, але потрібні ресурси.`,

					`Тому прошу підтримати цей унікальний проект, який змінить ваш погляд на сучасне життя українців і доведе наскільки величезний потенціал прихований за бар'єрами системи.
					`,
				],
			},
		],

		// Last words
		lastWords: lastWordsUa,
	},
];
