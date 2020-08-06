import React from 'react';
import {StandardSection, HeaderSection, Footer} from './Layouts';

class Work extends React.Component {
	render() {
		return (
			<div className="page">
				<HeaderSection title="Hobbies" />
				<StandardSection color="white">
					<div className="section">
						<h3>Under Construction</h3>
						<p>Check back in soon!</p>
					</div>
				</StandardSection>
				<Footer />
			</div>
		);
	}
}

export default Work;