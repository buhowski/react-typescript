import React, { useState, useEffect, useRef, useCallback, memo, Children } from 'react';
import ReactMarkdown, { Components } from 'react-markdown';

import { useTabletLargeQuery } from '../../../config/useMediaQuery';
import Slider from '../../../components/Slider';

import { MarkdownBlockProps } from '../../../types/common';

// Check if fetched content is HTML instead of Markdown
const isHtmlDocument = (str: string) =>
	str.trim().startsWith('<!DOCTYPE html>') ||
	str.trim().startsWith('<html') ||
	str.trim().includes('<body');

const MarkdownBlock = memo(
	({
		src,
		sliderContent,
		currentLanguage,
		onError,
		onHeadingsExtracted,
		pitchIndex,
	}: MarkdownBlockProps) => {
		const [text, setText] = useState('');
		const [hasError, setHasError] = useState(false);
		// isLoading state: true initially to show loader on first mount
		const [isLoading, setIsLoading] = useState(true);
		const useTabletLarge = useTabletLargeQuery();

		// Ref to track if text has been loaded at least once
		const hasInitialTextLoadedRef = useRef(false);

		const collectedHeadingsRef = useRef<{ text: string; level: number; id: string }[]>([]);
		const slugCountersRef = useRef<{ [key: string]: number }>({});

		// Generate unique slugs with local counter
		const slugify = useCallback((text: string) => {
			let baseSlug = text
				.toLowerCase()
				.replace(/[^\w\s-]/g, '')
				.replace(/[\s_-]+/g, '-')
				.replace(/^-+|-+$/g, '');

			if (!baseSlug) baseSlug = 'section';

			const count = slugCountersRef.current[baseSlug] ?? 0;
			slugCountersRef.current[baseSlug] = count + 1;

			return count > 0 ? `${baseSlug}-${count}` : baseSlug;
		}, []);

		// Fetch markdown content on src change
		useEffect(() => {
			setHasError(false);
			onError?.(false);
			collectedHeadingsRef.current = [];
			slugCountersRef.current = {};

			// Only show loader if this is the *initial* content load for this component instance.
			// If content has already been loaded once (e.g., on language switch),
			// we keep the old text visible while fetching the new one.
			if (!hasInitialTextLoadedRef.current) {
				setIsLoading(true);
			}

			fetch(src)
				.then((res) => {
					if (!res.ok) throw new Error(`HTTP ${res.status} for ${src}`);
					return res.text();
				})
				.then((fetchedText) => {
					if (isHtmlDocument(fetchedText)) {
						throw new Error(`Content is HTML, not Markdown. Path: ${src}`);
					}
					setText(fetchedText);
					setIsLoading(false); // Stop loading regardless of whether it was set to true
					hasInitialTextLoadedRef.current = true; // Mark that initial content has been loaded
				})
				.catch((err) => {
					console.error('Markdown fetch error:', err);
					setHasError(true);
					setIsLoading(false); // Stop loading even on error
					onError?.(true);
				});
		}, [src, onError, pitchIndex]); // `src` is still a dependency to re-fetch content when it changes

		// Pass extracted headings to parent
		useEffect(() => {
			if (onHeadingsExtracted && collectedHeadingsRef.current.length > 0) {
				onHeadingsExtracted(collectedHeadingsRef.current);
			}
		}, [text, onHeadingsExtracted]);

		// Custom renderers for headings, links, and slider tag
		const components: Components = {
			h1: ({ children }) => renderHeading(children, 1),
			h2: ({ children }) => renderHeading(children, 2),
			h3: ({ children }) => renderHeading(children, 3),
			p: ({ children }) => {
				const childArray = Children.toArray(children);

				// mobile slider support
				if (
					childArray.length === 1 &&
					typeof childArray[0] === 'string' &&
					childArray[0].trim() === '[mobile-slider]'
				) {
					return useTabletLarge ? (
						<Slider slides={sliderContent || []} currentLanguage={currentLanguage} />
					) : null;
				}

				// check if any child is <em>
				const hasEm = childArray.some(
					(child) =>
						React.isValidElement(child) && typeof child.type === 'string' && child.type === 'em'
				);

				return <p className={hasEm ? 'description__has-em' : undefined}>{children}</p>;
			},
			a: ({ href, children }) => (
				<a href={href} target='_blank' rel='noopener noreferrer'>
					<span>{children}</span>
				</a>
			),
		};

		const renderHeading = (children: React.ReactNode, level: number) => {
			const rawText = Children.toArray(children).join('');
			const slug = slugify(rawText);
			const id = `h${level}-${pitchIndex}-${slug}`;

			collectedHeadingsRef.current.push({ text: rawText, level, id });

			const Tag = `h${level}` as keyof JSX.IntrinsicElements;

			return <Tag id={id}>{children}</Tag>;
		};

		// Render logic:
		// 1. Show loader ONLY if it's the initial load AND text hasn't been loaded yet.
		if (isLoading && !hasInitialTextLoadedRef.current) {
			return <h1>Loading content...</h1>; // Replace with your actual loader component/design
		}

		// 2. If there's an error OR text is empty/whitespace after (initial) loading, show nothing.
		if (hasError || !text.trim()) {
			return null; // Or return an error message component here
		}

		// 3. Otherwise, render the Markdown content.
		return <ReactMarkdown components={components}>{text}</ReactMarkdown>;
	}
);

export default MarkdownBlock;
