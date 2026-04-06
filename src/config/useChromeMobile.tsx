import { useEffect, useState } from 'react';

// COMPONENT: useChromeMobile hook
function useChromeMobile() {
	const [isChromeMobile, setIsChromeMobile] = useState(false);

	useEffect(() => {
		if (typeof window === 'undefined') return;

		const ua = navigator.userAgent;

		// FUNCTION: detect standalone iOS Chrome
		const isIOSChrome = /CriOS\//.test(ua);

		// FUNCTION: detect standalone Android Chrome
		const isAndroidChrome =
			/Android/.test(ua) &&
			/Chrome\//.test(ua) &&
			!/; wv\)/.test(ua) &&
			// EXCLUDE: Other browsers
			!/EdgA|OPR|OPT|SamsungBrowser|YaBrowser|UCBrowser/.test(ua) &&
			// EXCLUDE: In-app browsers (Social & Messengers)
			!/Telegram|Threads|Instagram|FBAV|FBAN|Twitter|LNWN|LinkedInApp|WhatsApp|Viber/.test(ua);

		setIsChromeMobile(isIOSChrome || isAndroidChrome);
	}, []);

	return isChromeMobile;
}

export default useChromeMobile;
