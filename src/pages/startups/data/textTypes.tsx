export interface Block {
	titleType?: { key: string; value: string }[];
	titleBig?: string | { key: string; value: string }[];
	subtitleBig?: { key: string; value: string }[];
	title?: string | { key: string; value: string }[];
	text?: string | string[] | JSX.Element[];
	subtitle?: string;
	list?: string[] | JSX.Element[];
	subtitle2?: string;
	list2?: string[];
	subtitle3?: string;
	text2?: string | string[];
	subtitle4?: string;
	text3?: string | string[];
}
