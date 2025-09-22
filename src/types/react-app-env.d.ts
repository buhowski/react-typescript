/// <reference types="react-scripts" />

// You can add more custom type declarations or type extensions here as needed.

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

declare module 'netlify:edge' {
	export interface Context {
		geo?: {
			country?: {
				code?: string;
			};
			timezone?: string;
		};
	}
}

// Global declaration for the YouTube IFrame API
declare global {
	interface Window {
		YT: any;
		onYouTubeIframeAPIReady: () => void;
	}
}
