import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import PageHelmet from '../../../config/PageHelmet';
import { startupsMetaTags } from '../../../components/metaTags';
import { useTabletLargeQuery } from '../../../config/useMediaQuery';
import PopupContacts from '../../../components/PopupContacts';
import Copyright from '../../../components/Copyright';
import PitchContainer from './PitchContainer';
import LanguageSwitcher from './LanguageSwitcher';
import StartupNavigation from './StartupNavigation';
import Slider from '../../../components/Slider/Slider';
import TableOfContent from './TableOfContent';

import '../Startups.scss';

interface SlideItem {
	itemSrc?: string;
	itemAlt?: string;
	itemPoster?: string;
	itemTitle?: string;
}

interface TextDataItem {
	markdownAPI?: string;
	filmsPreviewUrl?: string;
}

interface PageProps {
	textData: Record<'ru' | 'en' | 'ua', TextDataItem[]>;
	sliderData?: Record<string, { sliderContent: SlideItem[] }[]>;
	tableOfContent?: boolean;
}

const LANGUAGES: ('en' | 'ua' | 'ru')[] = ['en', 'ua', 'ru'];

const PageStructure: React.FC<PageProps> = ({ textData, sliderData, tableOfContent = false }) => {
	const useTabletLarge = useTabletLargeQuery();
	const [currentLang, setCurrentLang] = useState<'en' | 'ua' | 'ru'>('en');
	const [isActive, setIsActive] = useState(false);
	const [activePitchIndex, setActivePitchIndex] = useState(0);
	const [activeTextIndex, setActiveTextIndex] = useState(0);
	const pitchRefs = useRef<(HTMLDivElement | null)[]>([]);

	// Available languages based on non-empty textData arrays
	const availableLangs = useMemo(
		() => LANGUAGES.filter((lang) => textData?.[lang]?.length > 0),
		[textData]
	);

	// Initialize language from localStorage or fallback to 'ua'
	useEffect(() => {
		const storedLang = localStorage.getItem('currentLang') as 'en' | 'ua' | 'ru' | null;
		const initialLang =
			storedLang && textData?.[storedLang]?.length
				? storedLang
				: availableLangs.includes('ua')
				? 'ua'
				: availableLangs[0] || 'en';
		setCurrentLang(initialLang);
	}, [textData, availableLangs]);

	const changeLanguage = useCallback(
		(lang: 'en' | 'ua' | 'ru') => {
			if (textData?.[lang]?.length) {
				setCurrentLang(lang);
				localStorage.setItem('currentLang', lang);
			}
		},
		[textData]
	);

	// Scroll listener to toggle isActive
	useEffect(() => {
		const pageContainer = document.querySelector('.page-container');
		const startupAction = document.querySelector('.startup-action');
		if (!pageContainer || !startupAction) return;

		const handleScroll = () => {
			const newIsActive =
				startupAction.getBoundingClientRect().top <= pageContainer.getBoundingClientRect().top;
			setIsActive((prev) => (prev === newIsActive ? prev : newIsActive));
		};

		pageContainer.addEventListener('scroll', handleScroll);
		return () => pageContainer.removeEventListener('scroll', handleScroll);
	}, []);

	// Content fallback logic: currentLang → en → []
	const contentToRender = useMemo(
		() => textData[currentLang] || textData.en || [],
		[textData, currentLang]
	);

	// Memoized sliders for mobile/tablet view
	const memoizedSliders = useMemo(() => {
		if (!sliderData) return null;

		return contentToRender.map((_, i) => (
			<Slider key={i} dataSlider={sliderData} currentLanguage={currentLang} isActive={i} />
		));
	}, [sliderData, currentLang, contentToRender]);

	// Track active pitch index based on scroll, only on desktop
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
				const topRelativeToContainer = ref.getBoundingClientRect().top - containerTop;

				if (topRelativeToContainer <= triggerOffset) {
					setActivePitchIndex(i);
				}
			}
		};

		container.addEventListener('scroll', handleScroll, { passive: true });
		handleScroll();
		return () => container.removeEventListener('scroll', handleScroll);
	}, [useTabletLarge, contentToRender]);

	return (
		<>
			<PageHelmet metaTags={startupsMetaTags} />

			<div className={`startup-action ${isActive ? 'is-active' : ''}`}>
				<StartupNavigation />
			</div>

			<div className='wrapper wrapper--idea'>
				<div className='idea-section'>
					<div className='idea-info'>
						{contentToRender.map((structure, index) => {
							const fallbackFilmsPreview = textData.en?.[index]?.filmsPreviewUrl;
							return (
								<PitchContainer
									key={index}
									structure={{
										...structure,
										filmsPreviewUrl: structure.filmsPreviewUrl || fallbackFilmsPreview,
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

						{/* Table of Content (pass tableOfContent={true} to page where need) */}
						{tableOfContent && contentToRender.length > 1 && (
							<TableOfContent
								contentLength={contentToRender.length}
								activeIndex={activeTextIndex}
								onSelectIndex={setActiveTextIndex}
							/>
						)}

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
