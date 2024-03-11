import React, { useRef, useState, useEffect } from 'react';
import SimpleBar from 'simplebar-react';
import PopupContacts from './PopupContacts';
import SliderContainer from './Slider';
import { useTabletLargeQuery } from '../../hooks/useMediaQuery';

interface IdeaGeneralProps {
	IdeaTabRu: JSX.Element;
	IdeaTabEn: JSX.Element;
	IdeaTabUa: JSX.Element;
}

const IdeaGeneral = ({ IdeaTabRu, IdeaTabEn, IdeaTabUa }: IdeaGeneralProps) => {
	const useTabletLarge = useTabletLargeQuery();
	const [currentTab, setCurrentTab] = useState('');

	// Click and drag to scroll vertically with mouse
	const scrollableRef = useRef<HTMLDivElement>(null);
	const [isDragging, setIsDragging] = useState(false);
	const [startY, setStartY] = useState(0);
	const [scrollTop, setScrollTop] = useState(0);

	const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
		setIsDragging(true);
		setStartY(event.clientY);
		setScrollTop(scrollableRef.current?.scrollTop || 0);
	};

	const handleMouseUp = () => {
		setIsDragging(false);
	};

	const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
		if (!isDragging) return;

		const deltaY = event.clientY - startY;
		scrollableRef.current!.scrollTop = scrollTop - deltaY;
	};

	// Tabs content
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
			<div className='idea-section'>
				{/* Get in touch contacts */}
				{useTabletLarge && <PopupContacts />}

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
						// for desktop custom scrollbar
						<SimpleBar
							style={{ height: '100%' }}
							autoHide={false}
							scrollableNodeProps={{ ref: scrollableRef }}
							onMouseDown={handleMouseDown}
							onMouseUp={handleMouseUp}
							onMouseMove={handleMouseMove}
						>
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

				{/* slider with images */}
				<SliderContainer />
			</div>
		</div>
	);
};

export default IdeaGeneral;
