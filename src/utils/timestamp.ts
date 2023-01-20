type typedateunit = [string, number];

const DATE_UNITS: typedateunit[] = [
	['day', 86400],
	['hour', 3600],
	['minute', 60],
	['second', 1],
];

export const getDateDiffs: any = (timestamp: string) => {
	const now = Date.now();
	const parseTimestamp = Date.parse(timestamp);
	const elapsed = (parseTimestamp - now) / 1000;

	for (const [unit, secondsInUnit] of DATE_UNITS) {
		if (Math.abs(elapsed) > secondsInUnit || unit === 'second') {
			const value = Math.round(elapsed / secondsInUnit);
			return { value, unit };
		}
	}
};

export const formatTimeAgo:any = (timestamp: string) => {
	const { value, unit } = getDateDiffs(timestamp);
	const rtf = new Intl.RelativeTimeFormat('en', { style: 'short' });

	const timeago = rtf.format(value, unit);
	return `${timeago}`;
};
