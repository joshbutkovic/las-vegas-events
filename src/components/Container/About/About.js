import React from "react";
import { Container, Paragraph, AnchorLink } from "../../../utils/animations";

const About = () => {
	let content = (
		<Container>
			<div className="container">
				<section className="section">
					<div className="columns">
						<div className="column is-10-mobile is-offset-1-mobile is-8 is-offset-2">
							<h1 className="is-size-2 is-size-3-mobile">Las Vegas Events</h1>
							<br />
							<Paragraph className="is-italic">
								<span className="subtitle">
									This application displays current and upcoming Caesars Entertainment events in Las
									Vegas. It was completed as a part of the React Developer - Candidate Exercise.
								</span>
							</Paragraph>
							<br />
							<Paragraph>
								<strong>Created By:</strong>&nbsp;Josh Butkovic
								<br />
								<strong>Github:</strong>&nbsp;
								<AnchorLink
									href="https://github.com/joshbutkovic"
									rel="noopener noreferrer"
									target="_blank"
								>
									https://github.com/joshbutkovic
								</AnchorLink>
								<br />
								<strong>Gmail:</strong>&nbsp;
								<AnchorLink href="mailto:joshbutkovic@gmail.com">joshbutkovic@gmail.com</AnchorLink>
								<br />
								<strong>Cell:</strong>&nbsp;<span>216-315-5137</span>
							</Paragraph>
						</div>
					</div>
				</section>
			</div>
		</Container>
	);
	return content;
};

export default About;
