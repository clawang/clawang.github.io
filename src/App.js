import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Link, Switch, Route, withRouter, useLocation} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Work from './Work';
import Hobbies from './Hobbies';
import './App.css';
import './DefaultStyles.scss';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import logo from './media/claire.png';

function App({location})  {
	const [currentPath, setCurrentPath] = useState(location.pathname);

	  useEffect(() => {
	    const { pathname } = location;
	    setCurrentPath(pathname);
	  }, [location.pathname]);

	  return (
	    <div className="App">
			<NavBar />
			<Route render={({location}) => {
				return (
		    		<TransitionGroup>
			    		<CSSTransition key={location.pathname} timeout={1000} classNames="switch">
				    		<Switch location={location} key={location.pathname}>
					          	<Route path="/about" component={About} />
					          	<Route path="/work" component={Work} />
					          	<Route path="/hobbies" component={Hobbies} />
					          	<Route path="/" component={Home} />
					        </Switch>
				        </CSSTransition>
			        </TransitionGroup>
			    );
	        }} />
	    </div>
	  );
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

	handleClick(e) {
		const currentState = this.state.open;
		this.setState({open: !currentState});
		if(currentState) {
			document.querySelector('.nav').classList.remove('hover');
		}
	}

	logoClick() {
		const currentState = this.state.open;
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
					<div className="menu" onMouseEnter={this.handleHover} onMouseLeave={this.removeHover} onClick={this.handleClick}>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</CSSTransition>
				<CSSTransition in={this.state.open} timeout={350} classNames="open">
					<div className="nav" key="nav">
						<div className="nav-container">
							<NavItem number="01." name="About" link="/about" onClick={this.handleClick} />
							<NavItem number="02." name="Work" link="/work" onClick={this.handleClick} />
							<NavItem number="03." name="Hobbies" link="/hobbies" onClick={this.handleClick} />
							<NavItem number="04." name="Resume" link="/resume" onClick={this.handleClick} />
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
				<div className="nav-item" onClick={this.props.onClick}>
					<p>{this.props.number}</p>
					<h3>{this.props.name}</h3>
				</div>
			</Link>
		);
	}
}

export default withRouter(App);
