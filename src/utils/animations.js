import posed from 'react-pose';

export const Container = posed.div({
	enter: { staggerChildren: 50 },
});

export const RouteTransitionWrapper = posed.div({
	enter: { opacity: 1 },
	exit: { opacity: 0 },
});

export const Paragraph = posed.p({
	enter: { x: 20, opacity: 1 },
	exit: { x: 0, opacity: 0 },
});
