import { useEffect, useRef } from 'react';

import myImage from '../../assets/home/photo.png';
import illustrationImage from '../../assets/home/photo-drawing.png';

interface Point {
	time: number;
	x: number;
	y: number;
}

const POINT_LIFETIME = 1000;
const MIN_WIDTH = 80;
const MAX_WIDTH = 80;
const MAX_SPEED = 200;

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
		const imageCanvasContext = imageCanvas.getContext('2d');
		const lineCanvasContext = lineCanvas.getContext('2d');

		if (!imageCanvasContext || !lineCanvasContext) return;

		let animationFrameId = 0;
		let points: Point[] = [];

		const resizeCanvases = () => {
			const width = photoContainer.offsetWidth;
			const height = photoContainer.offsetHeight;

			imageCanvas.width = lineCanvas.width = width;
			imageCanvas.height = lineCanvas.height = height;
		};

		const addPoint = (x: number, y: number) => {
			const rect = imageCanvas.getBoundingClientRect();

			points.push({
				time: Date.now(),
				x: x - rect.left,
				y: y - rect.top,
			});
		};

		const onMouseMove = (event: MouseEvent) => {
			addPoint(event.clientX, event.clientY);
		};

		const onTouchMove = (event: TouchEvent) => {
			const touch = event.targetTouches[0];

			if (!touch) return;

			addPoint(touch.clientX, touch.clientY);
		};

		const drawLineCanvas = () => {
			lineCanvasContext.clearRect(0, 0, lineCanvas.width, lineCanvas.height);
			lineCanvasContext.lineCap = 'round';
			lineCanvasContext.lineJoin = 'round';

			for (let i = 1; i < points.length; i++) {
				const point = points[i];
				const prev = points[i - 1];
				const dist = Math.hypot(point.x - prev.x, point.y - prev.y);
				const speed = Math.max(0, Math.min(MAX_SPEED, dist));
				const percWidth = (MAX_SPEED - speed) / MAX_SPEED;

				lineCanvasContext.lineWidth = MIN_WIDTH + percWidth * (MAX_WIDTH - MIN_WIDTH);

				const age = Date.now() - point.time;
				const opacity = (POINT_LIFETIME - age) / POINT_LIFETIME;

				lineCanvasContext.strokeStyle = `rgba(0,0,0,${opacity})`;

				lineCanvasContext.beginPath();
				lineCanvasContext.moveTo(prev.x, prev.y);
				lineCanvasContext.lineTo(point.x, point.y);
				lineCanvasContext.stroke();
			}
		};

		const drawImageCanvas = () => {
			imageCanvasContext.clearRect(0, 0, imageCanvas.width, imageCanvas.height);

			let width = imageCanvas.width;
			let height = (imageCanvas.width / image.naturalWidth) * image.naturalHeight;

			if (height < imageCanvas.height) {
				width = (imageCanvas.height / image.naturalHeight) * image.naturalWidth;

				height = imageCanvas.height;
			}

			imageCanvasContext.globalCompositeOperation = 'source-over';
			imageCanvasContext.drawImage(image, 0, 0, width, height);
			imageCanvasContext.globalCompositeOperation = 'destination-in';
			imageCanvasContext.drawImage(lineCanvas, 0, 0);
		};

		const tick = () => {
			const now = Date.now();

			points = points.filter((point) => now - point.time < POINT_LIFETIME);

			drawLineCanvas();
			drawImageCanvas();

			animationFrameId = requestAnimationFrame(tick);
		};

		const start = () => {
			drawCanvasElement.appendChild(imageCanvas);
			imageCanvas.addEventListener('mousemove', onMouseMove);
			imageCanvas.addEventListener('touchmove', onTouchMove, {
				passive: true,
			});

			window.addEventListener('resize', resizeCanvases);

			resizeCanvases();
			tick();
		};

		if (image.complete) {
			start();
		} else {
			image.onload = start;
		}

		return () => {
			cancelAnimationFrame(animationFrameId);
			imageCanvas.removeEventListener('mousemove', onMouseMove);
			imageCanvas.removeEventListener('touchmove', onTouchMove);
			window.removeEventListener('resize', resizeCanvases);
			imageCanvas.remove();
		};
	}, []);

	return (
		<div ref={photoContainerRef} className='photoContainer'>
			<div
				ref={drawCanvasRef}
				className='drawCanvas'
				style={{
					backgroundImage: `url(${myImage})`,
				}}
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
