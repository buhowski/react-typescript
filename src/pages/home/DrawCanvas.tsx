import React, { useEffect, useRef } from 'react';
import beforeImg from './img/before.jpg';
import afterImg from './img/moderna.jpg';

const DrawCanvas = () => {
	const illustrationImageRef = useRef<HTMLImageElement>(null);
	const imageCanvasRef = useRef<HTMLCanvasElement>(null);
	const lineCanvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const image = illustrationImageRef.current;
		const imageCanvas = imageCanvasRef.current;
		const lineCanvas = lineCanvasRef.current;
		const drawCanvas = document.querySelector('.drawCanvas') as HTMLElement;

		if (imageCanvas && lineCanvas) {
			const imageCanvasContext = imageCanvas.getContext('2d');
			const lineCanvasContext = lineCanvas.getContext('2d');
			const pointLifetime = 3000;
			let points: { time: number; x: number; y: number }[] = [];

			const onMouseMove = (event: MouseEvent) => {
				var rect = imageCanvas.getBoundingClientRect();

				points.push({
					time: Date.now(),
					x: event.clientX - rect.left,
					y: event.clientY - rect.top,
				});
			};

			let isDrawing = false;

			const onTouchStart = (event: TouchEvent) => {
				isDrawing = true;
			};

			const onTouchMove = (event: TouchEvent) => {
				if (!isDrawing) {
					return;
				}
				var touch = event.targetTouches[0];
				var rect = imageCanvas.getBoundingClientRect();
				points.push({
					time: Date.now(),
					x: touch.clientX - rect.left,
					y: touch.clientY - rect.top,
				});
			};

			const onTouchEnd = (event: TouchEvent) => {
				isDrawing = false;
			};

			const throttle = <T extends (...args: any[]) => void>(
				func: T,
				limit: number
			): T => {
				let lastFunc: NodeJS.Timeout | null = null;
				let lastRan: number | null = null;

				return function (this: any, ...args: Parameters<T>) {
					const context = this;

					if (!lastRan) {
						func.apply(context, args);
						lastRan = Date.now();
					} else {
						if (lastFunc) {
							clearTimeout(lastFunc);
						}
						lastFunc = setTimeout(() => {
							if (Date.now() - (lastRan || 0) >= limit) {
								func.apply(context, args);
								lastRan = Date.now();
							}
						}, limit - (Date.now() - (lastRan || 0)));
					}
				} as T;
			};

			const resizeCanvases = () => {
				const container = document.querySelector('.photoContainer') as HTMLElement;

				if (container) {
					imageCanvas.width = lineCanvas.width = container.offsetWidth;
					imageCanvas.height = lineCanvas.height = container.offsetHeight;
				}
			};

			const tick = () => {
				// Remove old points
				points = points.filter(function (point) {
					const age = Date.now() - point.time;
					return age < pointLifetime;
				});

				drawLineCanvas();
				drawImageCanvas();
				requestAnimationFrame(tick);
			};

			const drawLineCanvas = () => {
				const minimumLineWidth = 150;
				const maximumLineWidth = 150;
				const lineWidthRange = maximumLineWidth - minimumLineWidth;
				const maximumSpeed = 300;

				if (lineCanvasContext !== null) {
					lineCanvasContext.clearRect(0, 0, lineCanvas.width, lineCanvas.height);
					lineCanvasContext.lineCap = 'round';

					for (let i = 1; i < points.length; i++) {
						const point = points[i];
						const previousPoint = points[i - 1];

						// Change line width based on speed
						const distance = getDistanceBetween(point, previousPoint);
						const speed = Math.max(0, Math.min(maximumSpeed, distance));
						const percentageLineWidth = (maximumSpeed - speed) / maximumSpeed;
						lineCanvasContext.lineWidth =
							minimumLineWidth + percentageLineWidth * lineWidthRange;

						// Fade points as they age
						const age = Date.now() - point.time;
						const opacity = (pointLifetime - age) / pointLifetime;
						lineCanvasContext.strokeStyle = 'rgba(0, 0, 0, ' + opacity + ')';

						lineCanvasContext.beginPath();
						lineCanvasContext.moveTo(previousPoint.x, previousPoint.y);
						lineCanvasContext.lineTo(point.x, point.y);
						lineCanvasContext.stroke();
					}
				}
			};

			const getDistanceBetween = (
				a: { x: number; y: number },
				b: { x: number; y: number }
			) => {
				return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
			};

			const drawImageCanvas = () => {
				if (drawCanvas != null) {
					imageCanvas.width = drawCanvas.offsetWidth;
					imageCanvas.height = drawCanvas.offsetHeight;
				}

				// Emulate background-size: cover
				let width = imageCanvas.width;

				if (image) {
					let height = (imageCanvas.width / image.naturalWidth) * image.naturalHeight;

					if (height < imageCanvas.height) {
						width = (imageCanvas.height / image.naturalHeight) * image.naturalWidth;
						height = imageCanvas.height;
					}

					if (imageCanvasContext) {
						imageCanvasContext.clearRect(0, 0, width, height);
						imageCanvasContext.globalCompositeOperation = 'source-over';
						imageCanvasContext.drawImage(image, 0, 0, width, height);
						imageCanvasContext.globalCompositeOperation = 'destination-in';
						imageCanvasContext.drawImage(lineCanvas, 0, 0);
					}
				}
			};

			const start = () => {
				imageCanvas.addEventListener('mousemove', onMouseMove);
				imageCanvas.addEventListener('touchmove', onTouchMove);
				imageCanvas.addEventListener('touchstart', onTouchStart, false);
				imageCanvas.addEventListener('touchmove', throttle(onTouchMove, 16), false);
				imageCanvas.addEventListener('touchend', onTouchEnd, false);
				window.addEventListener('resize', resizeCanvases);
				drawCanvas.appendChild(imageCanvas);
				resizeCanvases();
				tick();
			};

			if (image && image.complete) {
				start();
				// console.log(true);
			} else {
				image && (image.onload = start);
			}
		}
	}, []);

	return (
		<div className='drawCanvas' style={{ backgroundImage: `url(${beforeImg})` }}>
			<img
				className='illustrationImage'
				src={afterImg}
				alt=''
				ref={illustrationImageRef}
			/>
			<canvas className='' ref={imageCanvasRef} />
			<canvas className='' ref={lineCanvasRef} />
		</div>
	);
};

export default DrawCanvas;
