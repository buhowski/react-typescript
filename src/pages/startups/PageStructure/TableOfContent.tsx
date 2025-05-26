import React, { useState, useRef, useEffect } from 'react';
import { TocProps } from '../../../types/common';

const TableOfContent: React.FC<TocProps> = ({ onSelectIndex, activeHeadingId, headings }) => {
	const [isTocOpen, setIsTocOpen] = useState(false);
	const [listHeight, setListHeight] = useState(0); // store dynamic height

	const tocRef = useRef<HTMLDivElement>(null);
	const listRef = useRef<HTMLDivElement>(null);
	const innerRef = useRef<HTMLDivElement>(null); // content wrapper to measure

	// Toggle TOC
	const toggleToc = () => setIsTocOpen((prev) => !prev);

	// Update height on open/close
	useEffect(() => {
		if (isTocOpen && innerRef.current) {
			setListHeight(innerRef.current.scrollHeight);
		} else {
			setListHeight(0);
		}
	}, [isTocOpen, headings]);

	// Close on outside click
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (tocRef.current && !tocRef.current.contains(event.target as Node) && isTocOpen) {
				setIsTocOpen(false);
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, [isTocOpen]);

	return (
		<div className={`table-content ${isTocOpen ? 'is-open' : ''}`} ref={tocRef}>
			<button
				className='table-content__btn'
				onClick={toggleToc}
				aria-label='Toggle Table of Contents'
			>
				<mark>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</mark>

				<h3>Table of Content</h3>
			</button>

			<div className='table-content__list' ref={listRef} style={{ height: `${listHeight}px` }}>
				<h3 className='table-content__title'>Table of Content</h3>

				<div className='table-content__container'>
					<div className='table-content__inner' ref={innerRef}>
						<div className='table-content__wrapper'>
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
										// Fix Bold text state
										data-text={heading.text}
									>
										{heading.text}
									</mark>
								</button>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TableOfContent;
