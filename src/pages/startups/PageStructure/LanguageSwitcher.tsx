import React from 'react';
import { LanguageSwitcherProps } from '../../../types/common';

// Wrap the component with React.memo
const LanguageSwitcher: React.FC<LanguageSwitcherProps> = React.memo(
	({ currentLang, availableLangs, changeLanguage }) => {
		// Define the fixed list of all languages once within the component's scope
		// or even outside if it's truly static and not dependent on props.
		const allLanguages = ['en', 'ua', 'ru'] as const;

		return (
			<div className='idea-tabs idea-tabs--lang'>
				{allLanguages.map((lang) => (
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
	}
);

export default LanguageSwitcher;
