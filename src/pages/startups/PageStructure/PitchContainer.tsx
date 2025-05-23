import React, { forwardRef } from 'react';
import { NavLink } from 'react-router-dom';
import MarkdownBlock from './MarkdownBlock';
import { LanguageCode, SlideItem } from '../../../types/common';

interface PitchContainerProps {
	structure: {
		markdownAPI?: string;
		filmsPreviewUrl?: string;
	};

	index: number;
	sliderContent?: SlideItem[];
	currentLanguage: LanguageCode;
}

const PitchContainer = React.memo(
	forwardRef<HTMLDivElement, PitchContainerProps>(
		({ structure, currentLanguage, sliderContent }, ref) => {
			return (
				<div ref={ref} className={`pitch-container`}>
					{/* Markdown Text Structure */}
					{structure.markdownAPI && (
						<div className='idea-block'>
							<MarkdownBlock
								src={structure.markdownAPI}
								sliderContent={sliderContent}
								currentLanguage={currentLanguage}
							/>
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
