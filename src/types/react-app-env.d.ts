/// <reference types="react-scripts" />

// STATIC ASSETS

declare module '*.pdf' {
	const content: string;
	export default content;
}

declare module '*.mp4' {
	const content: string;
	export default content;
}

declare module '*.webm' {
	const content: string;
	export default content;
}

// STYLE IMPORTS

declare module '*.css';
declare module '*.scss';
declare module '*.sass';

// GLOBAL YOUTUBE IFRAME API

declare global {
	interface Window {
		YT: any;
		onYouTubeIframeAPIReady: () => void;
	}
}
