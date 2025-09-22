import React, { useLayoutEffect, useRef } from 'react';
import { LanguageSwitcherProps, LanguageCode } from '../../../types/common';

// Order of languages to display
const LANGUAGE_ORDER: LanguageCode[] = ['en', 'ua', 'ru'];

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
	currentLang,
	availableLangs,
	changeLanguage,
}) => {
	const containerRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		const activeBtn = containerRef.current?.querySelector<HTMLElement>('.idea-lang__btn.active');
		if (activeBtn && containerRef.current) {
			containerRef.current.style.setProperty('--indicator-left', `${activeBtn.offsetLeft}px`);
			containerRef.current.style.setProperty('--indicator-width', `${activeBtn.offsetWidth}px`);
		}
	}, [currentLang]);

	const langsToShow = LANGUAGE_ORDER.filter((lang) => availableLangs.includes(lang));

	return (
		<div className='idea-lang' ref={containerRef}>
			{langsToShow.map((lang) => (
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
