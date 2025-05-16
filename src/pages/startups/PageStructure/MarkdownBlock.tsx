import React from 'react';
import ReactMarkdown, { Components } from 'react-markdown';

interface MarkdownBlockProps {
	src: string;
	slider?: JSX.Element | null;
	useTabletLarge: boolean;
	filmsPreviewUrl?: string;
}

const MarkdownBlock = React.memo(
	({ src, slider, useTabletLarge, filmsPreviewUrl }: MarkdownBlockProps) => {
		const [text, setText] = React.useState('');

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
					// use in Notion Markdown to render slider = [mobile-slider]
					childArray[0].trim() === '[mobile-slider]'
				) {
					return useTabletLarge ? <>{slider}</> : null;
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
	}
);

export default MarkdownBlock;
