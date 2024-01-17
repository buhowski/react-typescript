import React, { useState, useEffect } from 'react';
import SimpleBar from 'simplebar-react';
import Copyright from './Copyright';
import SliderContainer from './Slider';
import { useTabletLargeQuery } from '../../hooks/useMediaQuery';

interface IdeaGeneralProps {
	IdeaTabRu: JSX.Element;
	IdeaTabEn: JSX.Element;
	IdeaTabUa: JSX.Element;
	baseTitle: string;
	contactBtnTitle: string;
}

const IdeaGeneral = ({
	IdeaTabRu,
	IdeaTabEn,
	IdeaTabUa,
	baseTitle,
}: IdeaGeneralProps) => {
	const useTabletLarge = useTabletLargeQuery();
	const [currentTab, setCurrentTab] = useState('');
	const tabs = [
		{
			id: '1',
			title: 'en',
			content: IdeaTabEn,
		},
		{
			id: '3',
			title: 'ua',
			content: IdeaTabUa,
		},
		{
			id: '2',
			title: 'ru',
			content: IdeaTabRu,
		},
	];

	const handleTabClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		const target = e.currentTarget;
		const tabId = target.getAttribute('data-tab-id');

		setCurrentTab(tabId ?? '');

		localStorage.setItem('currentIndex', String(tabId));
	};

	useEffect(() => {
		const currentIndex = localStorage.getItem('currentIndex');

		setCurrentTab(currentIndex ? currentIndex : '1');
	}, []);

	return (
		<div className='wrapper wrapper--idea'>
			<div className='startup-highlight'>
				<p className='startup-highlight__text'>
					This project is looking for investment or any help with development and
					promotion. If you're interested in collaborating, feel free to contact me!
				</p>
			</div>

			<h1 className='base-title base-title--main'>{baseTitle}</h1>

			<div className='idea-section'>
				<Copyright />

				<div className='idea-info'>
					<div className='idea-tabs'>
						{/* Here goes tab items*/}
						{tabs.map((tab) => (
							<button
								className='idea-tabs__btn'
								key={tab.id}
								data-tab-id={tab.id}
								data-active={currentTab === tab.id}
								onClick={handleTabClick}
							>
								{tab.title}
							</button>
						))}
					</div>

					{/* Here goes tabs content */}
					{useTabletLarge ? (
						tabs.map((tab) => (
							<div
								key={tab.id}
								data-tab-id={tab.id}
								className='idea-content'
								data-active={currentTab === tab.id}
							>
								{currentTab === tab.id && tab.content}
							</div>
						))
					) : (
						<SimpleBar style={{ height: '100%' }} autoHide={false}>
							{tabs.map((tab) => (
								<div
									key={tab.id}
									data-tab-id={tab.id}
									className='idea-content'
									data-active={currentTab === tab.id}
								>
									{currentTab === tab.id && tab.content}
								</div>
							))}
						</SimpleBar>
					)}
				</div>

				<SliderContainer />
			</div>
		</div>
	);
};

export default IdeaGeneral;
