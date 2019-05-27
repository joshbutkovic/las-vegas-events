import React from 'react';
import { BASE_URL } from '../../../config/http-config';
import Events from '../Events';
const Event = ({ ...props }) => {
	// aggregate and filter event here
	console.log('PROPS');
	console.log(props);
	return (
		<div className="container is-widescreen">
			<div className="notification">
				<div className="columns">
					<div className="column has-text-left">DATE & Times</div>
					<div className="column has-text-right">{props.event.propertyName}</div>
				</div>
				<div className="columns">
					<div className="column">
						<img src={props.event.featuredImage} alt={props.event.name} />
					</div>
					<div className="column">
						<h3 className="is-size-5 is-bold">{props.event.name}</h3>
						<p>{props.event.summary}</p>
					</div>
				</div>
				<div className="columns">
					<div className="column has-text-left">
						<p>
							<small>{props.event.prices}</small>
						</p>
					</div>
					<div className="column has-text-right">
						<a class="button button-website" href={props.event.webUrl}>
							Website
						</a>
						<a class="button is-link button-tickets" href={props.event.ticketsUrl}>
							Get Tickets
						</a>
					</div>
				</div>
				{/* EVENT NAME: {props.event.name || 'no event'} */}
			</div>
		</div>
	);
};

export default Event;
