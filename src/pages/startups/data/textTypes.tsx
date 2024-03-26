export interface Block {
	pitchNumber?: string;
	pitchTitle?: string;
	pitchFormatTitle?: string;
	pitchFormatText?: string;
	pitchInfo?: { key: string; value: string }[];

	title?: string;
	subtitle?: string;
	text?: string | string[] | JSX.Element[];

	list?: string[] | JSX.Element[];
	listItems?: string[] | JSX.Element[];
	subtitle2?: string;
	list2?: string[];
	subtitle3?: string;
	text2?: string | string[];
	subtitle4?: string;
	text3?: string | string[];

	linkHref?: string;
	linkName?: string;

	lastWords?: string;
}
