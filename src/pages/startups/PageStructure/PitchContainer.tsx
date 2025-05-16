import React, { forwardRef } from 'react';
import { NavLink } from 'react-router-dom';
import MarkdownBlock from './MarkdownBlock';

interface PitchContainerProps {
	structure: {
		markdownAPI?: string;
		filmsPreviewUrl?: string;
	};

	index: number;
	useTabletLarge: boolean;
	slider?: JSX.Element | null;
}

const PitchContainer = React.memo(
	forwardRef<HTMLDivElement, PitchContainerProps>(
		({ structure, index, useTabletLarge, slider }, ref) => {
			return (
				<div key={index} ref={ref} className={`pitch-container`}>
					{/* Markdown Text Structure */}
					{structure.markdownAPI && (
						<div className='idea-block idea-block--markdown'>
							<MarkdownBlock
								src={structure.markdownAPI}
								slider={slider}
								useTabletLarge={useTabletLarge}
							/>
						</div>
					)}

					{structure.filmsPreviewUrl && (
						<div className='idea-block__action'>
							<NavLink to={structure.filmsPreviewUrl} className='idea-block__more'>
								read more
							</NavLink>
						</div>
					)}
				</div>
			);
		}
	)
);
export default PitchContainer;
