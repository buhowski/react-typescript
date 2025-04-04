export interface ListProps {
	title?: string;
	text: React.ReactNode[];
}

export interface Block {
	// Pitch Text block
	pitchNumber?: string;
	pitchTitle?: string;
	pitchInfo?: { key: string; value: string }[];

	title?: string;
	text?: string | string[] | JSX.Element[];

	listBlock?: ListProps[];
	lastWords?: string;

	// Reusable components
	listItems?: string[] | React.ReactNode[];
	linkHref?: string;
	linkName?: string;
	linkTarget?: string;
}
