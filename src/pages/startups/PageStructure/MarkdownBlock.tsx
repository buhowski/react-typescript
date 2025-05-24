import React from 'react';
import ReactMarkdown, { Components } from 'react-markdown';
import { useTabletLargeQuery } from '../../../config/useMediaQuery';
import Slider from '../../../components/Slider';
import { MarkdownBlockProps } from '../../../types/common';

const MarkdownBlock = React.memo(({ src, sliderContent, currentLanguage }: MarkdownBlockProps) => {
	const [text, setText] = React.useState('');
	const useTabletLarge = useTabletLargeQuery();

	React.useEffect(() => {
		fetch(src)
			.then((res) => res.text())
			.then(setText);
	}, [src]);

	const components: Components = {
		p({ children }) {
			const childArray = React.Children.toArray(children);

			if (
				childArray.length === 1 &&
				typeof childArray[0] === 'string' &&
				// use to render slider = [mobile-slider]
				childArray[0].trim() === '[mobile-slider]'
			) {
				return useTabletLarge ? (
					<Slider slides={sliderContent || []} currentLanguage={currentLanguage} />
				) : null;
			}

			return <p>{children}</p>;
		},

		a({ href, children }) {
			return (
				<a href={href} target='_blank' rel='noopener noreferrer'>
					<span>{children}</span>
				</a>
			);
		},
	};

	return <ReactMarkdown components={components}>{text}</ReactMarkdown>;
});

export default MarkdownBlock;
