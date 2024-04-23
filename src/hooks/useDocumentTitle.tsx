import { useEffect, useState } from 'react';

// Interface for the hook props
interface TitleProps {
	defaultTitle: string;
}

// Custom hook for managing document title
const useDocumentTitle = ({ defaultTitle = 'Olexander Tsiomakh' }: TitleProps) => {
	// Use state to manage the internal title
	const [customTitle, setCustomTitle] = useState(defaultTitle);

	useEffect(() => {
		document.title = customTitle;
		console.log(customTitle);
	}, [customTitle]); // Update defaultTitle whenever customTitle changes

	// Update internal title based on the prop (optional)
	useEffect(() => {
		if (defaultTitle) {
			setCustomTitle(defaultTitle);
		}
	}, [defaultTitle]); // Update customTitle when prop changes

	return { customTitle, setCustomTitle }; // Optionally return methods to modify the defaultTitle
};

export default useDocumentTitle;
