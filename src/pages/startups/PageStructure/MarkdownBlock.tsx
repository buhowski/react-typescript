import React from 'react';
import ReactMarkdown, { Components } from 'react-markdown';

import { useTabletLargeQuery } from '../../../config/useMediaQuery';
import Slider from '../../../components/Slider';
import { MarkdownBlockProps } from '../../../types/common';

// Helper to check if string looks like an HTML document
const isHtmlDocument = (str: string) =>
	str.trim().startsWith('<!DOCTYPE html>') ||
	str.trim().startsWith('<html') ||
	str.trim().includes('<body');

const MarkdownBlock = React.memo(
	({ src, sliderContent, currentLanguage, onError }: MarkdownBlockProps) => {
		const [text, setText] = React.useState('');
		const [hasError, setHasError] = React.useState(false);
		const useTabletLarge = useTabletLargeQuery();

		React.useEffect(() => {
			setHasError(false);
			// Notify parent about reset error state
			onError?.(false);
			fetch(src)
				.then((res) => {
					if (!res.ok) throw new Error(`HTTP error: ${res.status} for ${src}`);
					return res.text();
				})
				.then((fetchedText) => {
					if (isHtmlDocument(fetchedText)) {
						throw new Error(`Content for ${src} is HTML, not Markdown.`);
					}
					setText(fetchedText);
				})
				.catch((err) => {
					console.error('Failed to load markdown:', err);
					setHasError(true);
					// Notify parent about the error
					onError?.(true);
				});
		}, [src, onError]); // Add onError to dependency array

		const components: Components = {
			p({ children }) {
				const childArray = React.Children.toArray(children);
				if (
					childArray.length === 1 &&
					typeof childArray[0] === 'string' &&
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

		// Render null if there's an error, letting the parent handle the error message
		if (hasError) return null;
		// If text is empty but no error, might be a valid empty markdown file, so also render null
		if (!text.trim()) return null;

		return <ReactMarkdown components={components}>{text}</ReactMarkdown>;
	}
);

export default MarkdownBlock;
