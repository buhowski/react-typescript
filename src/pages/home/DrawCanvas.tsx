import { useEffect } from 'react';
import myImage from '../../assets/home/photo.png';
import illustrationImage from '../../assets/home/photo-drawing.png';

interface Point {
	time: number;
	x: number;
	y: number;
}

const DrawCanvas = () => {
	useEffect(() => {
		const imageCanvas: HTMLCanvasElement | null = document.createElement('canvas');
		const lineCanvas: HTMLCanvasElement | null = document.createElement('canvas');
		const imageCanvasContext = imageCanvas?.getContext('2d');
		const lineCanvasContext = lineCanvas?.getContext('2d');
		const pointLifetime = 1000;
		let points: Point[] = [];

		const image = document.querySelector('.illustrationImage') as HTMLImageElement;

		const start = () => {
			imageCanvas?.addEventListener('mousemove', onMouseMove);
			imageCanvas?.addEventListener('touchmove', onTouchMove, { passive: true });
			window.addEventListener('resize', resizeCanvases);
			document.querySelector('.drawCanvas')?.appendChild(imageCanvas);

			resizeCanvases();
			tick();
		};

		const onMouseMove = (event: MouseEvent) => {
			const rect = imageCanvas?.getBoundingClientRect();

			if (rect) {
				points.push({
					time: Date.now(),
					x: event.pageX - rect.left,
					y: event.pageY - rect.top,
				});
			}
		};

		const onTouchMove = (event: TouchEvent) => {
			const touch = event.targetTouches[0];
			const rect = imageCanvas?.getBoundingClientRect();

			if (rect) {
				points.push({
					time: Date.now(),
					x: touch.pageX - rect.left,
					y: touch.pageY - rect.top,
				});
			}
		};

		const resizeCanvases = () => {
			const photoContainer = document.querySelector('.photoContainer') as HTMLElement;

			if (imageCanvas && lineCanvas && photoContainer) {
				imageCanvas.width = lineCanvas.width = photoContainer.offsetWidth || 0;
				imageCanvas.height = lineCanvas.height = photoContainer.offsetHeight || 0;
			}
		};

		const tick = () => {
			// Remove old points
			points = points.filter((point) => {
				const age = Date.now() - point.time;

				return age < pointLifetime;
			});

			drawLineCanvas();
			drawImageCanvas();
			requestAnimationFrame(tick);
		};

		const drawLineCanvas = () => {
			const minimumLineWidth = 80;
			const maximumLineWidth = 80;
			const lineWidthRange = maximumLineWidth - minimumLineWidth;
			const maximumSpeed = 200;

			if (lineCanvasContext) {
				lineCanvasContext.clearRect(0, 0, lineCanvas.width, lineCanvas.height);
				lineCanvasContext.lineCap = 'round';

				for (let i = 1; i < points.length; i++) {
					const point = points[i];
					const previousPoint = points[i - 1];

					// Change line width based on speed
					const distance = getDistanceBetween(point, previousPoint);
					const speed = Math.max(0, Math.min(maximumSpeed, distance));
					const percentageLineWidth = (maximumSpeed - speed) / maximumSpeed;
					lineCanvasContext.lineWidth = minimumLineWidth + percentageLineWidth * lineWidthRange;

					// Fade points as they age
					const age = Date.now() - point.time;
					const opacity = (pointLifetime - age) / pointLifetime;
					lineCanvasContext.strokeStyle = `rgba(0, 0, 0, ${opacity}`;

					lineCanvasContext.beginPath();
					lineCanvasContext.moveTo(previousPoint.x, previousPoint.y);
					lineCanvasContext.lineTo(point.x, point.y);
					lineCanvasContext.stroke();
				}
			}
		};

		const getDistanceBetween = (a: Point, b: Point) => {
			return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
		};

		const drawImageCanvas = () => {
			if (imageCanvasContext && image) {
				const drawCanvasElement = document.querySelector('.drawCanvas') as HTMLElement;

				if (drawCanvasElement) {
					imageCanvas.width = drawCanvasElement.offsetWidth || 0;
					imageCanvas.height = drawCanvasElement.offsetHeight || 0;
				}

				// Emulate background-size: cover
				let width = imageCanvas.width;
				let height = (imageCanvas.width / image.naturalWidth) * image.naturalHeight;

				if (height < imageCanvas.height) {
					width = (imageCanvas.height / image.naturalHeight) * image.naturalWidth;
					height = imageCanvas.height;
				}

				imageCanvasContext.clearRect(0, 0, width, height);
				imageCanvasContext.globalCompositeOperation = 'source-over';
				imageCanvasContext.drawImage(image, 0, 0, width, height);
				imageCanvasContext.globalCompositeOperation = 'destination-in';
				imageCanvasContext.drawImage(lineCanvas, 0, 0);
			}
		};

		if (image && image.complete) {
			start();
		} else if (image) {
			image.onload = start;
		}
	}, []);

	return (
		<div className='photoContainer'>
			<div className='drawCanvas' style={{ backgroundImage: `url(${myImage})` }}>
				<img
					className='illustrationImage'
					src={illustrationImage}
					alt='Hand-drawn digital portrait illustration of Tsiomakh Olexandr (Цьомах Олександр Віталійович), Frontend Developer, Writer, and Screenwriter'
				/>
			</div>
		</div>
	);
};

export default DrawCanvas;
