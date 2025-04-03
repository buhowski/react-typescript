import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import PageHelmet from '../../../config/PageHelmet';
import { startupsMetaTags } from '../../../config/metaTags';
import { useTabletLargeQuery } from '../../../hooks/useMediaQuery';
import '../Startups.scss';
import PopupContacts from '../../../components/PopupContacts';
import Copyright from '../../../components/Copyright';
import { startupsNav } from '../data/startupsNav';
import { Block } from '../data/textTypes';
import { Headline, Title, PitchInfo, Text, Subtitle, List, LastWords } from './IdeaElements';

interface TextStructure {
	section: Block[];
	lastWords: string;
}

interface PageProps {
	title: string;
	textData: Record<string, TextStructure[]> | TextStructure[];
	Slider: JSX.Element;
	pageClassName?: string;
	langDisable?: string | string[];
}

const PageStructure: React.FC<PageProps> = ({
	title,
	textData,
	Slider,
	pageClassName,
	langDisable,
}) => {
	const useTabletLarge = useTabletLargeQuery();
	const [currentLang, setCurrentLang] = useState<'en' | 'ua' | 'ru'>('en');
	const [isActive, setIsActive] = useState(false);

	const langOrder = useMemo(() => ({ ru: 0, en: 1, ua: 2 }), []);

	// Memoize disabledLangs to avoid recalculation
	const disabledLangs = useMemo(
		() => (Array.isArray(langDisable) ? langDisable : langDisable ? [langDisable] : []),
		[langDisable]
	);

	// Initialize language
	useEffect(() => {
		const storedLang = localStorage.getItem('currentLang') as 'en' | 'ua' | 'ru' | null;
		const initialLang = storedLang || 'en';
		setCurrentLang(disabledLangs.includes(initialLang) ? 'en' : initialLang);
	}, [disabledLangs]);

	// Memoize changeLanguage to prevent redefinition
	const changeLanguage = useCallback(
		(lang: 'en' | 'ua' | 'ru') => {
			if (!disabledLangs.includes(lang)) {
				setCurrentLang(lang);
				localStorage.setItem('currentLang', lang);
			}
		},
		[disabledLangs]
	);

	// Throttle scroll handler
	useEffect(() => {
		const pageContainer = document.querySelector('.page-container');
		const startupAction = document.querySelector('.startup-action');
		if (!pageContainer || !startupAction) return;

		let timeoutId: NodeJS.Timeout;
		const handleScroll = () => {
			clearTimeout(timeoutId);
			timeoutId = setTimeout(() => {
				setIsActive(
					startupAction.getBoundingClientRect().top <= pageContainer.getBoundingClientRect().top
				);
			}, 100); // Throttle to 100ms
		};

		pageContainer.addEventListener('scroll', handleScroll);
		return () => {
			pageContainer.removeEventListener('scroll', handleScroll);
			clearTimeout(timeoutId);
		};
	}, []);

	// Memoize renderTextItems
	const renderTextItems = useCallback(
		(structures: TextStructure[]) =>
			structures.map((structure, index) => (
				<div key={index} className='pitch-container'>
					{structure.section.map((block, blockIndex) => (
						<div className='idea-block' key={blockIndex}>
							{block.pitchTitle && (
								<Headline pitchNumber={block.pitchNumber} pitchTitle={block.pitchTitle} />
							)}
							{block.pitchInfo && <PitchInfo pitchInfo={block.pitchInfo} />}
							{block.loglineTitle && (
								<Title titleClassname='idea-block__title' title={block.loglineTitle} />
							)}
							{block.loglineText && <Text text={block.loglineText} />}
							{useTabletLarge && blockIndex === 0 && Slider}
							{block.title && <Title titleClassname='idea-block__title' title={block.title} />}
							{block.text && <Text text={block.text} />}
							{block.subtitle && <Subtitle subtitle={block.subtitle} />}
							{block.list && <List listItems={block.list} />}
							{block.subtitle2 && <Subtitle subtitle={block.subtitle2} />}
							{block.list2 && <List listItems={block.list2} />}
							{block.text2 && <Text text={block.text2} />}
							{block.character01Title && <Subtitle subtitle={block.character01Title} />}
							{block.character01List && <List listItems={block.character01List} />}
							{block.character02Title && <Subtitle subtitle={block.character02Title} />}
							{block.character02List && <List listItems={block.character02List} />}
							{block.character03Title && <Subtitle subtitle={block.character03Title} />}
							{block.character03List && <List listItems={block.character03List} />}
							{block.character04Title && <Subtitle subtitle={block.character04Title} />}
							{block.character04List && <List listItems={block.character04List} />}
							{block.character05Title && <Subtitle subtitle={block.character05Title} />}
							{block.character05List && <List listItems={block.character05List} />}
							{block.character06Title && <Subtitle subtitle={block.character06Title} />}
							{block.character06List && <List listItems={block.character06List} />}
						</div>
					))}
					<LastWords lastWords={structure.lastWords} />
					{useTabletLarge && <Copyright />}
					<div className='copy-tablet'>{useTabletLarge && <PopupContacts />}</div>
				</div>
			)),
		[useTabletLarge, Slider]
	);

	// Memoize contentToRender
	const contentToRender = useMemo(
		() =>
			Array.isArray(textData)
				? [
						(textData.length > langOrder[currentLang] && textData[langOrder[currentLang]]) ||
							(textData.length > 1 && textData[1]) ||
							(textData.length > 0 && textData[0]) || { section: [], lastWords: '' },
				  ]
				: textData[currentLang] || textData['en'] || [{ section: [], lastWords: '' }],
		[textData, currentLang, langOrder]
	);

	return (
		<>
			<div className={`startup-action ${isActive ? 'is-active' : ''}`}>
				<div className='idea-tabs idea-tabs--urls'>
					{startupsNav.map(({ pageLink, pageName }, i) => (
						<NavLink to={pageLink} className='idea-tabs__btn' key={i}>
							{pageName}
						</NavLink>
					))}
				</div>
			</div>

			<div className={`wrapper wrapper--idea ${pageClassName || ''}`}>
				<PageHelmet metaTags={startupsMetaTags} />
				<div className='idea-section'>
					<div className='idea-info'>
						{title && <h1 className='startup-title h2'>{title}</h1>}
						{renderTextItems(contentToRender)}
					</div>
					<div className='lang-sidebar'>
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
						<div className='desktop-slider'>{!useTabletLarge && Slider}</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default React.memo(PageStructure);
