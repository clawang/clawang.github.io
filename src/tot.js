import React from 'react';
import {StandardSection, HeaderSection, Footer, BlogSection} from './Layouts';
import {Gallery} from './Work';
import resume from './media/resume.png';
import resumeFile from './media/resume.pdf';
import './About.scss';

const projects = [
	{
		title: "Ankeny Financial",
		src: "/ankeny.jpg",
		button: true,
		link: "https://ankenyfinancialplanning.com/",
		linkText: "View Live Website",
	},
	{
		title: "Nexus Wealth Advisors",
		src: "/nexus.jpg",
		button: true,
		link: "https://nexuswealthadvisors.com/",
		linkText: "View Live Website",
	},
	{
		title: "Legacy Advisors",
		src: "/legacy.jpg",
	},
	{
		title: "The Coffeehouse Advisor",
		src: "/coffeehouse.jpg",
		button: false,
	}
];

class TwentyOverTen extends React.Component {
	render() {
		return (
			<div className="page tot">
				<HeaderSection title="Twenty Over Ten" />
				<StandardSection color="white">
					<div className="section">
						<Gallery items={projects} lightbox={true} subpage={true} />
					</div>
				</StandardSection>
				<Footer />
			</div>
		);
	}
}

export default TwentyOverTen;