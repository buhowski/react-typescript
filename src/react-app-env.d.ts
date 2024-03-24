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
