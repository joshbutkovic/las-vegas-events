import moment from 'moment';

export const filterEvents = (events, dateToFilterFor) => {
	let filteredEventsArr = [];
	let dateToCheck = dateToFilterFor || moment().format('YYYY-MM-DD');
	events.forEach(e => {
		if (checkDates(e.dates, dateToCheck)) {
			filteredEventsArr.push(e);
		}
	});
	return filteredEventsArr;
};

const checkDates = (dates, dateToCheck) => {
	let compareDate = dateToCheck;
	let dayOfWeek = moment(compareDate).day();
	let isMatch = false;
	dates.forEach(d => {
		let startDate = moment(d.start, 'YYYY-MM-dd');
		let endDate = moment(d.end, 'YYYY-MM-dd');
		if (
			moment(compareDate).isBetween(startDate, endDate, []) &&
			checkDays(d.days, dayOfWeek) &&
			!isBlackOut(d.blackouts, compareDate)
		) {
			isMatch = true;
		}
	});
	return isMatch;
};

const checkDays = (days, dayOfWeek) => {
	let isMatch = false;
	days.forEach(day => {
		if (dayOfWeek === day) {
			isMatch = true;
		}
	});
	return isMatch;
};

const isBlackOut = (blackouts, compareDate) => {
	let isBlackOut = false;
	if (typeof blackouts !== 'undefined') {
		blackouts.forEach(date => {
			if (date === compareDate) {
				isBlackOut = true;
			}
		});
	}
	return isBlackOut;
};
