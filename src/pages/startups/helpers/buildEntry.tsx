// Options for building entry
type BuildOptions = {
	preview?: boolean;
	fileName?: string;
	pagePreviewUrl?: string;
};

// Reusable entry builder
export const buildEntry = (basePath: string, sliderContent: any, options: BuildOptions = {}) => {
	// get last folder name
	const parts = basePath.split('/');
	const lastSegment = parts[parts.length - 1];

	// use custom fileName or fallback to folder name
	const rawName = options.fileName || lastSegment;

	// build final file name
	const fileName = options.preview ? `Preview${rawName}.md` : `${rawName}.md`;

	return {
		markdownAPI: `${basePath}/${fileName}`,
		sliderContent,
		...(options.pagePreviewUrl ? { pagePreviewUrl: options.pagePreviewUrl } : {}),
	};
};
