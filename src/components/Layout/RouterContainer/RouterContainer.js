import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import { PoseGroup } from "react-pose";
import { RouteTransitionWrapper } from "../../../utils/animations";
import Events from "../../Events/Events";
import About from "../../Container/About/About";

const RouterContainer = () => {
	return (
		<Route
			render={({ location }) => (
				<PoseGroup>
					<RouteTransitionWrapper key={location.pathname}>
						<Switch location={location}>
							<Route exact path="/" component={Events} key={"get"} />
							<Route path="/about" component={About} key={"about"} />
						</Switch>
					</RouteTransitionWrapper>
				</PoseGroup>
			)}
		/>
	);
};

RouterContainer.propTypes = {
	location: PropTypes.object,
};

export default RouterContainer;
