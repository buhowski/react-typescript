// Refactored MarkdownBlock - Final version with new logic
import React, { useState, useEffect, useRef, memo, Children } from 'react';
import ReactMarkdown, { Components } from 'react-markdown';
import { useTabletLargeQuery } from '../../../config/useMediaQuery';
import Slider from '../../../components/Slider';
import { MarkdownBlockProps } from '../../../types/common';
import Preloader from '../../../components/Preloader';

// Checks if content is HTML
const isHtmlDocument = (str: string) =>
	str.trim().startsWith('<!DOCTYPE html>') ||
	str.trim().startsWith('<html') ||
	str.trim().includes('<body');

// Generates unique slugs with a local counter
const createSlugify = () => {
	const slugCounters: { [key: string]: number } = {};
	return (text: string) => {
		let baseSlug = text
			.toLowerCase()
			.replace(/[^\w\s-]/g, '')
			.replace(/[\s_-]+/g, '-')
			.replace(/^-+|-+$/g, '');

		if (!baseSlug) baseSlug = 'section';
		const count = slugCounters[baseSlug] ?? 0;
		slugCounters[baseSlug] = count + 1;
		return count > 0 ? `${baseSlug}-${count}` : baseSlug;
	};
};

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
		const slugifyRef = useRef(createSlugify());

		// Fetches markdown content on src change
		useEffect(() => {
			let isCanceled = false;
			const textClearTimer = setTimeout(() => {
				if (!isCanceled) {
					setText('');
				}
			}, 220); // Text Loader Delay

			setHasError(false);
			onError?.(false);
			collectedHeadingsRef.current = [];
			slugifyRef.current = createSlugify();

			if (!src) {
				setHasError(true);
				onError?.(true);
				setText('');
				clearTimeout(textClearTimer);
				return;
			}

			fetch(src)
				.then((res) => {
					if (!res.ok) throw new Error(`HTTP ${res.status} for ${src}`);
					return res.text();
				})
				.then((fetchedText) => {
					if (isCanceled) return;
					if (isHtmlDocument(fetchedText)) {
						throw new Error(`Content is HTML, not Markdown. Path: ${src}`);
					}
					setText(fetchedText);
					clearTimeout(textClearTimer);
				})
				.catch((err) => {
					if (isCanceled) return;
					console.error('Markdown fetch error:', err);
					setText(''); // Clear old text on error
					setHasError(true);
					onError?.(true);
					clearTimeout(textClearTimer);
				});

			// Cleanup function to avoid memory leaks
			return () => {
				isCanceled = true;
				clearTimeout(textClearTimer);
			};
		}, [src, onError, pitchIndex]);

		// Pass extracted headings to parent
		useEffect(() => {
			if (onHeadingsExtracted && collectedHeadingsRef.current.length > 0) {
				onHeadingsExtracted(collectedHeadingsRef.current);
			}
		}, [text, onHeadingsExtracted]);

		// Helper to extract plain text from nested children
		const extractText = (node: React.ReactNode): string => {
			if (typeof node === 'string') return node;
			if (Array.isArray(node)) return node.map(extractText).join('');
			if (React.isValidElement(node)) return extractText(node.props.children);
			return '';
		};

		// Custom heading renderer
		const renderHeading = (children: React.ReactNode, level: number) => {
			const rawText = extractText(children);
			const slug = slugifyRef.current(rawText);
			const id = `h${level}-${pitchIndex}-${slug}`;

			collectedHeadingsRef.current.push({ text: rawText, level, id });

			const Tag = `h${level}` as keyof JSX.IntrinsicElements;
			return <Tag id={id}>{children}</Tag>;
		};

		// Custom renderers for markdown
		const components: Components = {
			h1: ({ children }) => renderHeading(children, 1),
			h2: ({ children }) => renderHeading(children, 2),
			h3: ({ children }) => renderHeading(children, 3),
			p: ({ children }) => {
				const childArray = Children.toArray(children);
				const mobileSliderTag = '[mobile-slider]';
				if (
					childArray.length === 1 &&
					typeof childArray[0] === 'string' &&
					childArray[0].trim() === mobileSliderTag
				) {
					return useTabletLarge ? (
						<Slider slides={sliderContent || []} currentLanguage={currentLanguage} />
					) : null;
				}

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

		// Renders loader, error, or content
		if (!text && hasError) {
			return null;
		}

		if (!text && !hasError) {
			return (
				<div className='markdown-loading'>
					<Preloader />
				</div>
			);
		}

		return <ReactMarkdown components={components}>{text}</ReactMarkdown>;
	}
);

export default MarkdownBlock;
