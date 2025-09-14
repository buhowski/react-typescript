import React, { forwardRef, useCallback, useState, useEffect, lazy, Suspense } from 'react';
import { NavLink } from 'react-router-dom';
import { PitchContainerProps } from '../../../types/common';
import Preloader from '../../../components/Preloader';

const LazyMarkdownBlock = lazy(() => import('./MarkdownBlock'));

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
				<section ref={ref} className='pitch-container'>
					{/* Render markdown content block or error message based on loading status */}
					<div className='idea-block' lang={currentLanguage}>
						{shouldShowErrorMessage ? (
							<p style={{ textAlign: 'center', textTransform: 'uppercase' }}>
								ERROR: Text not found
							</p>
						) : (
							<Suspense
								fallback={
									<div className='markdown-loading'>
										<Preloader />
									</div>
								}
							>
								<LazyMarkdownBlock
									src={structure.markdownAPI!}
									sliderContent={sliderContent}
									currentLanguage={currentLanguage}
									onError={setMarkdownLoadError}
									onHeadingsExtracted={handleHeadings}
									pitchIndex={index}
								/>
							</Suspense>
						)}
					</div>

					{/* Render "read more" link if a pagePreviewUrl is provided */}
					{structure.pagePreviewUrl && (
						<div className='idea-block__action'>
							<NavLink to={structure.pagePreviewUrl} className='idea-block__more'>
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
