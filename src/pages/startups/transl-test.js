// todo Articles Page text tese
export const textData = [
	{
		pitch01: {
			pitchTitle: `title`,

			section: [
				{
					text: `text`,
				},
				{
					text: `text`,
				},
			],

			lastWords: `text`,
		},

		pitch02: {
			pitchTitle: `title`,

			section: [
				{
					text: `text`,
				},
				{
					text: `text`,
				},
			],

			lastWords: `text`,
		},
	},
];

// todo  translation:

// import React, { useState } from 'react';

// // Interface for translation keys
// interface Translation {
// 	[key: string]: string;
// }

// interface Translations {
// 	title: Translation;
// 	content: Translation;
// }

// const StartupMVP: React.FC = () => {
// 	// Selected language (default to English)
// 	const [currentLanguage, setCurrentLanguage] = useState<string>('en');

// 	// Define translations
// 	const translations: Translations = {
// 		title: {
// 			en: 'This is the Page Section Title (en)',
// 			ua: 'Заголовок розділу сторінки (ua)',
// 		},
// 		content: {
// 			en: 'This is the page section content in English.',
// 			ua: 'Вміст розділу сторінки українською мовою.',
// 		},
// 	};

// 	const handleLanguageChange = (newLang: string) => {
// 		setCurrentLanguage(newLang);
// 	};

// 	const { title, content } = translations;

// 	return (
// 		<section>
// 			{/* Language switcher (optional) */}
// 			<LanguageSwitcher
// 				currentLanguage={currentLanguage}
// 				onLanguageChange={handleLanguageChange}
// 			/>

// 			<h2>{title[currentLanguage] || title['en']}</h2>
// 			<p>{content[currentLanguage] || content['en']}</p>
// 		</section>
// 	);
// };

// interface LanguageSwitcherProps {
// 	currentLanguage: string;
// 	onLanguageChange: (newLang: string) => void;
// }

// const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
// 	currentLanguage,
// 	onLanguageChange,
// }) => {
// 	const languages = ['en', 'ua'];

// 	return (
// 		<>
// 			{languages.map((lang) => (
// 				<button
// 					key={lang}
// 					onClick={() => onLanguageChange(lang)}
// 					disabled={currentLanguage === lang}
// 				>
// 					{lang === 'en' ? 'English' : 'Українська'}
// 				</button>
// 			))}
// 		</>
// 	);
// };

// export default StartupMVP;
