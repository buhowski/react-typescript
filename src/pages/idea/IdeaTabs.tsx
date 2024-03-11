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
	const scrollableRef = useRef<HTMLDivElement>(null);

	// Pointer scroll logic for drag SimpleBar content
	const isDrag = useRef(false);
	const startY = useRef(0);

	const handleDragStart = (e: PointerEvent) => {
		// Check for ref existence
		if (!scrollableRef.current) return;
		isDrag.current = true;

		// Track starting Y position
		startY.current = e.clientY;
	};

	const handleDragEnd = () => {
		isDrag.current = false;
	};

	const handleDrag = (e: PointerEvent) => {
		if (!isDrag.current || !scrollableRef.current) return;
		const movementY = e.clientY - startY.current;

		// Update scrollTop
		scrollableRef.current.scrollTop -= movementY;
		startY.current = e.clientY;
	};

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

		// for mouse dragging scroll
		const element = scrollableRef.current;

		if (element) {
			element.addEventListener('pointerdown', handleDragStart);
			element.addEventListener('pointerup', handleDragEnd);
			element.addEventListener('pointermove', handleDrag);
		}

		return () => {
			if (element) {
				element.removeEventListener('pointerdown', handleDragStart);
				element.removeEventListener('pointerup', handleDragEnd);
				element.removeEventListener('pointermove', handleDrag);
			}
		};
	}, [scrollableRef]);

	return (
		<div className='wrapper wrapper--idea'>
			<div className='idea-section'>
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
						<SimpleBar
							style={{ height: '100%' }}
							autoHide={false}
							scrollableNodeProps={{ ref: scrollableRef }}
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

				<SliderContainer />
			</div>
		</div>
	);
};

export default IdeaGeneral;
