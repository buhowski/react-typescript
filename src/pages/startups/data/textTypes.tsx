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
	subtitle3?: string;
	text2?: string | string[];
	subtitle4?: string;
	text3?: string | string[];

	// films data
	loglineTitle?: string;
	loglineText?: string | string[] | JSX.Element[];
	character01Title?: string;
	charackter01List?: string[];
	character02Title?: string;
	charackter02List?: string[];
	character03Title?: string;
	charackter03List?: string[];
	character04Title?: string;
	charackter04List?: string[];
	character05Title?: string;
	charackter05List?: string[];
	character06Title?: string;
	charackter06List?: string[];

	linkHref?: string;
	linkName?: string;
	linkTarget?: string;

	lastWords?: string;
}
