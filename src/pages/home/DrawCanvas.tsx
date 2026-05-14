import { useEffect, useRef } from 'react';

import myImage from '../../assets/home/photo.png';
import illustrationImage from '../../assets/home/photo-drawing.png';

interface Point {
	time: number;
	x: number;
	y: number;
}

const POINT_LIFETIME = 1000;
const BRUSH_WIDTH = 96;
const MIN_DIST = 2;

export default function DrawCanvas() {
	const containerRef = useRef<HTMLDivElement>(null);
	const wrapperRef = useRef<HTMLDivElement>(null);
	const imageRef = useRef<HTMLImageElement>(null);

	useEffect(() => {
		const container = containerRef.current;
		const wrapper = wrapperRef.current;
		const image = imageRef.current;

		if (!container || !wrapper || !image) return;

		const canvas = document.createElement('canvas');
		const mask = document.createElement('canvas');
		const ctx = canvas.getContext('2d');
		const maskCtx = mask.getContext('2d');

		if (!ctx || !maskCtx) return;

		let rafId = 0;
		let points: Point[] = [];
		let width = 0;
		let height = 0;
		let lastX: number | null = null;
		let lastY: number | null = null;

		const resize = () => {
			width = container.offsetWidth;
			height = container.offsetHeight;

			[canvas, mask].forEach((c) => {
				c.width = width;
				c.height = height;
				c.style.width = `${width}px`;
				c.style.height = `${height}px`;
			});
		};

		const addPoint = (clientX: number, clientY: number, isNewStroke = false) => {
			const rect = canvas.getBoundingClientRect();
			const x = clientX - rect.left;
			const y = clientY - rect.top;

			if (isNewStroke) {
				lastX = null;
				lastY = null;
			}

			if (lastX !== null && lastY !== null) {
				const dx = x - lastX;
				const dy = y - lastY;
				if (dx * dx + dy * dy < MIN_DIST * MIN_DIST) return;
			}

			lastX = x;
			lastY = y;
			points.push({ time: performance.now(), x, y });
		};

		const onMouseMove = (e: MouseEvent) => addPoint(e.clientX, e.clientY);

		const onTouchStart = (e: TouchEvent) => {
			const touch = e.touches[0];
			if (touch) addPoint(touch.clientX, touch.clientY, true);
		};

		const onTouchMove = (e: TouchEvent) => {
			const touch = e.touches[0];
			if (touch) addPoint(touch.clientX, touch.clientY);
		};

		const drawMask = (now: number) => {
			maskCtx.clearRect(0, 0, width, height);
			maskCtx.lineCap = 'round';
			maskCtx.lineJoin = 'round';
			maskCtx.lineWidth = BRUSH_WIDTH;

			for (let i = 0; i < points.length; i++) {
				const p = points[i];
				const alpha = 1 - (now - p.time) / POINT_LIFETIME;

				if (alpha <= 0) continue;

				maskCtx.fillStyle = `rgba(0,0,0,${alpha})`;
				maskCtx.beginPath();
				maskCtx.arc(p.x, p.y, BRUSH_WIDTH / 2, 0, Math.PI * 2);
				maskCtx.fill();

				if (i > 0) {
					const prev = points[i - 1];
					maskCtx.strokeStyle = `rgba(0,0,0,${alpha})`;
					maskCtx.beginPath();
					maskCtx.moveTo(prev.x, prev.y);
					maskCtx.lineTo(p.x, p.y);
					maskCtx.stroke();
				}
			}
		};

		const drawImage = () => {
			ctx.clearRect(0, 0, width, height);

			let imgW = width;
			let imgH = (width / image.naturalWidth) * image.naturalHeight;

			if (imgH < height) {
				imgW = (height / image.naturalHeight) * image.naturalWidth;
				imgH = height;
			}

			ctx.globalCompositeOperation = 'source-over';
			ctx.drawImage(image, (width - imgW) / 2, (height - imgH) / 2, imgW, imgH);

			ctx.globalCompositeOperation = 'destination-in';
			ctx.drawImage(mask, 0, 0, width, height);
		};

		const tick = () => {
			const now = performance.now();
			points = points.filter((p) => now - p.time < POINT_LIFETIME);

			if (points.length === 0) {
				lastX = null;
				lastY = null;
			}

			drawMask(now);
			drawImage();
			rafId = requestAnimationFrame(tick);
		};

		const start = () => {
			wrapper.appendChild(canvas);
			canvas.addEventListener('mousemove', onMouseMove);
			canvas.addEventListener('touchstart', onTouchStart, { passive: true });
			canvas.addEventListener('touchmove', onTouchMove, { passive: true });
			window.addEventListener('resize', resize);

			resize();
			tick();
		};

		if (image.complete) {
			start();
		} else {
			image.addEventListener('load', start, { once: true });
		}

		return () => {
			cancelAnimationFrame(rafId);
			image.removeEventListener('load', start);
			canvas.removeEventListener('mousemove', onMouseMove);
			canvas.removeEventListener('touchstart', onTouchStart);
			canvas.removeEventListener('touchmove', onTouchMove);
			window.removeEventListener('resize', resize);
			canvas.remove();
		};
	}, []);

	return (
		<div ref={containerRef} className='photoContainer'>
			<div ref={wrapperRef} className='drawCanvas' style={{ backgroundImage: `url(${myImage})` }}>
				<img
					ref={imageRef}
					className='illustrationImage'
					src={illustrationImage}
					alt='Hand-drawn digital portrait illustration of Tsiomakh Olexander (Цьомах Олександр Віталійович), Frontend Developer, Writer, Screenwriter'
				/>
			</div>
		</div>
	);
}
