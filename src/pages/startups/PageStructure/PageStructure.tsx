import React, { useState, useEffect, useMemo, useCallback } from 'react';
import PageHelmet from '../../../config/PageHelmet';
import { startupsMetaTags } from '../../../config/metaTags';
import { useTabletLargeQuery } from '../../../hooks/useMediaQuery';
import '../Startups.scss';
import PopupContacts from '../../../components/PopupContacts';
import Copyright from '../../../components/Copyright';
import { Block } from '../data/textTypes';
import PitchContainer from './PitchContainer';
import LanguageSwitcher from './LanguageSwitcher';
import StartupNavigation from './StartupNavigation';
import Slider from '../../../components/Slider';

interface SlideItem {
	itemSrc?: string;
	itemAlt?: string;
	itemPoster?: string;
	itemTitle?: string;
}

interface TextDataItem {
	pitchNumber?: string;
	pitchTitle?: string;
	textBlock: Block[];
	lastWords?: string;
}

interface PageProps {
	textData: {
		ru: TextDataItem[];
		en: TextDataItem[];
		ua: TextDataItem[];
	};
	sliderData?: {
		[key: string]: {
			sliderContent: SlideItem[];
		}[];
	};
	pageClassName?: string;
	langDisable?: string | string[];
	toc?: boolean;
}

const PageStructure: React.FC<PageProps> = ({
	textData,
	sliderData,
	pageClassName,
	langDisable,
	toc,
}) => {
	const useTabletLarge = useTabletLargeQuery();
	const [currentLang, setCurrentLang] = useState<'en' | 'ua' | 'ru'>('en');
	const [isActive, setIsActive] = useState(false);
	const [activeTextIndex, setActiveTextIndex] = useState(0);
	const [isTocOpen, setIsTocOpen] = useState(false);

	// Function to toggle the visibility of the table of contents
	const toggleToc = () => {
		setIsTocOpen(!isTocOpen);
	};

	// Memoized list of disabled languages
	const disabledLangs = useMemo(
		() => (Array.isArray(langDisable) ? langDisable : langDisable ? [langDisable] : []),
		[langDisable]
	);

	// useEffect to set the initial language from local storage or default
	useEffect(() => {
		const storedLang = localStorage.getItem('currentLang') as 'en' | 'ua' | 'ru' | null;
		const initialLang = storedLang || 'en';
		setCurrentLang(disabledLangs.includes(initialLang) ? 'en' : initialLang);
	}, [disabledLangs]);

	// useCallback to handle language changes
	const changeLanguage = useCallback(
		(lang: 'en' | 'ua' | 'ru') => {
			if (!disabledLangs.includes(lang)) {
				setCurrentLang(lang);
				localStorage.setItem('currentLang', lang);
			}
		},
		[disabledLangs]
	);

	// useEffect to handle scroll and set the isActive state
	useEffect(() => {
		const pageContainer = document.querySelector('.page-container');
		const startupAction = document.querySelector('.startup-action');
		if (!pageContainer || !startupAction) return;

		const handleScroll = () => {
			setIsActive(
				startupAction.getBoundingClientRect().top <= pageContainer.getBoundingClientRect().top
			);
		};

		pageContainer.addEventListener('scroll', handleScroll);
		return () => {
			pageContainer.removeEventListener('scroll', handleScroll);
		};
	}, []);

	// Memoized content to render based on the current language
	const contentToRender = useMemo(
		() => textData[currentLang] || textData['en'] || [],
		[textData, currentLang]
	);

	// Define the Slider component as a constant
	const sliderComponent = sliderData ? (
		<Slider dataSlider={sliderData} currentLanguage={currentLang} isActive={activeTextIndex} />
	) : undefined;

	return (
		<>
			<div className={`startup-action ${isActive ? 'is-active' : ''}`}>
				<StartupNavigation />
			</div>

			<div className={`wrapper wrapper--idea ${pageClassName || ''}`}>
				<PageHelmet metaTags={startupsMetaTags} />

				<div className='idea-section'>
					<div className='idea-info'>
						{contentToRender.map((structure, index) => (
							<PitchContainer
								key={index}
								structure={structure}
								index={index}
								useTabletLarge={useTabletLarge}
								Slider={index === 0 ? sliderComponent : undefined}
								CopyrightComponent={Copyright}
								PopupContactsComponent={PopupContacts}
								isActive={activeTextIndex === index}
							/>
						))}
					</div>

					<div className='lang-sidebar'>
						<LanguageSwitcher
							currentLang={currentLang}
							disabledLangs={disabledLangs}
							changeLanguage={changeLanguage}
						/>

						{toc && contentToRender.length > 1 && (
							<div className={`table-content ${isTocOpen ? 'is-open' : ''}`}>
								<button className='table-content__btn' onClick={toggleToc}>
									<mark>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
									</mark>
									Table Of Content
								</button>

								<div className='table-content__list'>
									<div className='table-content__inner'>
										<div className='table-content__wrapper'>
											{contentToRender.map((item, index) => (
												<button
													key={index}
													onClick={() => setActiveTextIndex(index)}
													className={`${activeTextIndex === index ? 'is-active' : ''}`}
												>
													<mark>{item?.pitchNumber}</mark>
													<mark>{item?.pitchTitle}</mark>
												</button>
											))}
										</div>
									</div>
								</div>
							</div>
						)}

						<div className='desktop-slider'>{!useTabletLarge && sliderComponent}</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default React.memo(PageStructure);
