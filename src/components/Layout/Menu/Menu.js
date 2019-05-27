import React from 'react';
import './Menu.css';

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
			</div>
		</div>
	);
};

export default Menu;
