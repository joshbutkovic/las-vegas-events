import moment from 'moment';

export const filterEvents = (events, dateToFilterFor) => {
	let filteredEventsArr = [];
	let dateToCheck = dateToFilterFor || moment().format('YYYY-MM-DD');
	events.forEach(e => {
		if (checkDates(e.dates, dateToCheck)) {
			filteredEventsArr.push(assembleMatchedFilteredEvent(e, dateToCheck));
		}
	});
	return filteredEventsArr;
};

const assembleMatchedFilteredEvent = (event, date) => {
	let assembledEvent = {};
	assembledEvent.date = date;
	assembledEvent.times = getEventTimeForDate(event, date);
	assembledEvent.name = event.name;
	assembledEvent.featuredImage = event.featuredImage;
	assembledEvent.propertyName = event.propertyName;
	assembledEvent.summary = event.summary;
	assembledEvent.prices = event.prices;
	assembledEvent.webUrl = event.webUrl;
	assembledEvent.ticketsUrl = event.ticketsUrl;
	return assembledEvent;
};

const getEventTimeForDate = (event, date) => {
	let times = [];
	event.dates.forEach(e => {
		let startDate = moment(e.start, 'YYYY-MM-dd');
		let endDate = moment(e.end, 'YYYY-MM-dd');
		if (typeof e.times !== 'undefined' && moment(date).isBetween(startDate, endDate, [])) {
			e.times.forEach(t => {
				times.push(t);
			});
		}
	});
	return times.reverse();
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
