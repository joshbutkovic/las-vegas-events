import { useState, useEffect } from 'react';
import axios from 'axios';
import { filterEvents } from '../utils/eventsFilter';

export const useHttpGet = (url, dependencies) => {
	const [isLoading, setIsLoading] = useState(false);
	const [returnedData, setReturnedData] = useState(null);

	useEffect(() => {
		setIsLoading(true);
		axios
			.get(url)
			.then(function(response) {
				setIsLoading(false);
				setReturnedData(response.data);
			})
			.catch(function(error) {
				setIsLoading(false);
				console.log(error);
			});
	}, dependencies);

	return [isLoading, returnedData];
};
