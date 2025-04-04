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
	textBlock: Block[];
	lastWords?: string;
}

interface PageProps {
	textData: {
		ru: TextDataItem[];
		en: TextDataItem[];
		ua: TextDataItem[];
	};
	sliderData?: SlideItem[];
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

	const disabledLangs = useMemo(
		() => (Array.isArray(langDisable) ? langDisable : langDisable ? [langDisable] : []),
		[langDisable]
	);

	useEffect(() => {
		const storedLang = localStorage.getItem('currentLang') as 'en' | 'ua' | 'ru' | null;
		const initialLang = storedLang || 'en';
		setCurrentLang(disabledLangs.includes(initialLang) ? 'en' : initialLang);
	}, [disabledLangs]);

	const changeLanguage = useCallback(
		(lang: 'en' | 'ua' | 'ru') => {
			if (!disabledLangs.includes(lang)) {
				setCurrentLang(lang);
				localStorage.setItem('currentLang', lang);
			}
		},
		[disabledLangs]
	);

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

	const contentToRender = useMemo(
		() => textData[currentLang] || textData['en'] || [],
		[textData, currentLang]
	);

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
								Slider={index === 0 && sliderData ? <Slider dataSlider={sliderData} /> : undefined}
								CopyrightComponent={Copyright}
								PopupContactsComponent={PopupContacts}
							/>
						))}
					</div>

					<div className='lang-sidebar'>
						<LanguageSwitcher
							currentLang={currentLang}
							disabledLangs={disabledLangs}
							changeLanguage={changeLanguage}
						/>

						<div className='desktop-slider'>
							{!useTabletLarge && sliderData && <Slider dataSlider={sliderData} />}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default React.memo(PageStructure);
