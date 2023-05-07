/**
 * Formats a date string to a relative time string, e.g. "2 minutes ago".
 * @param {string} date - The date to be formatted.
 * @returns {string} The relative time string.
 */

export function getRelativeDate(date) {
	const currentDate = new Date();
	const targetDate = new Date(date);
	const deltaInSeconds = Math.round((currentDate - targetDate) / 1000);

	const minute = 60;
	const hour = minute * 60;
	const day = hour * 24;
	const month = day * 30;
	const year = month * 12;

	if (deltaInSeconds < 30) {
		return 'just now';
	} else if (deltaInSeconds < minute) {
		return `${deltaInSeconds} seconds ago`;
	} else if (deltaInSeconds < 2 * minute) {
		return 'a minute ago';
	} else if (deltaInSeconds < hour) {
		return `${Math.floor(deltaInSeconds / minute)} minutes ago`;
	} else if (Math.floor(deltaInSeconds / hour) === 1) {
		return '1 hour ago';
	} else if (deltaInSeconds < day) {
		return `${Math.floor(deltaInSeconds / hour)} hours ago`;
	} else if (deltaInSeconds < day * 2) {
		return 'yesterday';
	} else if (deltaInSeconds < month) {
		return `${Math.floor(deltaInSeconds / day)} days ago`;
	} else if (Math.floor(deltaInSeconds / month) === 1) {
		return 'last month';
	} else if (Math.floor(deltaInSeconds / month) > 1) {
		return `${Math.floor(deltaInSeconds / month)} months ago`;
	} else if (Math.floor(deltaInSeconds / year) === 1) {
		return 'last year';
	} else {
		return `${Math.floor(deltaInSeconds / year)} years ago`;
	}
}
