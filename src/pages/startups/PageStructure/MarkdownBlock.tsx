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
		const useTabletLarge = useTabletLargeQuery();

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
				})
				.catch((err) => {
					console.error('Markdown fetch error:', err);
					setHasError(true);
					onError?.(true);
				});
		}, [src, onError, pitchIndex]);

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

		if (hasError || !text.trim()) return null;

		return <ReactMarkdown components={components}>{text}</ReactMarkdown>;
	}
);

export default MarkdownBlock;
