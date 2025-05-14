import { forwardRef } from 'react';
import { Block } from '../data/textTypes';
import { Title, PitchInfo, Text, ListTitle, List, LastWords } from './IdeaElements';
import { NavLink } from 'react-router-dom';

interface PitchContainerProps {
	structure: {
		pitchNumber?: string;
		pitchTitle?: string;
		pitchInfo?: { key: string; value: string }[];
		textBlock: Block[];
		lastWords?: string;
		filmsPreviewUrl?: string;
	};

	index: number;
	useTabletLarge: boolean;
	slider?: JSX.Element;
}

const PitchContainer = forwardRef<HTMLDivElement, PitchContainerProps>(
	({ structure, index, useTabletLarge, slider }, ref) => {
		return (
			<div key={index} ref={ref} className={`pitch-container`}>
				{structure.pitchNumber && <p className='pitch-number'>{structure.pitchNumber}</p>}

				{structure.pitchTitle && (
					<Title titleClassname='headline__title' title={structure.pitchTitle} />
				)}

				{structure.pitchInfo && <PitchInfo pitchInfo={structure.pitchInfo} />}

				{/* {structure.filmsPreviewUrl && useTabletLarge && Slider} */}
				{structure.filmsPreviewUrl && slider && slider}

				{structure.textBlock.map((block, blockIndex) => (
					<div className='idea-block' key={blockIndex}>
						{block.title && <Title titleClassname='idea-block__title' title={block.title} />}
						{block.text && <Text text={block.text} />}

						{!structure.filmsPreviewUrl && useTabletLarge && blockIndex === 0 && slider}

						{block.listBlock &&
							block.listBlock.map((item, listIndex) => (
								<div className='idea-block__list' key={listIndex}>
									{item.title && <ListTitle title={item.title} />}

									{item.text && <List listItems={item.text} />}
								</div>
							))}
					</div>
				))}

				{structure.filmsPreviewUrl && (
					<div className='idea-block__action'>
						<NavLink to={structure.filmsPreviewUrl} className='idea-block__more'>
							read more
						</NavLink>
					</div>
				)}

				{structure.lastWords && <LastWords lastWords={structure.lastWords} />}
			</div>
		);
	}
);

export default PitchContainer;
