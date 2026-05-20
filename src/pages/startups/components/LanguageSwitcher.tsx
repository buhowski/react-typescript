import React, { useRef } from 'react';
import { LanguageSwitcherProps } from '../../../types/common';
import { useActiveIndicator } from '../helpers/useActiveIndicator';

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
	currentLang,
	availableLangs,
	changeLanguage,
}) => {
	// Lang Testing
	let isDev = process.env.NODE_ENV === 'development';
	isDev = false;

	const containerRef = useRef<HTMLDivElement>(null);

	useActiveIndicator(containerRef, '.idea-lang__btn.active');

	return (
		<div className={`language-bar ${isDev ? 'idea-devMode' : ''}`}>
			<div className='language-bar__inner'>
				<div ref={containerRef} className={`idea-lang`}>
					{availableLangs.map((lang) => (
						<button
							key={lang}
							onClick={() => changeLanguage(lang)}
							className={`idea-lang__btn ${currentLang === lang ? 'active' : ''}`}
						>
							<span>{lang.toUpperCase()}</span>
						</button>
					))}
				</div>
			</div>
		</div>
	);
};

export default LanguageSwitcher;
