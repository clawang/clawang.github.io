import React from 'react';
import cx from 'classnames';
import {CSSTransition} from 'react-transition-group';
import styles from './Layouts.scss';
import {Router, Link} from 'react-router-dom';
import wsp from './media/virtualnyc.png';
import shengji from './media/login.png';
import screen from './media/portfolio.png';
import tot from './media/tot.png';
import email from './media/mail.svg';
import linkedin from './media/linkedin.svg';

class StandardSection extends React.Component {
	render() {
		return (
			<div className={"section-wrapper " + this.props.color} style={this.props.styles}>
				{this.props.children}
			</div>
		);
	}
}

class BlogSection extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: [
				{
					src: wsp,
					title: 'Virtual NYC',
					description: 'HTML, CSS Animation, SVG, Adobe Illustrator, Javascript',
					link: '/dotw-final-project',
					local: false
				},
				{
					src: shengji,
					title: 'Real-Time Multiplayer Sheng Ji',
					description: 'Node, Express, MongoDB, Socket.io, HTML, SASS/CSS, jQuery',
					link: 'https://murmuring-plateau-52201.herokuapp.com/',
					local: false
				},
				{
					src: tot,
					title: 'Twenty Over Ten',
					description: 'HTML, CSS, jQuery',
					link: '/tot',
					local: true
				}
			]
		}
	}

	render() {
		return (
			<div className={"section-wrapper " + this.props.color}>
				<div className="section">
					<h1 style={{"text-align": "right"}}>{this.props.title}</h1>
					<div className="blog-wrapper">
						{this.state.posts.map(post => (
							<BlogPost src={post.src} title={post.title} link={post.link} local={post.local}/>
						))}
					</div>
				</div>
			</div>
		);
	}
}

function BlogPost(props) {
	const content = (
		<>
			<img src={props.src} />
			<p>{props.title}</p>
		</>
	);
	return (
		<div className="blog-post">
			{props.local ? <Link to={props.link}>{content}</Link> : <a href={props.link}>{content}</a>}
		</div>
	);
}

class SplitSection extends React.Component {
	render() {
		return (
			<div className="split-section-wrapper">
				<div className="split-section-light">
					{this.props.children}	
				</div>
				<div className="split-section-dark">
					<div>
						<img src={this.props.img} />
					</div>
				</div>
			</div>
		);
	}
}

class CollageSection extends React.Component {
	render() {
		return (
			<div className="section-wrapper">
				<div className="section">
					<div className="collage-wrapper">
						<div className="collage-left">
							<img src={this.props.pic1} id="photography-link" />
							<Link to="/hobbies">
							<p><a className="button" href={this.props.link}>{this.props.linkTitle}</a></p>
							</Link>
						</div>
						<div className="collage-right">
							<div className="collage-inner-header">
								<h1>{this.props.title}</h1>
							</div>
							<div className="collage-inner-top">
								<img src={this.props.pic2} />
							</div>
							<div className="collage-inner-bottom">
								<img src={this.props.pic3} />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

class HeaderSection extends React.Component {
	render() {
		return (
			<div className={"section-wrapper top-section header " + this.props.color}>
				<h1>{this.props.title}</h1>
			</div>
		);
	}
}

class PhotoHeaderSection extends React.Component {
	render() {
		return (
			<div className="section-wrapper top-section">
				<div className="photo-header-section-wrapper">
					{this.props.children}
					<div>
						<img src={this.props.img} />
						<div className="bg"></div>
						<img src={this.props.img} id="placeholder" />
					</div>
				</div>
			</div>
		);
	}
}

function Footer(props) {
	return (
		<div className="footer">
			<h1>Contact</h1>
			<a href="mailto:cyw336@nyu.edu" alt="email" title="Email"><img src={email} /></a>
			<a href="https://www.linkedin.com/in/clawang/" alt="linkedin" title="LinkedIn"><img src={linkedin} /></a>
		</div>
	);
}

export {StandardSection, SplitSection, BlogSection, CollageSection, HeaderSection, PhotoHeaderSection, Footer};

