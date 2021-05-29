import React from 'react';
import './About.scss';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import {StandardSection, HeaderSection, Footer} from './Layouts';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import wsp from './media/virtualnyc.png';
import shengji from './media/login.png';
import screen from './media/portfolio.png';
import tot from './media/tot.png';
import wrapped from './media/quarantine-wrapped.png';
import covid from './media/covid.png';
import bv from './media/bv.png';

const projects = [
	{
		title: "Quarantine Wrapped",
		src: wrapped,
		button: true,
		link: "https://quarantine-wrapped.herokuapp.com/",
		linkText: "View Demo",
		tags: "React, node.js, Express, SASS, REST API",
		description: "A Spotify wrapped clone created with the Spotify API to show users a summary of their Spotify listening activity for the past 6 months."
	},
	{
		title: "Real-Time Multiplayer Sheng Ji",
		src: shengji,
		button: true,
		link: "https://multiplayer-sheng-ji.herokuapp.com/",
		linkText: "View Demo",
		tags: "React, node.js, Express, Socket.io, SASS",
		description: "Developed a real-time multiplayer web game to play Sheng Ji, a classic Chinese card game. It's a tradition in my family to play this game at get togethers, and ever since my sister and I have gone to college, we haven't had the chance to play. I thought this would be a good temporary solution until we get the chance to be together again."
	},
	{
		title: "Virtual New York City",
		src: wsp,
		button: true,
		link: "https://clawang.github.io/dotw-final-project",
		linkText: "View Demo",
		tags: "HTML, Javascript, CSS Animation, Adobe Illustrator",
		description: "Illustrated and developed interactive animated web drawings of New York City, as a homage to the city during the thick of the pandemic. I chose locations that meant a lot to me, personally, as I missed the vibrance that they usually held."
	},
	{
		title: "Bon Viveur",
		src: bv,
		button: true,
		link: "https://clawang.github.io/bon-viveur",
		linkText: "View Demo",
		tags: "React, Google Maps API",
		description: "Developed a website to display restaurant recommendations in NYC using the Google Maps API. Markers were populated on the map using a script and the Google Places API, and users can view in map or list format. Restaurants can be filtered by cuisine, category, location, and price."
	},
	{
		title: "CovidStory",
		src: covid,
		button: true,
		link: "https://clawang.github.io/ic-midterm-project",
		linkText: "View Demo",
		tags: "HTML, Javascript, p5",
		description: "Developed a game where you fight Covid particles throughout different countries in multiple levels. You get stronger as you go, but so does the covid. Once you earn enough points, you can purchase upgrades at the shop to help you in your fight. Based off Maple Story."
	},
	{
		title: "Twenty Over Ten Websites",
		src: tot,
		button: true,
		link: "/tot",
		linkText: "See More",
		tags: "HTML, CSS, jQuery",
		description: "During my internship at Twenty Over Ten, I designed a number of websites for various financial advisors, and developed them by customizing Twenty Over Ten's content management system using CSS and jQuery. Here are just a few examples."
	},
	{
		title: "Portfolio Website",
		src: screen,
		button: true,
		link: "https://github.com/clawang/clawang.github.io/",
		linkText: "View Source Code",
		tags: "React, SASS",
		description: "I developed this website to showcase my professional and personal work using React.js, SASS/CSS. For the homepage, I challenged myself to create a 2D scene entirely out of HTML elements and CSS. Some of the elements are animated, and others (like the Polaroids) are interactive."
	}
];

class GalleryItem extends React.Component {
	render() {
		let btn;
		if(!this.props.button) {
			btn = "";
		} else if(this.props.link.charAt(0) === "/") {
			btn = <p><Link to={this.props.link}><a className="button" style={{"marginLeft": 0}}>{this.props.linkText}</a></Link></p>;
		} else {
			btn = <p><a href={this.props.link} target="_blank" className="button" style={{"marginLeft": 0}}>{this.props.linkText}</a></p>;
		}
		return (
			<div className="gallery-item-wrapper">
				<div className="gallery-item-img">
					<img src={this.props.img} onClick={() => {this.props.onClick(this.props.img)}} />
				</div>
				<div className="gallery-item-text">
					<p className="tags">{this.props.tags}</p>
					<h2>{this.props.title}</h2>
					<p>{this.props.description}</p>
					{btn}
				</div>
			</div>
		);
	}
}

class Gallery extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false,
		};
		this.handleClick = this.handleClick.bind(this);
		this.handleImgClick = this.handleImgClick.bind(this);
	}

	handleClick() {
		this.setState({visible: false});
	}

	handleImgClick(src) {
		if(this.props.lightbox) {
			this.setState({visible: true});
			document.getElementById('pop-up-img').src = src;
		}
	}

	render() {
		return (
			<div className={"gallery-wrapper " + (this.props.lightbox ? "lightbox" : "")}>
				<CSSTransition in={this.state.visible} timeout={100} classNames="visible">
					<div className="pop-up" onClick={this.handleClick}><img src="" id="pop-up-img" /></div>
				</CSSTransition>
				{this.props.items.map(item => (
					<GalleryItem img={item.src} link={item.link} title={item.title} tags={item.tags} description={item.description} linkText={item.linkText} button={item.button} onClick={this.handleImgClick} />
				))}
				{this.props.subpage ? <p className="back-link">⟵ <Link to="/work">Back to Projects</Link></p> : <div></div>}
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

export {Work, Gallery};

