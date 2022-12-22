'use strict';

const app = () => {
	console.log("Hello");
}
window.addEventListener('DOMContentLoaded', () => {
	console.log('DOM fully loaded and parsed');
	app();
});
