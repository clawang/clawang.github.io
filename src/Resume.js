import React from 'react';
import {StandardSection, HeaderSection, Footer, BlogSection} from './Layouts';
import resume from './media/resume.png';
import resumeFile from './media/resume.pdf';
import './About.scss';

class Resume extends React.Component {
	render() {
		return (
			<div className="page">
				<HeaderSection title="Resume" />
				<StandardSection color="white">
					<div className="section">
						<img src={resume} className="resume-img" />
						<p><a href={resumeFile} className="button" download>Download</a></p>
					</div>
				</StandardSection>
				<BlogSection title="My Projects" />
				<Footer />
			</div>
		);
	}
}

export default Resume;