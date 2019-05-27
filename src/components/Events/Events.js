import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
// import _ from 'lodash';
import { Container } from '../../utils/animations';
import { useHttpGet } from '../../hooks/http';
import { filterEvents } from '../../utils/eventsFilter';
import { GET_EVENTS_URL } from '../../config/http-config';
import Event from '../Events/Event/Event';
import '../../components/Events/Events.css';

const Events = props => {
	const [startDate, setStartDate] = useState(Date.parse(moment()));
	const [isLoading, returnedEvents] = useHttpGet(GET_EVENTS_URL, [props.returnedEvents]);
	const [filteredEvents, setFilteredEvents] = useState([]);

	const initialEvents = returnedEvents;

	let content = <p>Loading events...</p>,
		mainHeading = `LAS VEGAS EVENTS`,
		eventComponents = [];

	const handleDateChange = date => {
		setStartDate(date);
		console.log(filterEvents(initialEvents, date));
		setFilteredEvents(filterEvents(initialEvents, date));
	};

	if (!isLoading && initialEvents && initialEvents.length > 0 && filteredEvents.length === 0) {
		// _.orderBy(response.data, ['name'], ['asc'])
		eventComponents = filterEvents(initialEvents).map((event, id) => (
			<div key={id} className="container is-widescreen event-container">
				<div className="notification">
					<Event event={event} />
				</div>
			</div>
		));
	} else if (filteredEvents.length > 0) {
		eventComponents = filteredEvents.map((event, id) => (
			<div key={id} className="container is-widescreen event-container">
				<div className="notification">
					<Event event={event} />
				</div>
			</div>
		));
	}

	content = (
		<Container>
			<div className="container">
				<section className="section">
					<div className="columns">
						<div className="column">
							<h1 className="is-size-2 has-text-centered">{mainHeading}</h1>
							<div className="columns">
								<div className="column">
									<DatePicker
										selected={startDate}
										onChange={handleDateChange}
										name="startDate"
										dateFormat="YYYY-MM-dd"
										placeholderText="Click to select a date"
									/>
								</div>
							</div>
							{eventComponents}
						</div>
					</div>
				</section>
			</div>
		</Container>
	);

	return content;
};

export default Events;
