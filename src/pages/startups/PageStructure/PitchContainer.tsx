import React, { forwardRef } from 'react';
import { NavLink } from 'react-router-dom';
import MarkdownBlock from './MarkdownBlock';
import { PitchContainerProps } from '../../../types/common';

const PitchContainer = React.memo(
	forwardRef<HTMLDivElement, PitchContainerProps>(
		({ structure, currentLanguage, sliderContent }, ref) => {
			const [markdownLoadError, setMarkdownLoadError] = React.useState(false);

			// Condition to determine if an error message should be displayed
			const shouldShowErrorMessage =
				!structure.markdownAPI || structure.markdownAPI.trim() === '' || markdownLoadError;

			return (
				<div ref={ref} className={`pitch-container`}>
					{/* Render the markdown block container if a markdown API path is potentially provided */}
					{structure.markdownAPI !== undefined && structure.markdownAPI !== null && (
						<div className='idea-block'>
							{shouldShowErrorMessage ? (
								// If there's an error (empty path, or load error), show the message
								<p style={{ textAlign: 'center', textTransform: 'uppercase' }}>
									ERROR: Text not found
								</p>
							) : (
								// Otherwise, render the MarkdownBlock
								<MarkdownBlock
									src={structure.markdownAPI}
									sliderContent={sliderContent}
									currentLanguage={currentLanguage}
									onError={setMarkdownLoadError}
								/>
							)}
						</div>
					)}

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
