import { useEffect, useState } from 'react';

let current = 'Unchanged';
const subscriptions = new Set<(status: any) => void>();

function subscribe(setStatus: (status: any) => void) {
	subscriptions.add(setStatus);

	return () => {
		subscriptions.delete(setStatus);
	};
}

function dispatch(status: any) {
	current = status;
	subscriptions.forEach((setStatus) => setStatus(status));
}

function useStatus() {
	const [status, setStatus] = useState(current);
	useEffect(() => subscribe(setStatus), []);

	return status;
}
// Updated but waiting for stale tabs to close
function onUpdate(_registration: any) {
	dispatch('Updated');
}

// Updated and running
function onSuccess(_registration: any) {
	dispatch('Successful');
}

export { useStatus, onUpdate, onSuccess };
