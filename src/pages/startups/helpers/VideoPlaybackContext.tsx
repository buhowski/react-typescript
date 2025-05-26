// src/contexts/VideoPlaybackContext.tsx
import React, { createContext, useContext, useRef, useCallback } from 'react';

interface VideoPlayerControls {
	pauseVideo: () => void;
	resetVideo: () => void;
}

interface VideoPlaybackContextType {
	registerPlayer: (id: string, controls: VideoPlayerControls) => void;
	unregisterPlayer: (id: string) => void;
	stopAllOtherVideos: (playingPlayerId: string) => void;
}

const VideoPlaybackContext = createContext<VideoPlaybackContextType | undefined>(undefined);

export const VideoPlaybackProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
	const players = useRef<Map<string, VideoPlayerControls>>(new Map());

	// Registers a video player with its controls
	const registerPlayer = useCallback((id: string, controls: VideoPlayerControls) => {
		players.current.set(id, controls);
	}, []);

	// Unregisters a video player
	const unregisterPlayer = useCallback((id: string) => {
		players.current.delete(id);
	}, []);

	// Stops all other videos except the currently playing one
	const stopAllOtherVideos = useCallback((playingPlayerId: string) => {
		players.current.forEach((controls, id) => {
			if (id !== playingPlayerId) {
				controls.pauseVideo();
				controls.resetVideo();
			}
		});
	}, []);

	const contextValue = {
		registerPlayer,
		unregisterPlayer,
		stopAllOtherVideos,
	};

	return (
		<VideoPlaybackContext.Provider value={contextValue}>{children}</VideoPlaybackContext.Provider>
	);
};

export const useVideoPlayback = () => {
	const context = useContext(VideoPlaybackContext);
	if (context === undefined) {
		throw new Error('useVideoPlayback must be used within a VideoPlaybackProvider');
	}
	return context;
};
