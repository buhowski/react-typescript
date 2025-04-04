import React from 'react';

interface LanguageSwitcherProps {
	currentLang: 'en' | 'ua' | 'ru';
	disabledLangs: string[];
	changeLanguage: (lang: 'en' | 'ua' | 'ru') => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
	currentLang,
	disabledLangs,
	changeLanguage,
}) => {
	return (
		<div className='idea-tabs idea-tabs--lang'>
			{(['en', 'ua', 'ru'] as const).map((lang) => (
				<button
					key={lang}
					onClick={() => changeLanguage(lang)}
					className={`idea-tabs__btn lang-btn ${currentLang === lang ? 'active' : ''}`}
					disabled={disabledLangs.includes(lang)}
				>
					{lang.toUpperCase()}
				</button>
			))}
		</div>
	);
};

export default LanguageSwitcher;
