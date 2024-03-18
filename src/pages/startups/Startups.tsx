import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Startups.scss';

import PopupContacts from '../../components/PopupContacts';
import { useTabletLargeQuery } from '../../hooks/useMediaQuery';
import { startupURLs } from './data/startupsURLs';
import { IdeaInfo } from './components/IdeaInfo';
// import useDocumentTitle from '../../hooks/useDocumentTitle';
interface IdeaGeneralProps {
	TabRu: JSX.Element;
	TabEn: JSX.Element;
	TabUa: JSX.Element;
	Slider: JSX.Element;
}

// Define the BeforeInstallPromptEvent type
interface BeforeInstallPromptEvent extends Event {
	readonly platforms: string[];
	readonly userChoice: Promise<{
		outcome: 'accepted' | 'dismissed';
		platform: string;
	}>;
	prompt(): void;
}

const Startup = ({ TabRu, TabEn, TabUa, Slider }: IdeaGeneralProps) => {
	// useDocumentTitle({ defaultTitle: 'The Corp .!.' });
	const useTabletLarge = useTabletLargeQuery();
	const [currentTab, setCurrentTab] = useState('');

	useEffect(() => {
		const currentIndex = localStorage.getItem('currentIndex');

		setCurrentTab(currentIndex ? currentIndex : '1');
	}, []);

	const handleTabClick = (tabId: string) => {
		setCurrentTab(tabId);
		localStorage.setItem('currentIndex', tabId);
	};

	// Tabs content
	const tabs = [
		{
			id: '1',
			title: 'en',
			content: TabEn,
		},
		{
			id: '3',
			title: 'ua',
			content: TabUa,
		},
		{
			id: '2',
			title: 'ru',
			content: TabRu,
		},
	];

	const [showPrompt, setShowPrompt] = useState(false);
	const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(
		null
	);

	useEffect(() => {
		const handleBeforeInstallPrompt = (e: Event) => {
			e.preventDefault();
			setShowPrompt(true);
			setDeferredPrompt(e as BeforeInstallPromptEvent);
		};

		window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

		return () => {
			window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
		};
	}, []);

	const handleAddToHomeScreen = () => {
		if (showPrompt && deferredPrompt) {
			deferredPrompt.prompt();

			deferredPrompt.userChoice.then((choiceResult: any) => {
				if (choiceResult.outcome === 'accepted') {
					console.log('User accepted the install prompt');
					// Provide feedback to the user about the successful installation
				} else {
					console.log('User dismissed the install prompt');
					// Provide feedback to the user about the dismissed prompt
				}
			});

			setShowPrompt(false);
		}
	};

	return (
		<div className='wrapper wrapper--idea'>
			<div className='startup-pages'>
				<div className='idea-tabs idea-tabs--urls'>
					{startupURLs.map(({ pageLink, pageName }, i) => (
						<NavLink to={pageLink} end className={`idea-tabs__btn`} key={i}>
							{pageName}
						</NavLink>
					))}
				</div>
			</div>

			<div className='idea-section'>
				{/* Get in touch contacts */}
				{useTabletLarge && <PopupContacts />}

				<IdeaInfo
					tabs={tabs}
					currentTab={currentTab}
					handleTabClick={handleTabClick}
					useTabletLarge={useTabletLarge}
				/>

				{/* slider with images */}
				{Slider}
			</div>

			<div className=''>
				<button className='fixed' onClick={handleAddToHomeScreen}>
					Add to Home Screen
				</button>
			</div>
		</div>
	);
};

export default Startup;
