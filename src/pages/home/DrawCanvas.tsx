import { useEffect, useRef } from 'react';

import myImage from '../../assets/home/photo.png';
import illustrationImage from '../../assets/home/photo-drawing.png';

// COMPONENT: brush reveal — illustration appears on mousemove/touch over photo
interface Point {
	time: number;
	x: number;
	y: number;
}

const POINT_LIFETIME = 900; // Speed follow, ms
const BRUSH_WIDTH = 95; // brush size

const DrawCanvas = () => {
	const photoContainerRef = useRef<HTMLDivElement>(null);
	const drawCanvasRef = useRef<HTMLDivElement>(null);
	const imageRef = useRef<HTMLImageElement>(null);

	useEffect(() => {
		const photoContainer = photoContainerRef.current;
		const drawCanvasElement = drawCanvasRef.current;
		const image = imageRef.current;

		if (!photoContainer || !drawCanvasElement || !image) return;

		const imageCanvas = document.createElement('canvas');
		const lineCanvas = document.createElement('canvas');
		const imageCtx = imageCanvas.getContext('2d');
		const lineCtx = lineCanvas.getContext('2d');

		if (!imageCtx || !lineCtx) return;

		const dpr = window.devicePixelRatio || 1;
		let animationFrameId = 0;
		let points: Point[] = [];

		// FUNCTION: resize both canvases to container size with DPR
		const resizeCanvases = () => {
			const w = photoContainer.offsetWidth;
			const h = photoContainer.offsetHeight;

			for (const canvas of [imageCanvas, lineCanvas]) {
				canvas.width = w * dpr;
				canvas.height = h * dpr;
				canvas.style.width = `${w}px`;
				canvas.style.height = `${h}px`;
			}

			imageCtx.setTransform(1, 0, 0, 1, 0, 0);
			lineCtx.setTransform(1, 0, 0, 1, 0, 0);
			imageCtx.scale(dpr, dpr);
			lineCtx.scale(dpr, dpr);

			// TODO: SLOW DOWN ON MOBILE
			// imageCtx.imageSmoothingQuality = 'high';
		};

		// fresh getBoundingClientRect on every event — scroll-safe
		const addPoint = (clientX: number, clientY: number) => {
			const r = imageCanvas.getBoundingClientRect();
			points.push({
				time: Date.now(),
				x: clientX - r.left,
				y: clientY - r.top,
			});
		};

		const onMouseMove = (e: MouseEvent) => addPoint(e.clientX, e.clientY);

		const onTouchMove = (e: TouchEvent) => {
			const touch = e.targetTouches[0];
			if (touch) addPoint(touch.clientX, touch.clientY);
		};

		// FUNCTION: draw fading brush trail onto lineCanvas
		const drawLineCanvas = () => {
			const w = photoContainer.offsetWidth;
			const h = photoContainer.offsetHeight;
			const now = Date.now();

			lineCtx.clearRect(0, 0, w, h);
			lineCtx.lineCap = 'round';
			lineCtx.lineJoin = 'round';
			lineCtx.lineWidth = BRUSH_WIDTH;

			for (let i = 1; i < points.length; i++) {
				const point = points[i];
				const prev = points[i - 1];

				lineCtx.strokeStyle = `rgba(0,0,0,${1 - (now - point.time) / POINT_LIFETIME})`;
				lineCtx.beginPath();
				lineCtx.moveTo(prev.x, prev.y);
				lineCtx.lineTo(point.x, point.y);
				lineCtx.stroke();
			}
		};

		// FUNCTION: composite illustration masked by lineCanvas onto imageCanvas
		const drawImageCanvas = () => {
			const w = photoContainer.offsetWidth;
			const h = photoContainer.offsetHeight;

			imageCtx.clearRect(0, 0, w, h);

			let imgW = w;
			let imgH = (w / image.naturalWidth) * image.naturalHeight;

			if (imgH < h) {
				imgW = (h / image.naturalHeight) * image.naturalWidth;
				imgH = h;
			}

			imageCtx.globalCompositeOperation = 'source-over';
			imageCtx.drawImage(image, 0, 0, imgW, imgH);
			imageCtx.globalCompositeOperation = 'destination-in';
			imageCtx.drawImage(lineCanvas, 0, 0, w, h);
		};

		const tick = () => {
			const now = Date.now();
			points = points.filter((p) => now - p.time < POINT_LIFETIME);
			drawLineCanvas();
			drawImageCanvas();
			animationFrameId = requestAnimationFrame(tick);
		};

		const start = () => {
			drawCanvasElement.appendChild(imageCanvas);
			imageCanvas.addEventListener('mousemove', onMouseMove);
			imageCanvas.addEventListener('touchmove', onTouchMove, { passive: true });
			window.addEventListener('resize', resizeCanvases);
			resizeCanvases();
			tick();
		};

		if (image.complete) {
			start();
		} else {
			image.addEventListener('load', start, { once: true });
		}

		return () => {
			cancelAnimationFrame(animationFrameId);
			imageCanvas.removeEventListener('mousemove', onMouseMove);
			imageCanvas.removeEventListener('touchmove', onTouchMove);
			window.removeEventListener('resize', resizeCanvases);
			image.removeEventListener('load', start);
			imageCanvas.remove();
		};
	}, []);

	return (
		<div ref={photoContainerRef} className='photoContainer'>
			<div
				ref={drawCanvasRef}
				className='drawCanvas'
				style={{ backgroundImage: `url(${myImage})` }}
			>
				<img
					ref={imageRef}
					className='illustrationImage'
					src={illustrationImage}
					alt='Hand-drawn digital portrait illustration of Tsiomakh Olexandr (Цьомах Олександр Віталійович), Frontend Developer, Writer, and Screenwriter'
				/>
			</div>
		</div>
	);
};

export default DrawCanvas;
