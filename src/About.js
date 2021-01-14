import React from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import './About.scss';
import {StandardSection, PhotoHeaderSection, BlogSection, Footer} from './Layouts';
import paris from './media/paris.jpg';

function Position(props) {
	return (
		<div className="position-wrapper">
			<div className="position-title">
				<h3>{props.company}</h3>
				<p>{props.title}</p>
				<p>{props.date}</p>
			</div>
			<div className="position-description">
				<p>{props.description}</p>
			</div>
		</div>
	);
}

const jobs = [
	{
		title: "UI Engineering Intern",
		company: "FULLBEAUTY Brands",
		date: "Sep 2020 - Nov 2020",
		description: "Developed UI components for FULLBEAUTY’s design system using HTML and Sass by collaborating with product designers. Created proof of concept to demonstrate how to convert company e-commerce websites into Progressive Web Apps (PWAs) and presented it to leadership."
	},
	{
		title: "Application Developer Intern",
		company: "MarketAxess",
		date: "Jun 2020 - Aug 2020",
		description: "Enhanced user experiences across our internal applications by interfacing with product managers in Agile sprints to improve UI. Built and integrated download ability for audit history database records in Javascript and jQuery to help employees manage MarketAxess’ bond trading platform. Collaborated with other interns to present enhancements to senior leaders and the global management team."
	},
	{
		title: "Web Intern",
		company: "Twenty Over Ten",
		date: "Jan 2020 - Jun 2020",
		description: "Designed websites alongside 4 lead designers for financial advisors to increase conversions. Developed front end using HTML, CSS, JavaScript, and our in-house content management system."
	},
	{
		title: "Course Grader",
		company: "NYU Courant Institute",
		date: "Sep 2019 - Dec 2019",
		description: "Responsible for turning over 50+ grades for Web Development and Programming assignments weekly on a strict deadline. Provided feedback and training on debugging code, connecting to servers, improving HTML/CSS/Javascript."
	}
];

class About extends React.Component {
	render() {
		return (
			<div className="about-page page">
				<PhotoHeaderSection img={paris}>
					<div className="photo-header-section-text">
						<h2>Developer, designer, photographer, –& avid foodie.</h2>
						<p>Hi there! I'm Claire, and currently, I'm a senior at NYU studying:</p>
						<ul>
							<li>Computer Science</li>
							<li>Web Programming & Applications</li>
							<li>Business of Entertainment, Media, and Technology</li>
						</ul>
						<p>Although I have many varied interests, what I am passionate about is helping companies develop attractive, functional, and intuitive user experiences, and I believe that having a holistic view of the software I engineer will result in better end products.</p>
						<p>Interested in learning more? Please feel free to contact me at <a href="mailto:cyw336@nyu.edu">cyw336@nyu.edu</a>. Looking forward to hearing from you!</p>
					</div>
				</PhotoHeaderSection>
				<StandardSection color="white" styles={{"padding-top": "4rem"}}>
					<div className="section">
						<h2>Work Experience</h2>
						{jobs.map(position => (
							<Position title={position.title} company={position.company} date={position.date} description={position.description} />
						))}
						<p><Link to="/resume" className="button">Resume</Link></p>
					</div>
				</StandardSection>
				<BlogSection title="Recent Work" />
				<Footer />
			</div>
		);
	}
}

export default About;