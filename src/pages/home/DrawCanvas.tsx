import { useEffect, useRef } from 'react';

import photoImage from '../../assets/home/photo.png';
import illustrationImage from '../../assets/home/photo-drawing.png';

interface TrailPoint {
	time: number;
	x: number;
	y: number;
	strokeStart: boolean; // true = first point of a new stroke, skip fill to prev
}

const MIN_DIST_SQ = 4; // MIN_DIST = 2px, squared for cheap distance check
const POINT_LIFETIME = 600;
const BRUSH_SIZE = 98; // brush diameter in px
const BRUSH_RADIUS = BRUSH_SIZE / 2;
const FILL_DENSITY = 0.1; // smaller = smoother trail (default = 0.5)
const FADE_CURVE = 1; // trail fade curve — 1 = linear, 2 = smooth, 3+ = sharp

// brush canvas over image
export default function DrawCanvas() {
	const containerRef = useRef<HTMLDivElement>(null);
	const canvasWrapperRef = useRef<HTMLDivElement>(null);
	const illustrationRef = useRef<HTMLImageElement>(null);

	useEffect(() => {
		const container = containerRef.current;
		const canvasWrapper = canvasWrapperRef.current;
		const illustration = illustrationRef.current;

		if (!container || !canvasWrapper || !illustration) return;

		const revealCanvas = document.createElement('canvas');
		const maskCanvas = document.createElement('canvas');
		const revealCtx = revealCanvas.getContext('2d');
		const maskCtx = maskCanvas.getContext('2d');

		if (!revealCtx || !maskCtx) return;

		let animFrameId = 0;
		let trailPoints: TrailPoint[] = [];
		let canvasW = 0;
		let canvasH = 0;
		let lastX: number | null = null;
		let lastY: number | null = null;

		const resetStroke = () => {
			lastX = null;
			lastY = null;
		};

		const resize = () => {
			canvasW = container.offsetWidth;
			canvasH = container.offsetHeight;

			for (const c of [revealCanvas, maskCanvas]) {
				c.width = canvasW;
				c.height = canvasH;
				c.style.width = `${canvasW}px`;
				c.style.height = `${canvasH}px`;
			}
		};

		const addPoint = (clientX: number, clientY: number, strokeStart = false) => {
			if (strokeStart) resetStroke();

			const rect = revealCanvas.getBoundingClientRect();
			const x = clientX - rect.left;
			const y = clientY - rect.top;

			if (lastX !== null && lastY !== null) {
				const dx = x - lastX;
				const dy = y - lastY;
				if (dx * dx + dy * dy < MIN_DIST_SQ) return;
			}

			const isStrokeStart = strokeStart || lastX === null;
			lastX = x;
			lastY = y;
			trailPoints.push({ time: performance.now(), x, y, strokeStart: isStrokeStart });
		};

		const onMouseMove = (e: MouseEvent) => addPoint(e.clientX, e.clientY);
		const onMouseLeave = () => resetStroke(); // prevents jump-line on canvas re-entry

		const onTouchStart = (e: TouchEvent) => {
			const touch = e.touches[0];
			if (touch) addPoint(touch.clientX, touch.clientY, true);
		};

		const onTouchMove = (e: TouchEvent) => {
			const touch = e.touches[0];
			if (touch) addPoint(touch.clientX, touch.clientY);
		};

		const drawMask = (now: number) => {
			maskCtx.clearRect(0, 0, canvasW, canvasH);

			for (let i = 0; i < trailPoints.length; i++) {
				const p = trailPoints[i];
				const alpha = Math.pow(1 - (now - p.time) / POINT_LIFETIME, FADE_CURVE);

				if (alpha <= 0) continue;

				maskCtx.fillStyle = `rgba(0,0,0,${alpha})`;
				maskCtx.beginPath();
				maskCtx.arc(p.x, p.y, BRUSH_RADIUS, 0, Math.PI * 2);
				maskCtx.fill();

				// fill gap between prev and current point with interpolated circles
				if (i > 0 && !p.strokeStart) {
					const prev = trailPoints[i - 1];
					const dx = p.x - prev.x;
					const dy = p.y - prev.y;
					const dist = Math.sqrt(dx * dx + dy * dy);
					const steps = Math.ceil(dist / (BRUSH_RADIUS * FILL_DENSITY));

					for (let s = 1; s < steps; s++) {
						const t = s / steps;
						maskCtx.beginPath();
						maskCtx.arc(prev.x + dx * t, prev.y + dy * t, BRUSH_RADIUS, 0, Math.PI * 2);
						maskCtx.fill();
					}
				}
			}
		};

		// FUNCTION: draw illustration clipped to mask (object-fit: cover behavior)
		const drawReveal = () => {
			revealCtx.clearRect(0, 0, canvasW, canvasH);

			let imgW = canvasW;
			let imgH = (canvasW / illustration.naturalWidth) * illustration.naturalHeight;

			if (imgH < canvasH) {
				imgW = (canvasH / illustration.naturalHeight) * illustration.naturalWidth;
				imgH = canvasH;
			}

			revealCtx.globalCompositeOperation = 'source-over';
			revealCtx.drawImage(illustration, (canvasW - imgW) / 2, (canvasH - imgH) / 2, imgW, imgH);

			revealCtx.globalCompositeOperation = 'destination-in';
			revealCtx.drawImage(maskCanvas, 0, 0, canvasW, canvasH);
		};

		const tick = () => {
			const now = performance.now();
			trailPoints = trailPoints.filter((p) => now - p.time < POINT_LIFETIME);

			if (trailPoints.length === 0) resetStroke();

			drawMask(now);
			drawReveal();
			animFrameId = requestAnimationFrame(tick);
		};

		const init = () => {
			canvasWrapper.appendChild(revealCanvas);
			revealCanvas.addEventListener('mousemove', onMouseMove);
			revealCanvas.addEventListener('mouseleave', onMouseLeave);
			revealCanvas.addEventListener('touchstart', onTouchStart, { passive: true });
			revealCanvas.addEventListener('touchmove', onTouchMove, { passive: true });
			window.addEventListener('resize', resize);

			resize();
			tick();
		};

		if (illustration.complete) {
			init();
		} else {
			illustration.addEventListener('load', init, { once: true });
		}

		return () => {
			cancelAnimationFrame(animFrameId);
			illustration.removeEventListener('load', init); // edge case: unmount before load
			revealCanvas.removeEventListener('mousemove', onMouseMove);
			revealCanvas.removeEventListener('mouseleave', onMouseLeave);
			revealCanvas.removeEventListener('touchstart', onTouchStart);
			revealCanvas.removeEventListener('touchmove', onTouchMove);
			window.removeEventListener('resize', resize);
			revealCanvas.remove();
		};
	}, []);

	return (
		<div ref={containerRef} className='photoContainer'>
			<div
				ref={canvasWrapperRef}
				className='drawCanvas'
				style={{ backgroundImage: `url(${photoImage})` }}
			>
				<img
					ref={illustrationRef}
					className='illustrationImage'
					src={illustrationImage}
					alt='Hand-drawn digital portrait illustration of Tsiomakh Olexander (Цьомах Олександр Віталійович), Frontend Developer, Writer, Screenwriter'
				/>
			</div>
		</div>
	);
}
