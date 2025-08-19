import React, { forwardRef, useCallback, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import MarkdownBlock from './MarkdownBlock';
import { PitchContainerProps } from '../../../types/common';

const PitchContainer = React.memo(
	forwardRef<HTMLDivElement, PitchContainerProps>(
		({ structure, currentLanguage, sliderContent, index, onHeadingsExtracted }, ref) => {
			// State to track if there was an error loading the markdown content
			const [markdownLoadError, setMarkdownLoadError] = useState(false);

			// Reset markdownLoadError when the markdownAPI source changes
			useEffect(() => {
				setMarkdownLoadError(false);
			}, [structure.markdownAPI]);

			// Callback to forward extracted headings to the parent component
			const handleHeadings = useCallback(
				(headings: { text: string; level: number; id: string }[]) => {
					onHeadingsExtracted?.(index, headings);
				},
				[index, onHeadingsExtracted]
			);

			// Determine if an error message should be displayed for the markdown content
			const shouldShowErrorMessage =
				!structure.markdownAPI ||
				(typeof structure.markdownAPI === 'string'
					? structure.markdownAPI.trim() === ''
					: structure.markdownAPI.every((s) => !s || s.trim() === '')) ||
				markdownLoadError;

			return (
				<section ref={ref} className={`pitch-container`}>
					{/* Render markdown content block or error message based on loading status */}
					<div className='idea-block'>
						{shouldShowErrorMessage ? (
							<p style={{ textAlign: 'center', textTransform: 'uppercase' }}>
								ERROR: Text not found
							</p>
						) : (
							// Handle both string and array of strings
							(Array.isArray(structure.markdownAPI)
								? structure.markdownAPI
								: [structure.markdownAPI]
							)
								.filter((src): src is string => !!src)
								.map((src, idx) => (
									<MarkdownBlock
										key={idx}
										src={src}
										sliderContent={sliderContent}
										currentLanguage={currentLanguage}
										onError={setMarkdownLoadError}
										onHeadingsExtracted={handleHeadings}
										pitchIndex={index}
									/>
								))
						)}
					</div>

					{/* Render "read more" link if a filmsPreviewUrl is provided */}
					{structure.filmsPreviewUrl && (
						<div className='idea-block__action'>
							<NavLink to={structure.filmsPreviewUrl} className='idea-block__more'>
								read more
							</NavLink>
						</div>
					)}
				</section>
			);
		}
	)
);

export default PitchContainer;
