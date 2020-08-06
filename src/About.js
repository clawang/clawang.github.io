import React from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import './About.scss';
import {StandardSection, PhotoHeaderSection, Footer} from './Layouts';
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
		title: "Application Developer Intern",
		company: "MarketAxess",
		date: "Jun 2020 - Present",
		description: "Developed and implemented enhancements using Angular.js and jQuery for internal web applications to manage behavior on MarketAxess’ bond trading platform. Improved internal UI based on user feedback by collaborating with developers and product owners."
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
					<div>
						<h1>Hi, I'm Claire.</h1>
						<p>I'm a developer, designer, photographer, blogger, and all around creative type. I'm currently studying Computer Science at NYU and minoring in Web Programming & Applications and Business of Entertainment, Media, and Technology.</p>
						<p>Although I have many varied interests, I think all of them stem from my desire to better facilitate communication; to help brands reach their customers and to help people reach their peers. Because real, authentic connections are what shape our technologies, our brands, and our everyday lives.</p>
						<p>In my free time, I run a travel blog, dabble in photography, and spend all my money on brunch.</p>
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
				<Footer />
			</div>
		);
	}
}

export default About;