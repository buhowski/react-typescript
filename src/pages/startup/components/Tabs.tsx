import { useState, useEffect } from 'react';
import SimpleBar from 'simplebar-react';
import PopupContacts from '../../../components/PopupContacts';
import Slider from './StartupSliderData';
import { useTabletLargeQuery } from '../../../hooks/useMediaQuery';
import { NavLink } from 'react-router-dom';
import { pathToStartup, pathToStartupFilms } from '../../../components/urlsData';

interface IdeaGeneralProps {
	TabRu: JSX.Element;
	TabEn: JSX.Element;
	TabUa: JSX.Element;
}

const Tabs = ({ TabRu, TabEn, TabUa }: IdeaGeneralProps) => {
	const useTabletLarge = useTabletLargeQuery();
	const [currentTab, setCurrentTab] = useState('');

	// Idea URLs
	const startupURLs = [
		{
			pageLink: pathToStartup,
			pageName: `Startup`,
		},
		{
			pageLink: pathToStartupFilms,
			pageName: `Film industry`,
		},
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

	const handleTabClick = (tabId: string) => {
		setCurrentTab(tabId);
		localStorage.setItem('currentIndex', tabId);
	};

	useEffect(() => {
		const currentIndex = localStorage.getItem('currentIndex');

		setCurrentTab(currentIndex ? currentIndex : '1');
	}, []);

	return (
		<div className='wrapper wrapper--idea'>
			<div className='idea-section'>
				{/* Get in touch contacts */}
				{useTabletLarge && <PopupContacts />}

				<div className='idea-info'>
					<div className='idea-tabs idea-tabs--lang'>
						{/* Here goes tab items*/}
						{tabs.map((tab) => (
							<button
								className={`idea-tabs__btn ${currentTab === tab.id ? 'active' : ''}`}
								key={tab.id}
								onClick={() => handleTabClick(tab.id)}
							>
								{tab.title}
							</button>
						))}
					</div>

					{/* Here goes tabs content */}
					{useTabletLarge ? (
						tabs.map((tab) => (
							<div key={tab.id} className='idea-content'>
								{currentTab === tab.id && tab.content}
							</div>
						))
					) : (
						// for desktop custom scrollbar
						<SimpleBar
							style={{ height: '100%', paddingRight: '35px' }}
							autoHide={false}
						>
							{tabs.map((tab) => (
								<div key={tab.id} className='idea-content'>
									{currentTab === tab.id && tab.content}
								</div>
							))}
						</SimpleBar>
					)}
				</div>

				{/* slider with images */}
				<Slider />
			</div>

			<div className='idea-tabs idea-tabs--urls'>
				{startupURLs.map(({ pageLink, pageName }, i) => (
					<NavLink to={pageLink} end className={`idea-tabs__btn`} key={i}>
						{pageName}
					</NavLink>
				))}
			</div>
		</div>
	);
};

export default Tabs;
