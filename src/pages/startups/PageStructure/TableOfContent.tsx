import React, { useState, useRef, useEffect } from 'react';
import { TocProps } from '../../../types/common';

const TableOfContent: React.FC<TocProps> = ({ onSelectIndex, activeHeadingId, headings }) => {
	const [isTocOpen, setIsTocOpen] = useState(false);
	const tocRef = useRef<HTMLDivElement>(null);
	const listRef = useRef<HTMLDivElement>(null);

	const toggleToc = () => setIsTocOpen((prev) => !prev);

	// Scrolls the TOC list to make the active item visible
	useEffect(() => {
		if (!isTocOpen || !listRef.current) return;

		const listElement = listRef.current;
		const activeButton = listElement.querySelector('button.is-active') as HTMLButtonElement | null;

		if (activeButton) {
			const listRect = listElement.getBoundingClientRect();
			const buttonRect = activeButton.getBoundingClientRect();

			// Scroll if the active button is out of view
			if (buttonRect.top < listRect.top || buttonRect.bottom > listRect.bottom) {
				listElement.scrollTo({
					top:
						activeButton.offsetTop -
						listElement.offsetTop -
						listRect.height / 2 +
						buttonRect.height / 2,
					behavior: 'smooth',
				});
			}
		}
	}, [activeHeadingId, isTocOpen, headings]);

	// Closes the Table of Content when a click occurs outside of it
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (tocRef.current && !tocRef.current.contains(event.target as Node) && isTocOpen) {
				setIsTocOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isTocOpen]);

	return (
		<div className={`table-content ${isTocOpen ? 'is-open' : ''}`} ref={tocRef}>
			<button className='table-content__btn' onClick={toggleToc}>
				<mark>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</mark>
				<span>Table Of Content</span>
			</button>

			<div className='table-content__list' ref={listRef}>
				<div className='table-content__inner'>
					<div className='table-content__wrapper'>
						<span>Table of Content</span>

						{headings.map((heading) => (
							<button
								key={heading.id}
								onClick={() => onSelectIndex(heading.id)}
								className={activeHeadingId === heading.id ? 'is-active' : ''}
							>
								<mark
									className={
										heading.level === 1
											? 'h1-toc-item'
											: heading.level === 2
											? 'h2-toc-item'
											: 'h3-toc-item'
									}
								>
									{heading.text}
								</mark>
							</button>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default TableOfContent;
