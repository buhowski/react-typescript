import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { startupsMetaTags } from '../../../components/metaTags';
import { useTabletLargeQuery } from '../../../config/useMediaQuery';
import { LANGUAGES, getInitialLanguage } from '../helpers/languageHelpers';
import { useStickyHeader } from '../helpers/useStickyHeader';
import { useActiveHeadingTracking } from '../helpers/useActiveHeadingTracking';
import { PageProps, LanguageCode } from '../../../types/common';
import { VideoPlaybackProvider } from '../helpers/VideoPlaybackContext';
import PageHelmet from '../../../config/PageHelmet';
import PopupContacts from '../../../components/PopupContacts';
import Copyright from '../../../components/Copyright';
import PitchContainer from './PitchContainer';
import LanguageSwitcher from './LanguageSwitcher';
import StartupNavigation from './StartupNavigation';
import Slider from '../../../components/Slider';
import TableOfContent from './TableOfContent';

import '../Startups.scss';

const PageStructure: React.FC<PageProps> = ({ textData, backButton }) => {
	const useTabletLarge = useTabletLargeQuery();
	const [currentLang, setCurrentLang] = useState(LANGUAGES[0]);
	const [initialLangReady, setInitialLangReady] = useState(false);
	const allHeadingsMapRef = useRef(new Map());
	const pitchRefs = useRef<(HTMLDivElement | null)[]>([]);
	const [currentDesktopSliderContent, setCurrentDesktopSliderContent] = useState<any[]>([]);
	const isDesktopSliderContentInitialized = useRef(false);
	const [canRenderFooter, setCanRenderFooter] = useState(false);

	const {
		activeHeadingId,
		handleHeadingsExtracted,
		handleTableOfContentSelect,
		sortedHeadings,
		setHeadingsVersion,
	} = useActiveHeadingTracking(useTabletLarge, allHeadingsMapRef);
	const isActive = useStickyHeader();

	const availableLangs = useMemo(
		() => LANGUAGES.filter((lang) => textData?.[lang]?.length > 0),
		[textData]
	);

	const contentToRender = useMemo(() => {
		const currentLangContent = textData[currentLang] || [];
		const englishContent = textData.en || [];

		return currentLangContent.map((item, index) => {
			const englishItem = englishContent[index];
			return {
				...item,
				sliderContent: item.sliderContent || englishItem?.sliderContent,
				filmsPreviewUrl: item.filmsPreviewUrl || englishItem?.filmsPreviewUrl,
			};
		});
	}, [textData, currentLang]);

	// Initial language setup
	useEffect(() => {
		const initialLang = getInitialLanguage(textData, availableLangs);
		setCurrentLang(initialLang);
		allHeadingsMapRef.current.clear();
		setHeadingsVersion((prev) => prev + 1);
		setInitialLangReady(true);
		isDesktopSliderContentInitialized.current = false;
	}, [textData, availableLangs, allHeadingsMapRef, setHeadingsVersion]);

	// Update active PitchContainer's slider content on scroll
	const handleScrollUpdateSlider = useCallback(() => {
		const pageContainer = document.querySelector('.page-container');

		if (!pageContainer || !initialLangReady || !contentToRender.length) {
			return;
		}

		const containerTop = pageContainer.getBoundingClientRect().top;
		let scrollOffset = 200;

		let newActivePitchIndex: number = 0;

		for (let i = pitchRefs.current.length - 1; i >= 0; i--) {
			const pitchElement = pitchRefs.current[i];

			if (pitchElement) {
				const rect = pitchElement.getBoundingClientRect();
				if (rect.top <= containerTop + scrollOffset && rect.bottom > containerTop) {
					newActivePitchIndex = i;
					break;
				}
			}
		}

		const newSliderContent = contentToRender[newActivePitchIndex]?.sliderContent || [];
		setCurrentDesktopSliderContent((prevContent) => {
			if (JSON.stringify(newSliderContent) !== JSON.stringify(prevContent)) {
				return newSliderContent;
			}
			return prevContent;
		});
	}, [initialLangReady, contentToRender]);

	// Attach scroll listener and handle initial slider content
	useEffect(() => {
		const pageContainer = document.querySelector('.page-container');
		if (!pageContainer) return;

		if (
			!isDesktopSliderContentInitialized.current &&
			initialLangReady &&
			contentToRender.length > 0
		) {
			setCurrentDesktopSliderContent(contentToRender[0]?.sliderContent || []);
			isDesktopSliderContentInitialized.current = true;
		}

		pageContainer.addEventListener('scroll', handleScrollUpdateSlider, { passive: true });
		handleScrollUpdateSlider();

		return () => {
			pageContainer.removeEventListener('scroll', handleScrollUpdateSlider);
		};
	}, [handleScrollUpdateSlider, initialLangReady, contentToRender]);

	const changeLanguage = useCallback(
		(lang: LanguageCode) => {
			if (textData?.[lang]?.length) {
				setCurrentLang(lang);
				localStorage.setItem('currentLang', lang);
				allHeadingsMapRef.current.clear();
				setHeadingsVersion((prev) => prev + 1);
			}
		},
		[textData, allHeadingsMapRef, setHeadingsVersion]
	);

	// Delayed footer render after content and language are ready
	useEffect(() => {
		if (useTabletLarge && initialLangReady && contentToRender.length > 0) {
			const timer = setTimeout(() => setCanRenderFooter(true), 1000);

			return () => clearTimeout(timer);
		}
	}, [initialLangReady, contentToRender, useTabletLarge]);

	return (
		<VideoPlaybackProvider>
			<PageHelmet metaTags={startupsMetaTags} />

			<div className={`startup-action ${isActive ? 'is-active' : ''}`}>
				<StartupNavigation />
			</div>

			<div className='wrapper wrapper--idea'>
				<div className='idea-section'>
					<div className='idea-info'>
						{/* TODO: smth better like breadcrumbs / back navigation */}
						{backButton && (
							<NavLink to={backButton} className='idea-back'>
								<svg
									version='1.0'
									xmlns='http://www.w3.org/2000/svg'
									preserveAspectRatio='xMidYMid meet'
									viewBox='0.58 0.25 598.8 448.27'
								>
									<g transform='translate(0.000000,449.000000) scale(0.100000,-0.100000)'>
										<path d='M2140 4474 c-39 -14 -188 -159 -1063 -1033 -756 -754 -1025 -1029 -1045 -1066 -23 -43 -27 -62 -26 -130 1 -52 7 -94 18 -120 13 -29 294 -316 1034 -1057 1129 -1130 1053 -1063 1192 -1062 85 1 128 16 185 65 55 49 85 119 85 200 0 133 48 77 -796 920 -420 420 -764 767 -764 771 0 4 1090 9 2423 10 l2422 3 40 22 c203 109 197 391 -10 501 l-50 27 -2415 3 -2415 2 767 768 c854 856 804 797 796 934 -6 110 -51 183 -142 230 -54 28 -173 34 -236 12z'></path>
									</g>
								</svg>

								<span>Back</span>
							</NavLink>
						)}

						{initialLangReady &&
							contentToRender.map((structure, index) => {
								const fallbackFilmsPreview = textData.en?.[index]?.filmsPreviewUrl;
								return (
									<PitchContainer
										key={index}
										index={index}
										ref={(el) => (pitchRefs.current[index] = el)}
										structure={{
											...structure,
											filmsPreviewUrl: structure.filmsPreviewUrl || fallbackFilmsPreview,
										}}
										currentLanguage={currentLang}
										sliderContent={structure.sliderContent}
										onHeadingsExtracted={handleHeadingsExtracted}
									/>
								);
							})}

						{useTabletLarge && (
							<div className='copy-tablet'>
								{canRenderFooter && <Copyright />}

								<PopupContacts />
							</div>
						)}
					</div>

					<div className={`lang-sidebar ${'lang-sidebar--has-toc'}`}>
						<LanguageSwitcher
							currentLang={currentLang}
							availableLangs={availableLangs}
							changeLanguage={changeLanguage}
						/>

						<TableOfContent
							activeHeadingId={activeHeadingId}
							onSelectIndex={handleTableOfContentSelect}
							headings={sortedHeadings}
						/>

						<div className='desktop-slider'>
							{!useTabletLarge && (
								<Slider slides={currentDesktopSliderContent} currentLanguage={currentLang} />
							)}
						</div>
					</div>
				</div>
			</div>
		</VideoPlaybackProvider>
	);
};

export default React.memo(PageStructure);
