import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const rootElement = document.querySelector('#root');

if (rootElement) {
	// @ts-expect-error
	const root = ReactDOM.createRoot(rootElement);
	root.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>,
	);
} else {
	console.error('Root element not found');
}
