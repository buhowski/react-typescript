export interface Block {
	pitchNumber?: string;
	pitchTitle?: string;
	pitchInfo?: { key: string; value: string }[];

	title?: string;
	subtitle?: string;

	text?: string | string[] | JSX.Element[];

	list?: string[] | JSX.Element[];
	listItems?: string[] | JSX.Element[];
	subtitle2?: string;
	list2?: string[];
	text2?: string | string[];

	// films data
	loglineTitle?: string;
	loglineText?: string | string[] | JSX.Element[];
	character01Title?: string;
	character01List?: string[];
	character02Title?: string;
	character02List?: string[];
	character03Title?: string;
	character03List?: string[];
	character04Title?: string;
	character04List?: string[];
	character05Title?: string;
	character05List?: string[];
	character06Title?: string;
	character06List?: string[];

	linkHref?: string;
	linkName?: string;
	linkTarget?: string;

	lastWords?: string;
}
