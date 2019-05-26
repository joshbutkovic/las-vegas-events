import React from 'react';

const Event = ({ ...props }) => {
	// aggregate and filter event here

	return (
		<div className="container is-widescreen">
			<div className="notification">EVENT NAME: {props.event.name || 'no event'}</div>
		</div>
	);
};

export default Event;
