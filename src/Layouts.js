import React, {useEffect, useState, useRef} from 'react';
import cx from 'classnames';
import {CSSTransition} from 'react-transition-group';
import styles from './Layouts.scss';
import {Router, Link} from 'react-router-dom';
import wsp from './media/virtualnyc.png';
import shengji from './media/login.png';
import screen from './media/portfolio.png';
import tot from './media/tot.png';
import email from './media/mail.svg';
import gh from './media/github.png';
import linkedin from './media/linkedin.svg';
import wrapped from './media/quarantine-wrapped.png';

class StandardSection extends React.Component {
	render() {
		return (
			<div className={"section-wrapper " + this.props.color} style={this.props.styles}>
			{this.props.text ? 
				<div className="text-wrapper">
					{this.props.children}
				</div>
				 : 
				this.props.children
			}
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
					title: "Quarantine Wrapped",
					src: wrapped,
					link: "https://quarantine-wrapped.herokuapp.com/",
					description: "React, node.js, Express, SASS, REST API",
					local: false
				},
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
					link: 'https://multiplayer-sheng-ji.herokuapp.com/',
					local: false
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
						<div className="blog-link">
							<Link to="/work">
								<h4>See More ⟶</h4>
							</Link>
						</div>
					</div>

				</div>
			</div>
		);
	}
}

function BlogPost(props) {
	const content = (
		<div>
			<img src={props.src} />
			<p>{props.title}</p>
		</div>
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
			<div className={"section-wrapper top-section " + this.props.color}>
				<div className="photo-header-section-wrapper">
					{this.props.children}
					<div className="photo-header-section-photo">
						<img src={this.props.img} />
						<div className="bg"></div>
						<img src={this.props.img} id="placeholder" />
					</div>
				</div>
			</div>
		);
	}
}

class PhotoTitleSection extends React.Component {
	render() {
		return (
			<div className="section-wrapper top-section" style={{paddingBottom: '1rem'}}>
				<div className="photo-title-section-wrapper">
					<div>
						<img src={this.props.img} />
						<div className="bg"></div>
						<img src={this.props.img} id="placeholder" />
					</div>
					{this.props.children}
				</div>
			</div>
		);
	}
}

class TileGallery extends React.Component {
	render() {
		return (
			<div className="gallery">
				{this.props.images.map(img => {
					return (
						<TileGalleryItem src={img.src} caption={img.caption} />
					);
				})}
			</div>
		);
	}
}

function TileGalleryItem(props) {

	const container = useRef(null);
	const image = useRef(null);
	const [topOffset, setTop] = useState(0);

	useEffect(() => {
		resize();
	}, []);

	window.addEventListener('resize', function(event) {
    	resize();
	});

	const resize = () => {
		if(image.current) {
			let w = image.current.clientWidth;
			setTop(w);
		}
	}

	return (
		<div className="gallery-item">
			<div className="gallery-item-photo" ref={container}>
				<img src={process.env.PUBLIC_URL + props.src} style={{height: topOffset}} ref={image}/>
			</div>
			<p className="gallery-caption">{props.caption}</p>
		</div>
	);
}

class PhotoDivider extends React.Component {
	render() {
		return (
			<div className="photo-divider" style={{backgroundImage: "url(" + process.env.PUBLIC_URL + this.props.img + ")"}}>
			</div>
		);
	}
}

function Footer(props) {
	return (
		<div className="footer-wrapper">
			<div className="footer">
				<h1>Get in touch –</h1>
				<div className="footer-links">
					<a href="mailto:cyw336@nyu.edu" target="_blank" alt="email" title="Email"><img src={email} /></a>
					<a href="https://github.com/clawang" target="_blank" alt="github" title="Github"><img src={gh} /></a>
					<a href="https://www.linkedin.com/in/clawang/" target="_blank" alt="linkedin" title="LinkedIn"><img src={linkedin} /></a>
				</div>
			</div>
		</div>
	);
}

export {StandardSection, SplitSection, BlogSection, CollageSection, HeaderSection, PhotoHeaderSection, PhotoTitleSection, PhotoDivider, TileGallery, Footer};

