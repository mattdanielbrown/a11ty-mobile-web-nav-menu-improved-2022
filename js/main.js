'use strict';

const main = () => {
	
	document.addEventListener("touchstart", function () {
	}, true);
	
	const mobileNavControl = document.getElementById("mobile-nav-control");
	
	let delay     = 250; 				// delay between calls
	let throttled = false; 	    // currently throttled?
	let calls     = 0;					// call count
	
	// window.resize callback function
	function getDimensions() {
		if (mobileNavControl.checked === true) {
			let windowWidth = window.innerWidth;
			if (windowWidth > 560) {
				mobileNavControl.checked = false;
			}
		}
		calls += 1;
	}
	
	// window.resize event listener
	window.addEventListener("resize", function () {
		// only run if we're not throttled
		if (!throttled) {
			// actual callback action
			getDimensions();
			// we're throttled!
			throttled = true;
			// set a timeout to un-throttle
			setTimeout(function () {
				throttled = false;
			}, delay);
		}
	});
	
	getDimensions();
};

window.addEventListener("DOMContentLoaded", () => {
	console.log("DOM fully loaded and parsed");
	main();
});

/* 	ALTERNATIVE FOR MONITORING WIDTH:
--------------------------------------------------------------------------
let timeout = false; // holder for timeout id
let delay = 250; // delay after event is "complete" to run callback
let calls = 0;

// window.resize callback function
function getDimensions() {
  if (mobileNavControl.checked === true) {
		let windowWidth = window.innerWidth;
		if (windowWidth > 560) {
			mobileNavControl.checked = false;
		}
	}
	calls += 1;
}

// window.resize event listener
window.addEventListener('resize', function() {
	// clear the timeout
  clearTimeout(timeout);
  // start timing for event "completion"
  timeout = setTimeout(getDimensions, delay);
});

getDimensions();
*/
