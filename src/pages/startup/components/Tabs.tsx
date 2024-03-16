import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import PopupContacts from '../../../components/PopupContacts';
import { useTabletLargeQuery } from '../../../hooks/useMediaQuery';
import {
	pathToStartup,
	pathToStartupFilms,
	// pathToStartupGames,
} from '../../../components/urlsData';
import { IdeaInfo } from './IdeaInfo';

interface IdeaGeneralProps {
	TabRu: JSX.Element;
	TabEn: JSX.Element;
	TabUa: JSX.Element;
	Slider: JSX.Element;
}

const Tabs = ({ TabRu, TabEn, TabUa, Slider }: IdeaGeneralProps) => {
	const useTabletLarge = useTabletLargeQuery();
	const [currentTab, setCurrentTab] = useState('1');

	useEffect(() => {
		const currentIndex = localStorage.getItem('currentIndex');

		setCurrentTab(currentIndex ? currentIndex : '1');
	}, []);

	const handleTabClick = (tabId: string) => {
		setCurrentTab(tabId);
		localStorage.setItem('currentIndex', tabId);
	};

	// Idea URLs
	const startupURLs = [
		{
			pageLink: pathToStartup,
			pageName: `Startup`,
		},
		{
			pageLink: pathToStartupFilms,
			pageName: `Films`,
		},
		// {
		// 	pageLink: pathToStartupGames,
		// 	pageName: `Games`,
		// },
	];

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
		</div>
	);
};

export default Tabs;
