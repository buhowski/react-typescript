export const slugify = (text: string): string => {
	return text
		.toString()
		.normalize('NFD') // Normalize Unicode characters
		.replace(/[\u0300-\u036f]/g, '') // Remove diacritics
		.toLowerCase()
		.trim()
		.replace(/\s+/g, '-') // Replace spaces with -
		.replace(/[^\w-]+/g, '') // Remove all non-word chars
		.replace(/--+/g, '-'); // Replace multiple - with single -
};
