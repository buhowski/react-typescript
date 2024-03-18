import React, { useState, useEffect } from 'react';
// works for chrome only (?????)
// Define the BeforeInstallPromptEvent type
interface BeforeInstallPromptEvent extends Event {
	readonly platforms: string[];
	readonly userChoice: Promise<{
		outcome: 'accepted' | 'dismissed';
		platform: string;
	}>;
	prompt(): void;
}

const AddToHomeScreenButton: React.FC = () => {
	const [showPrompt, setShowPrompt] = useState(false);
	const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(
		null
	);

	useEffect(() => {
		const handleBeforeInstallPrompt = (e: Event) => {
			e.preventDefault();
			setShowPrompt(true);
			setDeferredPrompt(e as BeforeInstallPromptEvent);
		};

		window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

		return () => {
			window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
		};
	}, []);

	const handleAddToHomeScreen = () => {
		if (showPrompt && deferredPrompt) {
			deferredPrompt.prompt();

			deferredPrompt.userChoice.then((choiceResult) => {
				if (choiceResult.outcome === 'accepted') {
					console.log('User accepted the install prompt');
					// Provide feedback to the user about the successful installation
				} else {
					console.log('User dismissed the install prompt');
					// Provide feedback to the user about the dismissed prompt
				}
			});

			setShowPrompt(false);
		}
	};

	return (
		<button
			className='add-to-home-screen-button'
			onClick={handleAddToHomeScreen}
			style={{ display: showPrompt ? 'block' : 'none' }}
		>
			Add to Home Screen
		</button>
	);
};

export default AddToHomeScreenButton;
