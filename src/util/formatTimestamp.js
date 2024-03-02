function formatTimestamp(timeStamp) {
	const minute = 60000;
	const hour = minute * 60;
	const day = hour * 24;
	const week = day * 7;
	const month = week * 4.345; // average # of weeks in a month

	const timePassed = new Date() - timeStamp;

	const timePassedInMinutes = Math.round(timePassed / minute);
	if (timePassedInMinutes <= 1) {
		return "just now";
	} else if (timePassedInMinutes < 60) {
		return timePassedInMinutes + " min ago";
	}

	const timePassedInHours = Math.round(timePassed / hour);
	if (timePassedInHours <= 1) {
		return "an hour ago";
	} else if (timePassedInHours < 24) {
		return timePassedInHours + " hours ago";
	}

	const timePassedInDays = Math.round(timePassed / day);
	if (timePassedInDays <= 1) {
		return "a day ago";
	} else if (timePassedInDays < 7) {
		return timePassedInDays + " days ago";
	}

	const timePassedInWeeks = Math.round(timePassed / week);
	if (timePassedInWeeks <= 1) {
		return "a week ago";
	} else if (timePassedInWeeks < 4.345) {
		return timePassedInWeeks + " weeks ago";
	}

	const timePassedInMonths = Math.round(timePassed / month);
	if (timePassedInMonths <= 1) {
		return "a month ago";
	} else if (timePassedInMonths < 12) {
		return timePassedInMonths + " months ago";
	}

	const timeStampString = new Date(timeStamp);
	return (
		timeStampString.getMonth() +
		1 +
		"/" +
		timeStampString.getDate() +
		"/" +
		timeStampString.getFullYear()
	);
}

export { formatTimestamp };
