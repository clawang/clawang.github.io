import React from 'react';
import './About.scss';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import {StandardSection, HeaderSection, Footer} from './Layouts';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import wsp from './media/virtualnyc.png';
import shengji from './media/login.png';
import screen from './media/portfolio.png';
import tot from './media/tot.png';

const projects = [
	{
		title: "Real-Time Multiplayer Sheng Ji",
		src: shengji,
		button: true,
		link: "https://murmuring-plateau-52201.herokuapp.com/",
		linkText: "View Demo",
		tags: "node.js, express, socket.io, mongoDB, SASS",
		description: "Developed a real-time multiplayer web game to play Sheng Ji, a classic Chinese card game. It's a tradition in my family to play this game at get togethers, and ever since my parents moved out of the country and my sister and I have gone to college, we haven't had the chance to play. I thought this would be a good temporary solution until we are all together again."
	},
	{
		title: "Virtual New York City",
		src: wsp,
		button: true,
		link: "/dotw-final-project",
		linkText: "View Demo",
		tags: "HTML, javascript, CSS animation, adobe illustrator",
		description: "Illustrated and developed interactive animated web drawings of New York City, as a homage to the city during the thick of the pandemic. I chose locations that meant a lot to me, personally, as I missed the vibrance that they usually held."
	},
	{
		title: "Twenty Over Ten Websites",
		src: tot,
		button: true,
		link: "/tot",
		linkText: "See More",
		tags: "HTML, CSS, jQuery",
		description: "During my internship at Twenty Over Ten, I designed and developed a number of websites for various financial advisors. Here are just a few examples."
	},
	{
		title: "Portfolio Website",
		src: screen,
		button: false,
		link: "/",
		linkText: "See the CSS drawing",
		tags: "react.js, SASS",
		description: "I developed this website to showcase my professional and personal work using React.js, SASS/CSS. For the homepage, I challenged myself to create a 2D scene entirely out of HTML elements and CSS. Some of the elements are animated, and others (like the Polaroids) are interactive."
	}
];

class GalleryItem extends React.Component {
	render() {
		let btn;
		if(!this.props.button) {
			btn = "";
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

