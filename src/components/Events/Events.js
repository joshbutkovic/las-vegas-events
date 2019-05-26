import React, { useState } from 'react';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import { Container } from '../../utils/animations';
import { useHttpGet } from '../../hooks/http';
import { GET_EVENTS_URL } from '../../config/http-config';
import Event from '../Events/Event/Event';
import '../../components/Events/Events.css';

const Events = props => {
	const [startDate, setStartDate] = useState(false);
	const [isLoading, returnedEvents] = useHttpGet(GET_EVENTS_URL, [props.loadedEvents]);

	const selectedEvents = returnedEvents;

	let content = <p>Loading events...</p>,
		mainHeading = `LAS VEGAS EVENTS`;

	const handleDateChange = date => {
		console.log(date);
		// setStartDate(date);
	};

	if (!isLoading && selectedEvents && selectedEvents.length > 0) {
		const eventComponents = selectedEvents.map((event, id) => (
			<div key={id} className="container is-widescreen event-container">
				<div className="notification">
					<Event event={event} />
				</div>
			</div>
		));

		content = (
			<Container>
				<div className="container">
					<section className="section">
						<div className="columns">
							<div className="column">
								<h1 className="is-size-2 has-text-centered">{mainHeading}</h1>
								<h1 className="is-size-4 has-text-centered">{startDate}</h1>
								<div className="columns">
									<div className="column">
										<label>Select Date: </label>
										<DatePicker
											selected={startDate}
											onChange={handleDateChange}
											name="startDate"
											dateFormat="YYYY-MM-dd"
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
	} else if (!isLoading && (!selectedEvents || selectedEvents.length === 0)) {
		content = <p>No Events returned</p>;
	}

	return content;
};

export default Events;
