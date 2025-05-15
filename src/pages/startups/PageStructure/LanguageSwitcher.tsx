import React from 'react';

interface LanguageSwitcherProps {
	currentLang: 'en' | 'ua' | 'ru';
	availableLangs: ('en' | 'ua' | 'ru')[];
	changeLanguage: (lang: 'en' | 'ua' | 'ru') => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
	currentLang,
	availableLangs,
	changeLanguage,
}) => {
	return (
		<div className='idea-tabs idea-tabs--lang'>
			{(['en', 'ua', 'ru'] as const).map((lang) => (
				<button
					key={lang}
					onClick={() => changeLanguage(lang)}
					className={`idea-tabs__btn lang-btn ${currentLang === lang ? 'active' : ''}`}
					disabled={!availableLangs.includes(lang)}
				>
					{lang.toUpperCase()}
				</button>
			))}
		</div>
	);
};

export default LanguageSwitcher;
