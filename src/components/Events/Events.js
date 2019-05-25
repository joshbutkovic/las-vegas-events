import React, { useEffect } from "react";
import { Container } from "../../utils/animations";
import { useHttp } from "../../hooks/http";
// import axios from "axios";

const Events = props => {
	const [isLoading, fetchedData] = useHttp("https://www.caesars.com/api/v1/markets/lvm/events", [
		props.loadedEvents,
	]);

	let loadedEvents = null;

	if (loadedEvents) {
		console.log(loadedEvents);
		// loadedEvents = {};
	}
	// const test = () => {
	// 	axios
	// 		.get("https://www.caesars.com/api/v1/markets/lvm/events")
	// 		.then(function(response) {
	// 			// handle success
	// 			console.log(response);
	// 		})
	// 		.catch(function(error) {
	// 			console.log("in error block");
	// 			// handle error
	// 			console.log(error);
	// 		})
	// 		.finally(function() {
	// 			// always executed
	// 		});
	// };

	// test();

	let content = (
		<Container>
			<div className="container">
				<section className="section">
					<div className="columns">
						<div className="column">
							<h1 className="is-size-2 has-text-centered">LAS VEGAS EVENTS</h1>
						</div>
					</div>
				</section>
			</div>
		</Container>
	);
	return content;
};

export default Events;
