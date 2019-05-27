import { useState, useEffect } from 'react';
import axios from 'axios';

export const useHttpGet = (url, dependencies) => {
	const [isLoading, setIsLoading] = useState(false);
	const [returnedEvents, setReturnedEvents] = useState(null);

	useEffect(() => {
		setIsLoading(true);
		axios
			.get(url)
			.then(function(response) {
				setIsLoading(false);
				setReturnedEvents(response.data);
			})
			.catch(function(error) {
				setIsLoading(false);
				console.log(error);
			});
	}, dependencies);

	return [isLoading, returnedEvents];
};
