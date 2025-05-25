import React, { forwardRef, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import MarkdownBlock from './MarkdownBlock';
import { PitchContainerProps } from '../../../types/common';

const PitchContainer = React.memo(
	forwardRef<HTMLDivElement, PitchContainerProps>(
		({ structure, currentLanguage, sliderContent, index, onHeadingsExtracted }, ref) => {
			const [markdownLoadError, setMarkdownLoadError] = React.useState(false);
			// Callback to extract headings from MarkdownBlock
			const handleHeadings = useCallback(
				(headings: { text: string; level: number; id: string }[]) => {
					onHeadingsExtracted?.(index, headings);
				},
				[index, onHeadingsExtracted]
			);
			// Determine if an error message should be displayed
			const shouldShowErrorMessage =
				!structure.markdownAPI || structure.markdownAPI.trim() === '' || markdownLoadError;

			return (
				<div ref={ref} className={`pitch-container`}>
					{structure.markdownAPI !== undefined && structure.markdownAPI !== null && (
						<div className='idea-block'>
							{shouldShowErrorMessage ? (
								<p style={{ textAlign: 'center', textTransform: 'uppercase' }}>
									ERROR: Text not found
								</p>
							) : (
								<MarkdownBlock
									src={structure.markdownAPI}
									sliderContent={sliderContent}
									currentLanguage={currentLanguage}
									onError={setMarkdownLoadError}
									onHeadingsExtracted={handleHeadings}
									pitchIndex={index}
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
