import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import PageHelmet from '../../../config/PageHelmet';
import { startupsMetaTags } from '../../../config/metaTags';
import { useTabletLargeQuery } from '../../../hooks/useMediaQuery';
import PopupContacts from '../../../components/PopupContacts';
import Copyright from '../../../components/Copyright';
import { Block } from '../data/textTypes';
import PitchContainer from './PitchContainer';
import LanguageSwitcher from './LanguageSwitcher';
import StartupNavigation from './StartupNavigation';
import Slider from '../../../components/Slider';

import '../Startups.scss';

interface SlideItem {
	itemSrc?: string;
	itemAlt?: string;
	itemPoster?: string;
	itemTitle?: string;
}

interface TextDataItem {
	pitchNumber?: string;
	pitchTitle?: string;
	pitchInfo?: { key: string; value: string }[];
	textBlock?: Block[] | null;
	lastWords?: string;
	filmsPreviewUrl?: string | undefined;
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
}

const PageStructure: React.FC<PageProps> = ({ textData, sliderData }) => {
	const useTabletLarge = useTabletLargeQuery();
	const [currentLang, setCurrentLang] = useState<'en' | 'ua' | 'ru'>('en');
	const [isActive, setIsActive] = useState(false);
	const [activePitchIndex, setActivePitchIndex] = useState<number>(0);
	const pitchRefs = useRef<(HTMLDivElement | null)[]>([]);

	// Determine available languages based on non-empty textData arrays
	const availableLangs = useMemo(() => {
		const langs: ('en' | 'ua' | 'ru')[] = [];
		// Check for existence and non-empty array for each language
		if (textData?.en && textData.en.length > 0) langs.push('en');
		if (textData?.ua && textData.ua.length > 0) langs.push('ua');
		if (textData?.ru && textData.ru.length > 0) langs.push('ru');
		// You can add checks for other languages here if needed
		return langs;
	}, [textData]);

	// useEffect to set the initial language from local storage or default
	useEffect(() => {
		const storedLang = localStorage.getItem('currentLang') as 'en' | 'ua' | 'ru' | null;
		const initialLang = storedLang && textData?.[storedLang]?.length > 0 ? storedLang : 'en';
		setCurrentLang(initialLang);
	}, [textData]);

	// useCallback to handle language changes
	const changeLanguage = useCallback(
		(lang: 'en' | 'ua' | 'ru') => {
			if (textData?.[lang]?.length > 0) {
				setCurrentLang(lang);
				localStorage.setItem('currentLang', lang);
			}
		},
		[textData]
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
	// Fallback to 'en' if currentLang data is missing or empty
	const contentToRender: TextDataItem[] = useMemo(
		() => textData[currentLang] || textData['en'] || [],
		[textData, currentLang]
	);

	// Effect to set up the IntersectionObserver for pitch containers
	useEffect(() => {
		// Only set up the observer on desktop and if there are pitch containers
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
						if (boundingClientRect.bottom <= rootBounds.top + 150) {
							if (index > 0) {
								setActivePitchIndex(index - 1);
							}
						}
					}
				});
			},
			{
				root: document.querySelector('.page-container'),
				rootMargin: '-150px 0px -99999px 0px',
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
			<PageHelmet metaTags={startupsMetaTags} />

			<div className={`startup-action ${isActive ? 'is-active' : ''}`}>
				<StartupNavigation />
			</div>

			<div className={`wrapper wrapper--idea`}>
				<div className='idea-section'>
					<div className='idea-info'>
						{contentToRender.map((structure: TextDataItem, index: number) => {
							// Get the corresponding item from the English data as a fallback source for filmsPreviewUrl
							const englishStructure = textData.en?.[index];

							// Determine the filmsPreviewUrl: prioritize current language, fallback to English
							const filmsPreviewUrl =
								structure.filmsPreviewUrl || englishStructure?.filmsPreviewUrl;

							const conditionalSlider = sliderData && (
								<Slider dataSlider={sliderData} currentLanguage={currentLang} isActive={index} />
							);

							return (
								<PitchContainer
									key={index}
									structure={{
										...structure, // Spread existing structure data
										filmsPreviewUrl: filmsPreviewUrl, // Override filmsPreviewUrl with the determined value
									}}
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
							availableLangs={availableLangs}
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
