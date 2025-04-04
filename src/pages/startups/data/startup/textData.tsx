import { TextLink } from '../../PageStructure/IdeaElements';
import { lastWordsRu, lastWordsEn, lastWordsUa } from '../lastWords';
import {
	pathToStartupMVP,
	pathToStartupFilms,
	pathToStartupGames,
} from '../../../../components/urlsData';
// Texts for startup page / Main Startup Presentation

const mainTitle = 'Presentation';

export const startupTextData = {
	// ############## RUSIAN ##############
	ru: [
		{
			pitchTitle: mainTitle,

			textBlock: [
				{
					title: `Предисловие`,
					text: [
						`У меня есть масштабное видение всей картины – создание огромной корпорации, которая стремится улучшить развитие сфер, которые в этом нуждаются. Пазлы этой картины – это мои разнообразные самостоятельные проекты, которые я хочу монетизировать, а прибыль вкладывать в создание собственных технологий, открывая двери всем, кто стремится к аналогичному, или же ищу тех, кто поможет и откроет двери для моих идей, или объединиться для совместного мозгового штурма.`,

						`Все презентации отдельных проектов будут доступны в навигации, а логика создания целостной картины доступна ниже.`,
					],
				},

				{
					title: `Цель`,
					text: `Я разработал стратегии и сценарий проекта: "Как создать информационный медиа-журнал в Украине и превратить его в компанию производства собственных технологий" и ищу инвестиции для реализации, или возможность интегрировать свои идеи с вашей помощью и найти единомышленников и партнеров для сотрудничества, чтобы творить будущее вместе в выбранных сферах:`,

					listBlock: [
						{
							text: [
								`независимое медиа нового поколения,`,

								`передовое кино и игровая индустрия,`,

								`виртуальная реальность,`,

								`IT сектор, который охватывает: блокчейн, искусственный интеллект, нейротехнологии и робототехнику.`,
							],
						},
					],
				},

				{
					text: `Гибкость проекта позволяет добавлять любые виды деятельности на ваше рассмотрение.`,
				},

				{
					title: `Описание`,
					text: [
						`Моя идея начинается с создания собственной территории свободного интернета. Делается новый формат журнала и социальной сети, как мобильное приложение и веб-платформа, который можно представить на примерах флипборда и фейсбука. Концепция собственного журнала перспективна из-за возможности самостоятельно развиваться по собственному курсу и адаптироваться к новым потребностям и тенденциям в информационном поле.`,

						`Фокус делается на подаче информации и производстве кино и игровой продукции. Для этого формируется профессиональная команда, которая занимается ведением журнала и созданием контента, развивая платформу поэтапно. Ведь правильный маркетинг залог успеха, а качественный продукт – подтверждение.`,
					],
					listBlock: [
						{
							title: `Необходимые функции:`,
							text: [
								`Журнал – для стратегических целей, чтобы занять место ведущего медиа в стране. Необходим для рекламы, саморекламы и агрессивного маркетинга и видео дневника.`,

								`Соцсеть – для объединения людей с похожим взглядом и вкусами.`,

								`Система донатов – для привлечения инвестиций на развитие и монетизацию контента.`,

								`Форум имиджборд – чтобы обмениваться опытом и для сохранения готовых решений на все случаи жизни.`,

								`Платформа как ресурс – для распространения собственного производства кино, игровой индустрии и любых других видов деятельности.`,
							],
						},
					],
				},

				{
					title: `Конкретика`,
					text: [
						<>
							Ведения журнала и шаги – этапы стратегии – мои отдельные проекты, примеры будут
							появляться здесь: <TextLink linkHref={pathToStartupMVP} linkName={`MVP`} />.
							Разрабатывается контент специально под отдельную целевую аудиторию, поднимаются
							имеющиеся проблемы, предоставляются наглядные примеры решений, привлекается аудитории.
						</>,
						<>
							Ключевые продукты индустрии – этапы производства – мои отдельные сценарии, презентации
							проектов здесь: <TextLink linkHref={pathToStartupFilms} linkName={`Кино`} />,{' '}
							<TextLink linkHref={pathToStartupGames} linkName={`Видеоигры`} />. Это, для начала,
							позволит популяризироваться для Украинской аудитории и впоследствии выйти на
							международный рынок с презентациями будущих проектов для мировых кинофестивалей и
							игровых выставок.
						</>,
					],

					listBlock: [
						{
							title: `Что я могу дать:`,
							text: [
								`Статьи, которые предлагают альтернативную стратегию развития в Украине и за ее пределами. Темы связанные с современной культурой и социальными проблемами с вариантами их решений. Юмор и гонзо-журналистику. В результате – конкурентоспособное медиа.`,

								`Пространство без цензуры, для объединения людей, которые хотят менять будущее в выбранных сферах и место, на которое отсутствует любое давление бюрократии, олигархов или государственных структур.`,

								`Маркетинговые подходы для массового распространения.`,

								`Делать кино, игры – для продажи и мировой популяризации культуры и искусства, и удовлетворения интересов потребителей.`,

								`Производство ключевых продуктов и ведение журнала должно подтвердить все заявленные слова в течение одного года (этап оценки возможностей).`,

								`Затем IT сектор и автоматизация, оценивая потребности и первоочередные необходимости. Все технологии можно будет интегрировать в данный журнал (причина необходимости собственного места).`,

								`И дальше только больше!`,
							],
						},

						{
							title: `Этапы и потребности (MVP):`,
							text: [
								`Фундамент – стартовый капитал на создание команды и производство ключевых продуктов индустрии.`,

								`Стратегия развития – укомплектованный журнал с форумом или интеграция в существующую площадку.`,

								`Запуск и оценка эффективности – доработка уязвимых сторон, маркетинговая стратегия и рекламная кампания.`,
							],
						},
					],
				},

				{
					text: `Гибкость моих идей позволяет интегрировать их в любые существующие проекты, как модификацию, отдельный проект или масштабирование компании. Поэтому если вы разделяете схожие интересы и открыты к сотрудничеству, то я готов к обсуждению. Есть виденье, и теоретически оно работает. Для практики нужны ресурсы.`,
				},

				{
					title: `Суммируя`,
					text: [
						`Это сложный, многофункциональный и многоэтапный проект, он бросает вызов, но он возможен! Поэтому для развития я выбрал именно журнал – это мощный инструмент массовой информации и влияния, а в Украине с адекватным масс медиа очевидные проблемы (отсутствует популярное и независимое, или популярное и качественное, или близкое молодому поколению), поэтому занять эту нишу я не вижу препятствий.`,
					],

					listBlock: [
						{
							title: `На пальцах:`,
							text: [
								`Журнал – лицо компании. Популярный журнал – голос большинства. Мега популярный журнал – диктует правила развития, а не подстраивается под запрет эволюционировать (есть стратегия).`,

								`Производство крутого кино и игр – прибыль (есть сценарии).`,

								`Прибыль вкладывать в свои IT технологии (блокчейн, AI, нейротехнологии и робототехнику) – еще больше прибыли (есть идеи).`,

								`Победа!`,

								`Риски: в критическом случае может получиться только популярный журнал с возможностью продавать рекламу, с системой донатов для инвестиций и с производством кино-игровой продукции для продажи другим компаниям. Фундамент сохраняется и развитие возможно даже в критических условиях.`,
							],
						},
						{
							title: `По технологиям (интересует):`,
							text: [
								`Блокчейн – криптовалютные операции на платформе, собственная криптовалюта, безопасность.`,

								`AI – личный помощник в журнале (помогает в работе, учебе, развлечениях), без ограничений (которые блокируют качество), кастомизируется.`,

								`Нейротехнологии – изучение мозга человека и интеграция его с компьютерными технологиями, виртуальная реальность.`,

								`Робототехника – автоматизация сложных рабочих процессов, протезирование, собственные спутники.`,
							],
						},
					],
				},

				{
					title: `Заключение`,
					text: `В целом моя перспектива сфокусирована на развитие масштаба. Для создания отделенного от государства места со своей независимой экосистемой. С коллаборацией разных сфер деятельности, от инновационных технологий до креативного мышления. И если собрать все лучшее в одном месте, и организовать профессиональный коллектив критически мыслящих идейников и энтузиастов, то скачок эволюционного прогресса произойдет сам собой. Потому что не существует ничего невозможного, только неправильный подход!`,
				},
			],

			lastWords: lastWordsRu,
		},
	],

	// ############## ENGLISH ##############
	en: [
		{
			pitchTitle: mainTitle,

			textBlock: [
				{
					title: `Preface`,
					text: [
						`I have a huge vision of the entire picture – creating a large corporation that strives to improve the development of areas that need it. The pieces of this picture are my various independent projects, which I want to monetize and invest the profits into creating its own technologies, opening doors for everyone who seeks the same, or finding those who will help and open doors for my ideas, or to unite for joint brainstorming.`,

						`All presentations of individual projects will be available in the navigation, and the logic of creating a complete picture is available below.`,
					],
				},

				{
					title: `Mission`,
					text: `I've created strategies and project scenario: "How to create an information media magazine in Ukraine and transform it into a company producing its own technologies" and I am seeking investments for its implementation, or the opportunity to integrate my ideas with your help and find like-minded individuals and partners for cooperation to create the future together in selected areas:`,

					listBlock: [
						{
							text: [
								`independent media of the new generation,`,

								`leading movie and gaming industry,`,

								`virtual reality,`,

								`IT sector, which includes: blockchain, AI, neurotechnology and robotics.`,
							],
						},
					],
				},

				{
					text: `The project's flexibility allows you to add any type of activity for your consideration.`,
				},

				{
					title: `Description`,
					text: [
						`My idea begins with creating its own free internet territory. It takes the format of a magazine and social network, as a mobile application and web platform, which can be imagined on the examples of flipboard and facebook. The concept of its own magazine is promising because of the possibility to develop independently on its own course and adapt to new needs and trends in the information field.`,

						`The focus is on information delivery and the production of cinema and gaming products. To achieve this, a professional team is formed to manage the magazine and create content, gradually developing the platform. Because proper marketing is the key to success, and a quality product is its confirmation.`,
					],
					listBlock: [
						{
							title: `Required functions:`,
							text: [
								`Magazine – for strategic purposes, to occupy the place of the leading media in the country. Necessary for advertising, self-promotion, aggressive marketing, and video diary.`,

								`Social network – to unite people with similar views and tastes.`,

								`Donation system – to attract investments for development and content monetization.`,

								`Imageboard forum – for exchanging experiences and preserving ready solutions for all life cases.`,

								`Platform as a resource – for distributing own production of films, gaming industry, and any other activities.`,
							],
						},
					],
				},

				{
					title: `Details`,
					text: [
						<>
							Magazine management and steps – the strategy stages – my separate projects, examples
							will appear here: <TextLink linkHref={pathToStartupMVP} linkName={`MVP`} />. Content
							is developed specifically for the individual target audience, existing problems are
							raised, clear examples of solutions are provided, and the audience is engaged.
						</>,
						<>
							Key industry products – the production stages – my individual scripts, project
							presentations are here: <TextLink linkHref={pathToStartupFilms} linkName={`Films`} />,{' '}
							<TextLink linkHref={pathToStartupGames} linkName={`Video Games`} />. This, initially,
							will allow popularizing for the Ukrainian audience and then enter the international
							market with presentations of future projects for global film festivals and game expos.
						</>,
					],

					listBlock: [
						{
							title: `What I can offer:`,
							text: [
								`Articles offering an alternative development strategy in Ukraine and beyond. Topics related to modern culture and social issues with options for solutions. Humor and gonzo journalism. As a result – competitive media.`,

								`Uncensored space for uniting people who want to change the future in selected areas and a place free from any pressure of bureaucracy, oligarchs, or government structures.`,

								`Marketing approaches for mass distribution.`,

								`Making films, games – for sales and global popularization of culture and art, and meeting consumer interests.`,

								`Production of key products and magazine management should confirm all the stated words within one year (opportunity assessment stage).`,

								`Then the IT sector and automation, assessing needs and priorities. All technologies can be integrated into this magazine (the reason for the need of its own place).`,

								`And then only more!`,
							],
						},
						{
							title: `Stages and needs (MVP):`,
							text: [
								`Foundation – initial capital for team creation and production of key industry products.`,

								`Development strategy – staffed magazine with a forum or integration into an existing platform.`,

								`Launch and effectiveness evaluation – finalization of vulnerabilities, marketing strategy, and advertising campaign.`,
							],
						},
					],
				},

				{
					text: `The flexibility of my ideas allows integrating them into any existing projects as modification, separate project, or company scaling. So, if you share similar interests and are open to cooperation, I'm ready to discuss. There is a vision, and theoretically, it works. For practice, I need resources.`,
				},

				{
					title: `Summarizing`,
					text: `This is a complex, multifunctional, and multi-stage project, it's challenging, but it is possible! That's why I chose a magazine for development – it is a powerful tool of mass information and influence, and in Ukraine, with adequate mass media, there are obvious problems (there is no popular and independent, or popular and quality, or something close to the young generation), so I see no obstacles to occupy this niche.`,

					listBlock: [
						{
							title: `To put it simply:`,
							text: [
								`Magazine – the face of the company. A popular magazine – the voice of the majority. A mega-popular magazine – dictates the rules of development, rather than adapting to the ban on evolution (there is a strategy).`,

								`Production of cool movies and games – profit (there are scenarios).`,

								`Investing profit in our IT technologies (blockchain, AI, neurotechnology and robotics) – even more profit (there are ideas).`,

								`Win!`,

								`Risks: In a critical case, it may only result in a popular magazine with the ability to sell advertisements, with a donation system for investments, and with production of cinema-gaming products for sale to other companies. The foundation is preserved, and development is possible even in critical conditions.`,
							],
						},

						{
							title: `Technologies (interested in):`,
							text: [
								`Blockchain – cryptocurrency operations on the platform, own cryptocurrency, security.`,

								`AI – personal assistant in the magazine (helps in work, study, entertainment), without restrictions (that block high-quality), customizable.`,

								`Neurotechnology – study the human brain and integrate it with computer technologies, virtual reality.`,

								`Robotics – automation of complex workflows, prosthetics, own satellites.`,
							],
						},
					],
				},

				{
					title: `Conclusion`,
					text: `Overall, my perspective is focused on the development of scale. To create a state-independent place with its independent ecosystem. With collaboration of various fields, from innovative technologies to creative minds. And if we gather all the best in one place and organize a professional team of critical thinkers and enthusiasts, evolutionary progress will happen naturally. Because nothing is impossible, only the wrong approach!`,
				},
			],

			lastWords: lastWordsEn,
		},
	],
	// ############## UKRAINE ##############
	ua: [
		{
			pitchTitle: mainTitle,

			textBlock: [
				{
					title: `Передмова`,
					text: [
						`Я маю масштабне бачення цілої картини – створення величезної корпорації, яка прагне покращити розвиток сфер, які цього потребують. Пазли цієї картини – це мої різноманітні самостійні проекти, які я хочу монетизувати, а прибуток вкладати у створення власних технологій, відкриваючи двері всім, хто прагне аналогічного, або ж шукаю тих, хто допоможе і відкриє двері для моїх ідей, чи об’єднатися для спільного мозкового штурму.`,

						`Всі презентації окремих проектів будуть доступними в навігації, а логіка створення цілісної картини доступна нижче.`,
					],
				},

				{
					title: `Ціль`,
					text: `Я розробив стратегії та сценарій проекту: "Як створити інформаційний медіа-журнал в Україні і перетворити його на компанію виробництва власних технологій" і шукаю інвестиції для реалізації, або можливість інтегрувати свої ідеї з вашою допомогою та знайти однодумців і партнерів для співпраці, щоб творити майбутнє разом у вибраних сферах:`,

					listBlock: [
						{
							text: [
								`незалежне медіа нового покоління,`,

								`провідне кіно та ігрова індустрія,`,

								`віртуальна реальність,`,

								`IT сектор, який охоплює: блокчейн, штучний інтелект, нейротехнології та робототехніку.`,
							],
						},
					],
				},

				{ text: `Гнучкість проекту дозволяє додавати будь-які види діяльності на ваш розгляд.` },

				{
					title: `Опис`,
					text: [
						`Моя ідея починається зі створення власної території вільного інтернету. Робиться новий формат журналу та соціальної мережі, як мобільний додаток і веб-платформа, який можна уявити на прикладах фліпборда та фейсбука. Концепція власного журналу перспективна через можливість самостійно розвиватись за власним курсом та адаптуватись до нових потреб і тенденцій в інформаційному полі.`,

						`Фокус робиться на подачі інформації та виробництві кіно та ігрової продукції. Для цього формується професійна команда, яка займається веденням журналу та створенням контенту, розвиваючи платформу поетапно. Бо правильний маркетинг запорука успіху, а якісний продукт – підтвердження.`,
					],

					listBlock: [
						{
							title: `Необхідні функції:`,
							text: [
								`Журнал – для стратегічних цілей, щоб зайняти місце провідного медіа в країні. Необхідний для реклами, самореклами та агресивного маркетингу і відео щоденника.`,

								`Соцмережа –  для об'єднання людей зі схожим баченням та смаками.`,

								`Система донатів – для залучення інвестицій на розвиток і монетизацію контенту.`,

								`Форум іміджборд – щоб обмінюватись досвідом та для збереження готових рішень на всі випадки життя.`,

								`Платформа як ресурс – для розповсюдження власного виробництва кіно, ігрової індустрії та будь яких інших видів діяльності.`,
							],
						},
					],
				},

				{
					title: `Конкретика`,
					text: [
						<>
							Ведення журналу та кроки – етапи стратегії – мої окремі проекти, приклади
							з'являтимуться тут: <TextLink linkHref={pathToStartupMVP} linkName={`MVP`} />.
							Розробляється контент спеціально під окрему цільову аудиторію, піднімаються наявні
							проблеми, надаються наглядні приклади рішень, залучається аудиторія.
						</>,
						<>
							Ключові продукти індустрії – етапи виробництва – мої окремі сценарії, презентації
							проектів тут: <TextLink linkHref={pathToStartupFilms} linkName={`Кіно`} />,{' '}
							<TextLink linkHref={pathToStartupGames} linkName={`Відеоігри`} />. Це, для початку,
							дозволить популяризуватися для Української аудиторії і згодом вийти на міжнародний
							ринок з презентаціями майбутніх проектів для світових кінофестивалів та ігрових
							виставок.
						</>,
					],

					listBlock: [
						{
							title: `Що я можу надати:`,
							text: [
								`Статті, які пропонують альтернативну стратегію розвитку в Україні та за її межами. Теми пов'язані з сучасною культурою і соціальними проблемами з варіантами їх вирішень. Гумор і гонзо-журналістику. В результаті – конкурентоспроможне медіа.`,

								`Простір без цензури, для об'єднання людей, які хочуть міняти майбутнє у вибраних сферах і місце, на яке відсутній будь який тиск бюрократії, олігархів чи державних структур.`,

								`Маркетингові підходи для масового розповсюдження.`,

								`Робити кіно, ігри – для продажі та світової популяризації культури і мистецтва, та задоволення потреб споживачів.`,

								`Виробництво ключових продуктів і ведення журналу має підтвердити всі заявлені слова протягом одного року (етап оцінки можливостей).`,

								`Потім IT сектор і автоматизація, оцінюючи потреби і першочергові необхідності. Всі технології можна буде інтегрувати у даний журнал (причина необхідності власного місця).`,

								`І далі тільки більше!`,
							],
						},
						{
							title: `Етапи та потреби (MVP):`,
							text: [
								`Фундамент – стартовий капітал на створення команди і виробництво ключових продуктів індустрії.`,

								`Стратегія розвитку – укомплектований журнал з форумом чи інтеграція в існуючу площадку.`,

								`Запуск та оцінка ефективності – доопрацювання вразливих сторін, маркетингова стратегія і рекламна кампанія.`,
							],
						},
					],
				},

				{
					text: `Гнучкість моїх ідей дозволяє інтегрувати їх у будь-які існуючі проекти, як модифікацію, окремий проект чи масштабування компанії. Тому якщо ви розділяєте схожі інтереси і відкриті до співпраці, то я готовий до обговорення. Є бачення, і теоретично воно працює. Для практики потрібні ресурси.`,
				},

				{
					title: `Узагальнюючи`,
					text: `Це складний, багатофункціональний та багатоетапний проект, він кидає виклик, але він можливий! Тому для розвитку я вибрав саме журнал – це потужний інструмент масової інформації та впливу, а в Україні з адекватним мас медіа очевидні проблеми (відсутнє популярне і незалежне, або популярне і якісне, або близьке молодому поколінню), тому зайняти цю нішу я не бачу перешкод.`,

					listBlock: [
						{
							title: `На пальцях:`,
							text: [
								`Журнал – лице компанії. Популярний журнал – голос більшості. Мега популярний журнал – диктує правила розвитку, а не підстроюється під заборону еволюціонувати (є стратегія).`,

								`Виробництво крутого кіно та ігор – прибуток (є сценарії).`,

								`Прибуток вкладати в свої IT технології (блокчейн, AI, нейротехнології та робототехніку) – ще більший прибуток (є ідеї).`,

								`Перемога!`,

								`Ризики: в критичному випадку може получитись лише популярний журнал з можливістю продавати рекламу, з системою донатів для інвестицій та з виробництвом кіно-ігрової продукції для продажі іншим компаніям. Фундамент зберігається і розвиток можливий навіть в критичних умовах.`,
							],
						},

						{
							title: `По технологіям (цікавить):`,
							text: [
								`Блокчейн – криптовалютні операції на платформі, власна криптовалюта, безпека.`,

								`AI – особистий асистент у журналі (допомагає в роботі, навчанні, розвагах), без обмежень (які блокують якість), кастомізується.`,

								`Нейротехнології – вивчення мозку людини та інтеграція його з комп'ютерними технологіями, віртуальна реальність.`,

								`Робототехніка – автоматизація складних робочих процесів, протезування, власні супутники.`,
							],
						},
					],
				},

				{
					title: `Висновок`,
					text: `В цілому моя перспектива сфокусована на розвиток масштабу. Для створення відокремленого від держави місця зі своєю незалежною екосистемою. З колаборацією різних сфер діяльності, від інноваційних технологій до креативного мислення. І якщо зібрати все найкраще в одному місці, та організувати професійний колектив критично мислячих ідейників та ентузіастів, то стрибок еволюційного прогресу відбудеться сам собою. Бо не існує нічого неможливого, лише неправильний підхід!`,
				},
			],

			lastWords: lastWordsUa,
		},
	],
};
