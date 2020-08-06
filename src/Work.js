import React from 'react';
import './About.scss';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import {StandardSection, HeaderSection, Footer} from './Layouts';
import wsp from './media/virtualnyc.png';
import shengji from './media/login.png';
import screen from './media/portfolio.png';
import tot from './media/tot.png';

const projects = [
	{
		title: "Real-Time Multiplayer Sheng Ji",
		src: shengji,
		link: "https://murmuring-plateau-52201.herokuapp.com/",
		tags: "node.js, express, socket.io, mongoDB, SASS",
		description: "Developed a real-time multiplayer web game to play Sheng Ji, a classic Chinese card game. It's a tradition in my family to play this game at get togethers, and ever since my parents moved out of the country and my sister and I have gone to college, we haven't had the chance to play. I thought this would be a good temporary solution until we are all together again."
	},
	{
		title: "Virtual New York City",
		src: wsp,
		link: "https://murmuring-plateau-52201.herokuapp.com/",
		tags: "HTML, javascript, CSS animation, adobe illustrator",
		description: "Illustrated and developed interactive animated web drawings of New York City, as a homage to the city during the thick of the pandemic. I chose locations that meant a lot to me, personally, as I missed the vibrance that they usually held."
	},
	{
		title: "Twenty Over Ten Websites",
		src: tot,
		link: "/",
		tags: "HTML, CSS, jQuery",
		description: "During my time at Twenty Over Ten, I designed and developed a number of websites for various financial advisors. Here are just a few examples."
	},
	{
		title: "Portfolio Website",
		src: screen,
		link: "#",
		tags: "react.js, SASS",
		description: "I developed this website to showcase my professional and personal work using React.js, SASS/CSS."
	}
];

class GalleryItem extends React.Component {
	render() {
		return (
			<div className="gallery-item-wrapper">
				<div className="gallery-item-img">
					<img src={this.props.img} />
				</div>
				<div className="gallery-item-text">
					<p className="tags">{this.props.tags}</p>
					<h2>{this.props.title}</h2>
					<p>{this.props.description}</p>
					<p><a href={this.props.link} className="button" style={{"marginLeft": 0}}>See More</a></p>
				</div>
			</div>
		);
	}
}

class Gallery extends React.Component {
	render() {
		return (
			<div className="gallery-wrapper">
				{this.props.items.map(item => (
					<GalleryItem img={item.src} link={item.link} title={item.title} tags={item.tags} description={item.description} />
				))}
			</div>
		);
	}
}

class Work extends React.Component {
	render() {
		return (
			<div className="page">
				<HeaderSection title="Projects" />
				<StandardSection color="white">
					<div className="section">
						<Gallery items={projects} />
					</div>
				</StandardSection>
				<Footer />
			</div>
		);
	}
}

export default Work;