import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
	return (
		<div className="navbar" role="navigation" aria-label="main navigation">
			<div className="navbar-brand">
				<a className="navbar-item" href="https://www.caesars.com">
					<img
						src="https://www.caesars.com/content/dam/corporate/homepage/caesars-black-laurel-logo.png"
						alt="Caesars Entertainment"
					/>
				</a>
				<a
					role="button"
					className="navbar-burger burger"
					aria-label="menu"
					aria-expanded="false"
					data-target="menu"
				>
					<span aria-hidden="true" />
					<span aria-hidden="true" />
					<span aria-hidden="true" />
				</a>
			</div>

			<div id="menu" className="navbar-menu">
				<div className="navbar-start">
					<Link className="navbar-item" to="/">
						Events
					</Link>
					<Link className="navbar-item" to="/about">
						About
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Menu;
