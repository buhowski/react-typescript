import React, { useState, useRef } from 'react';
import { TocProps } from '../../../types/common';

const TableOfContent: React.FC<TocProps> = ({ contentLength, onSelectIndex, activeIndex }) => {
	const [isTocOpen, setIsTocOpen] = useState(false);
	const tocRef = useRef<HTMLDivElement>(null);

	const toggleToc = () => setIsTocOpen((prev) => !prev);

	if (contentLength <= 1) return null;

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

			<div className='table-content__list'>
				<div className='table-content__inner'>
					<div className='table-content__wrapper'>
						<span>Table of Content</span>

						{Array.from({ length: contentLength }).map((_, index) => (
							<button
								key={index}
								onClick={() => onSelectIndex(index)}
								className={activeIndex === index ? 'is-active' : ''}
							>
								<mark>Title</mark>
							</button>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default TableOfContent;
