import React, { useState, useRef, useEffect, useLayoutEffect, useMemo } from 'react';
import Preloader from '../../../components/Preloader';
import { TocProps } from '../../../types/common';

const tocErrorText = (
	<p className='toc-message'>
		Oops, nothing here
		<span>Reload page</span>
	</p>
);

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

	const toggleToc = () => setIsTocOpen((prev) => !prev);

	// Update TOC height dynamically
	useLayoutEffect(() => {
		if (!innerRef.current) return;
		const extraHeight = window.innerWidth <= 1280 ? 63 : 2;
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

	// Memoized TOC content
	const tocContent = useMemo(() => {
		// Show loader if content is fetching or initial headings not yet extracted
		if (isTocOpen && isLoadingContent) {
			return (
				<div className='toc-loading'>
					<Preloader />
				</div>
			);
		}

		// Render list if headings exist
		if (!isLoadingContent && headings.length > 0) {
			return headings.map((heading) => (
				<button
					key={heading.id}
					onClick={() => onSelectIndex(heading.id)}
					className={activeHeadingId === heading.id ? 'is-active' : ''}
				>
					<mark className={`h${heading.level}-toc-item`}>{heading.text}</mark>
				</button>
			));
		}

		// Show error only when open and definitely empty
		if (isTocOpen && !isLoadingContent && headings.length === 0) {
			return tocErrorText;
		}

		return null;
	}, [isLoadingContent, headings, activeHeadingId, onSelectIndex, isTocOpen]);

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
