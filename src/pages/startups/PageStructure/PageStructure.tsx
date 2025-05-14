import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import PageHelmet from '../../../config/PageHelmet';
import { startupsMetaTags } from '../../../config/metaTags';
import { useTabletLargeQuery } from '../../../hooks/useMediaQuery';
import '../Startups.scss';
import PopupContacts from '../../../components/PopupContacts';
import Copyright from '../../../components/Copyright';
import Slider from '../../../components/Slider';
import PitchContainer from './PitchContainer';
import LanguageSwitcher from './LanguageSwitcher';
import StartupNavigation from './StartupNavigation';
import { Block } from '../data/textTypes';

// Interfaces
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

// Utils
const getIndexFromHash = (hash: string): number | null => {
	const match = hash.match(/^#pitch-container-(\d+)$/);
	return match ? parseInt(match[1], 10) : null;
};

// Component
const PageStructure: React.FC<PageProps> = ({
	textData,
	sliderData,
	pageClassName,
	langDisable,
	toc,
}) => {
	const useTabletLarge = useTabletLargeQuery();

	const [lang, setLang] = useState<'en' | 'ua' | 'ru'>('en');
	const [activeIndex, setActiveIndex] = useState(0);
	const [tocOpen, setTocOpen] = useState(false);
	const [navSticky, setNavSticky] = useState(false);

	const tocRef = useRef<HTMLDivElement>(null);

	const disabledLangs = useMemo(
		() => (Array.isArray(langDisable) ? langDisable : langDisable ? [langDisable] : []),
		[langDisable]
	);

	useEffect(() => {
		const storedLang = localStorage.getItem('currentLang') as 'en' | 'ua' | 'ru' | null;
		const initialLang = storedLang && !disabledLangs.includes(storedLang) ? storedLang : 'en';

		setLang(initialLang);
		localStorage.setItem('currentLang', initialLang);
	}, [disabledLangs]);

	const changeLanguage = useCallback(
		(newLang: 'en' | 'ua' | 'ru') => {
			if (!disabledLangs.includes(newLang)) {
				setLang(newLang);
				localStorage.setItem('currentLang', newLang);
			}
		},
		[disabledLangs]
	);

	const handleTocClick = useCallback(
		(index: number, event: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>) => {
			event.preventDefault();

			const targetId = `pitch-container-${index}`;
			const element = document.getElementById(targetId);

			if (element) {
				element.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}

			setActiveIndex(index);
			setTocOpen(false);
		},
		[]
	);

	useEffect(() => {
		const updateFromHash = () => {
			const index = getIndexFromHash(window.location.hash);

			if (index !== null) {
				const el = document.getElementById(`pitch-container-${index}`);
				if (el) el.scrollIntoView({ behavior: 'smooth' });

				setActiveIndex(index);
			}
		};

		updateFromHash();
		window.addEventListener('hashchange', updateFromHash);

		return () => window.removeEventListener('hashchange', updateFromHash);
	}, []);

	useEffect(() => {
		const closeToc = (e: MouseEvent) => {
			if (tocRef.current && !tocRef.current.contains(e.target as Node)) {
				setTocOpen(false);
			}
		};

		if (tocOpen) {
			document.addEventListener('mousedown', closeToc);
		}

		return () => document.removeEventListener('mousedown', closeToc);
	}, [tocOpen]);

	useEffect(() => {
		const container = document.querySelector('.page-container');
		const nav = document.querySelector('.startup-action');

		if (!container || !nav) return;

		const onScroll = () => {
			setNavSticky(nav.getBoundingClientRect().top <= container.getBoundingClientRect().top);
		};

		container.addEventListener('scroll', onScroll);
		onScroll();

		return () => container.removeEventListener('scroll', onScroll);
	}, []);

	const content = textData[lang] || [];

	const slider = sliderData ? (
		<Slider dataSlider={sliderData} currentLanguage={lang} isActive={activeIndex} />
	) : undefined;

	return (
		<>
			<PageHelmet metaTags={startupsMetaTags} />

			<div className={`startup-action ${navSticky ? 'is-active' : ''}`}>
				<StartupNavigation />
			</div>

			<div className={`wrapper wrapper--idea ${pageClassName || ''}`}>
				<div className='idea-section'>
					<div className='idea-info'>
						{content.map((structure, index) => (
							<PitchContainer
								key={index}
								structure={structure}
								index={index}
								useTabletLarge={useTabletLarge}
								Slider={index === 0 ? slider : undefined}
								CopyrightComponent={Copyright}
								PopupContactsComponent={PopupContacts}
								isActive={activeIndex === index}
								onTabClick={handleTocClick}
							/>
						))}
					</div>

					<div className='lang-sidebar'>
						<LanguageSwitcher
							currentLang={lang}
							disabledLangs={disabledLangs}
							changeLanguage={changeLanguage}
						/>

						{toc && content.length > 1 && (
							<div className={`table-content ${tocOpen ? 'is-open' : ''}`} ref={tocRef}>
								<button className='table-content__btn' onClick={() => setTocOpen(!tocOpen)}>
									<mark>
										{Array(6)
											.fill(null)
											.map((_, i) => (
												<span key={i} />
											))}
									</mark>
									<span>Table Of Content</span>
								</button>

								<div className='table-content__list'>
									{content.map((item, i) => (
										<a
											href={`#pitch-container-${i}`}
											key={i}
											onClick={(e) => handleTocClick(i, e)}
											className={activeIndex === i ? 'is-active' : ''}
										>
											<mark>{item.pitchNumber}</mark>
											<mark>{item.pitchTitle}</mark>
										</a>
									))}
								</div>
							</div>
						)}

						<div className='desktop-slider'>{!useTabletLarge && slider}</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default React.memo(PageStructure);
