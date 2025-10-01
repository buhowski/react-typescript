// TableOfContent.tsx
import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import Preloader from '../../../components/Preloader';
import { TocProps } from '../../../types/common';

// TableOfContent component
const TableOfContent: React.FC<TocProps> = ({
	onSelectIndex,
	activeHeadingId,
	headings,
	isLoadingContent,
}) => {
	const [isTocOpen, setIsTocOpen] = useState(false);
	const [listHeight, setListHeight] = useState(0);

	const tocRef = useRef<HTMLDivElement>(null);
	const listRef = useRef<HTMLDivElement>(null);
	const innerRef = useRef<HTMLDivElement>(null);

	// Toggle TOC open/close
	const toggleToc = () => setIsTocOpen((prev) => !prev);

	// Update TOC height dynamically
	useLayoutEffect(() => {
		if (!innerRef.current) return;

		const extraHeight = window.innerWidth <= 1280 ? 60 : 0;
		setListHeight(isTocOpen ? innerRef.current.scrollHeight + extraHeight : 0);
	}, [isTocOpen, headings, isLoadingContent]);

	// Close TOC on outside click
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (tocRef.current && !tocRef.current.contains(event.target as Node) && isTocOpen) {
				setIsTocOpen(false);
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, [isTocOpen]);

	// Determine TOC content
	const tocContent =
		!isLoadingContent && headings.length > 0 ? (
			headings.map((heading) => (
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
						data-text={heading.text}
					>
						{heading.text}
					</mark>
				</button>
			))
		) : isTocOpen && isLoadingContent ? (
			<div className='toc-loading'>
				<Preloader />
			</div>
		) : isTocOpen && !isLoadingContent && headings.length === 0 ? (
			<p className='toc-message'>Nothing, reload page!</p>
		) : null;

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
						<div className='table-content__wrapper'>{tocContent}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TableOfContent;
