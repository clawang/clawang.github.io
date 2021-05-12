import React, { useEffect, useState } from 'react';
import {HashRouter as Router, Link, Switch, Route, withRouter, useLocation} from 'react-router-dom';
import Home from './Home';
import About from './About';
import {Work} from './Work';
import TOT from './tot';
import Hobbies from './Hobbies';
import Resume from './Resume';
import './App.css';
import './DefaultStyles.scss';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import logo from './media/claire.png';

function App({location})  {
	const [currentPath, setCurrentPath] = useState(location.pathname);
	const [currentPage, setPage] = useState(1);
	const [navOpen, setNav] = useState(false);
	const [hoverPage, setHover] = useState(0);

	useEffect(() => {
		// const { pathname } = location;
		// setCurrentPath(pathname);
	}, [location.pathname]);

	const switchPage = (page) => {
		setPage(page);
	};

	const showHover = (num) => {
		setHover(num);
		console.log(num);
	};

	return (
	<div className="App">
		<NavBar router={switchPage} navOpen={setNav} hoverPage={showHover} />
		<div className={"container " + (navOpen ? "minimized" : "")}>
			<div className="freeze-overlay">
				{hoverPage > 0 ? <Page index={hoverPage} /> : ""}
			</div>
			<Page index={currentPage} />
		</div>
	</div>
	);
}

function Page(props) {
	if(props.index === 1) {
		return <Home />;
	} else if(props.index === 2) {
		return <About />;
	} else if(props.index === 3) {
		return <Work />;
	} else if(props.index === 4) {
		return <TOT />;
	} else if(props.index === 5) {
		return <Hobbies />;
	} else if(props.index === 6) {
		return <Resume />;
	} 
}

class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
		};
		this.handleClick = this.handleClick.bind(this);
		this.handleHover = this.handleHover.bind(this);
		this.logoClick = this.logoClick.bind(this);
		this.removeHover = this.removeHover.bind(this);
	}

	handleHover() {
		const nav = document.querySelector('.nav');
		if(!this.state.open) {
			nav.classList.toggle('hover');
		} 
	}

	removeHover() {
		const currentState = this.state.open;
		if(!currentState) {
			document.querySelector('.nav').classList.remove('hover');
		}
	}

	handleClick(page) {
		const currentState = this.state.open;
		this.setState({open: !currentState});
		this.props.navOpen(!currentState);
		if(currentState) {
			document.querySelector('.nav').classList.remove('hover');
			console.log(page);
			if(page) this.props.router(page);
		}
	}

	logoClick() {
		const currentState = this.state.open;
		this.props.router(1);
		if(currentState) {
			this.setState({open: false});
			document.querySelector('.nav').classList.remove('hover');
		}
	}

	render() {
		return (
			<div className="nav-wrapper">
				<div id="logo">
					<Link to="/"><img src={logo} onClick={this.logoClick} /></Link>
				</div>
				<CSSTransition in={this.state.open} timeout={250} classNames="cross">
					<div className="menu" onMouseEnter={this.handleHover} onMouseLeave={this.removeHover} onClick={() => this.handleClick(0)}>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</CSSTransition>
				<CSSTransition in={this.state.open} timeout={350} classNames="open">
					<div className="nav" key="nav">
						<div className="nav-container">
							<NavItem number="01." name="About" onClick={() => this.handleClick(2)} handleHover={() => this.props.hoverPage(2)} />
							<NavItem number="02." name="Work" onClick={() => this.handleClick(3)} handleHover={() => this.props.hoverPage(3)} />
							<NavItem number="03." name="Hobbies" onClick={() => this.handleClick(5)} handleHover={() => this.props.hoverPage(5)} />
							<NavItem number="04." name="Resume" onClick={() => this.handleClick(6)} handleHover={() => this.props.hoverPage(6)} />
						</div>
					</div>
				</CSSTransition>
			</div>
		);
	}
}

class NavItem extends React.Component {

	render() {
		return (
    		<Link to={this.props.link}>
				<div className="nav-item" onClick={this.props.onClick} onHover={this.props.handleHover}>
					<p>{this.props.number}</p>
					<h3>{this.props.name}</h3>
				</div>
			</Link>
		);
	}
}

export default withRouter(App);
