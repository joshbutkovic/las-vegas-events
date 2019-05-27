import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

const Event = ({ ...props }) => {
	return (
		<div className="container is-widescreen">
			<div className="notification">
				<div className="columns">
					<div className="column has-text-left">
						<p className="event-date">
							<span className="has-text-weight-bold">
								{moment(props.event.date).format('MMM DD ddd')}
							</span>
							&nbsp;{props.event.times}
						</p>
					</div>
					<div className="column has-text-right is-size-6-mobile has-text-left-mobile has-text-weight-normal">
						{props.event.propertyName}
					</div>
				</div>
				<div className="columns">
					<div className="column">
						<img src={props.event.featuredImage} alt={props.event.name} />
					</div>
					<div className="column">
						<a className="is-size-5 event-name" href={props.event.webUrl}>
							{props.event.name}
						</a>
						<p className="has-text-grey-dark event-summary">{props.event.summary}</p>
						<div className="column has-text-right">
							<a className="button button-website" href={props.event.webUrl}>
								LEARN MORE
							</a>
							<a className="button button-tickets" href={props.event.ticketsUrl}>
								FIND TICKETS
							</a>
							<p className="event-prices has-text-left-mobile">
								<small>{props.event.prices}</small>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

Event.propTypes = {
	event: PropTypes.object.isRequired,
};

export default Event;
