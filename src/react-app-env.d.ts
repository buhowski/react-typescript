/// <reference types="react-scripts" />

// You can add more custom type declarations or type extensions here as needed.

declare module '*.pdf' {
	const content: string; // You can use other types if needed
	export default content;
}
