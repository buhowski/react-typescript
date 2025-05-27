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
				!structure.markdownAPI || structure.markdownAPI.trim() === '' || markdownLoadError;

			return (
				<div ref={ref} className={`pitch-container`}>
					{/* Render markdown content block or error message based on loading status */}
					<div className='idea-block'>
						{shouldShowErrorMessage ? (
							<p style={{ textAlign: 'center', textTransform: 'uppercase' }}>
								ERROR: Text not found
							</p>
						) : (
							<MarkdownBlock
								src={structure.markdownAPI!}
								sliderContent={sliderContent}
								currentLanguage={currentLanguage}
								onError={setMarkdownLoadError}
								onHeadingsExtracted={handleHeadings}
								pitchIndex={index}
							/>
						)}
					</div>

					{/* Render "read more" link if a filmsPreviewUrl is provided */}
					{structure.filmsPreviewUrl && (
						<div className='idea-block__action'>
							<NavLink to={structure.filmsPreviewUrl} className='idea-block__more'>
								<span>read more</span>
							</NavLink>
						</div>
					)}
				</div>
			);
		}
	)
);

export default PitchContainer;
