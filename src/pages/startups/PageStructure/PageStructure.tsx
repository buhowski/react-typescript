import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import PageHelmet from '../../../config/PageHelmet';
import { startupsMetaTags } from '../../../components/metaTags';
import { useTabletLargeQuery } from '../../../config/useMediaQuery';
import PopupContacts from '../../../components/PopupContacts';
import Copyright from '../../../components/Copyright';
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
	markdownAPI?: string;
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
		if (textData?.en && textData.en.length > 0) langs.push('en');
		if (textData?.ua && textData.ua.length > 0) langs.push('ua');
		if (textData?.ru && textData.ru.length > 0) langs.push('ru');
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
			const newIsActive =
				startupAction.getBoundingClientRect().top <= pageContainer.getBoundingClientRect().top;

			setIsActive((prev) => {
				if (prev === newIsActive) return prev; // no state update if same
				return newIsActive;
			});
		};

		pageContainer.addEventListener('scroll', handleScroll);
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

	const memoizedSliders = useMemo(() => {
		if (!sliderData) return null;

		return contentToRender.map((_, index) => (
			<Slider key={index} dataSlider={sliderData} currentLanguage={currentLang} isActive={index} />
		));
	}, [sliderData, currentLang, contentToRender]);

	useEffect(() => {
		if (useTabletLarge || pitchRefs.current.length === 0) return;

		const container = document.querySelector('.page-container');
		if (!container) return;

		const triggerOffset = 140;

		const handleScroll = () => {
			const containerTop = container.getBoundingClientRect().top;

			for (let i = 0; i < pitchRefs.current.length; i++) {
				const ref = pitchRefs.current[i];
				if (!ref) continue;

				const rect = ref.getBoundingClientRect();
				const topRelativeToContainer = rect.top - containerTop;

				if (topRelativeToContainer <= triggerOffset) {
					setActivePitchIndex(i);
				}
			}
		};

		container.addEventListener('scroll', handleScroll, { passive: true });
		handleScroll(); // initial run

		return () => {
			container.removeEventListener('scroll', handleScroll);
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
							const englishStructure = textData.en?.[index];
							const filmsPreviewUrl =
								structure.filmsPreviewUrl || englishStructure?.filmsPreviewUrl;

							return (
								<PitchContainer
									key={index}
									structure={{
										...structure,
										filmsPreviewUrl: filmsPreviewUrl,
									}}
									index={index}
									useTabletLarge={useTabletLarge}
									slider={memoizedSliders ? memoizedSliders[index] : null}
									ref={(el) => (pitchRefs.current[index] = el)}
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
