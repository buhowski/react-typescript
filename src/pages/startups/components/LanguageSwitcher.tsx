import React, { useRef } from 'react';
import { LanguageSwitcherProps } from '../../../types/common';
import { useActiveIndicator } from '../helpers/useActiveIndicator';

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
	currentLang,
	availableLangs,
	changeLanguage,
}) => {
	const isDev = process.env.NODE_ENV === 'development';
	const containerRef = useRef<HTMLDivElement>(null);

	useActiveIndicator(containerRef, '.idea-lang__btn.active');

	return (
		<div ref={containerRef} className={`idea-lang ${isDev ? 'idea-lang--dev-mode' : ''}`}>
			{availableLangs.map((lang) => (
				<button
					key={lang}
					onClick={() => changeLanguage(lang)}
					className={`idea-lang__btn ${currentLang === lang ? 'active' : ''}`}
				>
					{lang.toUpperCase()}
				</button>
			))}
		</div>
	);
};

export default LanguageSwitcher;
