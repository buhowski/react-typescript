import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
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
	filmsPreviewUrl?: string;
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
}

const PageStructure: React.FC<PageProps> = ({
	textData,
	sliderData,
	pageClassName,
	langDisable,
}) => {
	const useTabletLarge = useTabletLargeQuery();
	const [currentLang, setCurrentLang] = useState<'en' | 'ua' | 'ru'>('en');
	const [isActive, setIsActive] = useState(false);
	const [activePitchIndex, setActivePitchIndex] = useState<number>(0);
	const pitchRefs = useRef<(HTMLDivElement | null)[]>([]);

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

		pageContainer.addEventListener('scroll', handleScroll, { passive: true });
		return () => {
			pageContainer.removeEventListener('scroll', handleScroll);
		};
	}, []);

	// Memoized content to render based on the current language
	const contentToRender: TextDataItem[] = useMemo(
		() => textData[currentLang] || textData['en'] || [],
		[textData, currentLang]
	);

	useEffect(() => {
		if (useTabletLarge || pitchRefs.current.length === 0) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const index = pitchRefs.current.findIndex((ref) => ref === entry.target);
					if (index === -1) return;

					const rootBounds = entry.rootBounds;
					const boundingClientRect = entry.boundingClientRect;

					if (!rootBounds) return;

					if (entry.isIntersecting) {
						setActivePitchIndex(index);
					} else {
						if (boundingClientRect.bottom <= rootBounds.top + 145) {
							if (index > 0) {
								setActivePitchIndex(index - 1);
							}
						}
					}
				});
			},
			{
				root: document.querySelector('.page-container'),
				rootMargin: '-145px 0px -99999px 0px',
				threshold: 0,
			}
		);

		pitchRefs.current.forEach((ref) => {
			if (ref) {
				observer.observe(ref);
			}
		});

		return () => {
			observer.disconnect();
		};
	}, [useTabletLarge, contentToRender]);

	useEffect(() => {
		pitchRefs.current = [];
		setActivePitchIndex(0);
	}, [contentToRender]);

	return (
		<>
			<div className={`startup-action ${isActive ? 'is-active' : ''}`}>
				<StartupNavigation />
			</div>

			<div className={`wrapper wrapper--idea ${pageClassName || ''}`}>
				<PageHelmet metaTags={startupsMetaTags} />

				<div className='idea-section'>
					<div className='idea-info'>
						{contentToRender.map((structure: TextDataItem, index: number) => {
							const conditionalSlider =
								structure.filmsPreviewUrl && useTabletLarge && sliderData ? (
									<Slider dataSlider={sliderData} currentLanguage={currentLang} isActive={index} />
								) : undefined;

							return (
								<PitchContainer
									key={index}
									structure={structure}
									index={index}
									useTabletLarge={useTabletLarge}
									slider={conditionalSlider}
									ref={(element: HTMLDivElement | null) => {
										pitchRefs.current[index] = element;
									}}
								/>
							);
						})}

						{useTabletLarge && <Copyright />}

						<div className='copy-tablet'>{useTabletLarge && <PopupContacts />}</div>
					</div>

					<div className='lang-sidebar'>
						<LanguageSwitcher
							currentLang={currentLang}
							disabledLangs={disabledLangs}
							changeLanguage={changeLanguage}
						/>

						{/* Table Of Content */}
						{/* {contentToRender.length > 1 && (
							<div className={`table-content ${isTocOpen ? 'is-open' : ''}`} ref={tocRef}>
								<button className='table-content__btn' onClick={toggleToc}>
									<mark>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
									</mark>

									<span>Table Of Content</span>
								</button>

								<div className='table-content__list'>
									<div className='table-content__inner'>
										<div className='table-content__wrapper'>
											<span>Table Of Content</span>

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
						)} */}

						<div className='desktop-slider'>
							{!useTabletLarge && sliderData && (
								<Slider
									dataSlider={sliderData}
									currentLanguage={currentLang}
									isActive={activePitchIndex}
								/>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default React.memo(PageStructure);
