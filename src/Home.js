import React from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import {StandardSection, SplitSection, BlogSection, CollageSection, Footer} from './Layouts';
import Drawing from './Drawing';
import styles from './Home.scss';
import tulum from './media/tulum.jpg';
import bluestripes from './media/bluestripes.jpg';
import westvillage from './media/westvillage.jpg';
import paris from './media/paris.jpg';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			prevScrollpos: window.pageYOffset,
      		hidden: true
		}
		this.handleScroll = this.handleScroll.bind(this);
	}

	handleScroll() {
	  const currentScrollPos = window.pageYOffset;
	  console.log(currentScrollPos);
	  let v = currentScrollPos < 700;
	  console.log(v);

	  this.setState({
	    prevScrollpos: currentScrollPos,
	    hidden: v
	  });
	}

	render() {
		return (
			<div className="home page">
				<Drawing />
				<StandardSection color="pink">
					<div className="section">
						<h1>Skills</h1>
						<div className="skills-wrapper">
							<SkillButton name="javascript"/>
							<SkillButton name="html"/>
							<SkillButton name="CSS/SASS"/>
							<SkillButton name="react"/>
							<SkillButton name="java"/>
							<SkillButton name="python"/>
							<SkillButton name="SQL"/>
							<SkillButton name="mongoDB"/>
						</div>
					</div>
				</StandardSection>
				<BlogSection title="Recent Work" />
				<SplitSection img={paris}>
					<div>
						<h3>Hey there, I'm Claire, I'm passionate about helping companies develop attractive, functional, and intuitive user experiences. </h3>
						<p>I'm currently a senior at NYU currently studying Computer Science, Web Programming & Applications, and the Business of Entertainment, Media, and Technology. </p>
						<p>Just a few of my many varied interests include: software development, UX design, and photography, </p>
						<p className="read-more-link"><Link to="/about">Read More</Link> ⟶</p>
					</div>
				</SplitSection>
				<CollageSection title="Other Interests" linkTitle="View More" pic1={tulum} pic2={westvillage} pic3={bluestripes} />
				<Footer />
			</div>
		);
	}

	componentDidMount() {
	  window.addEventListener("scroll", this.handleScroll);
	}

}

function Project(props) {
	return (
		<div className="project-item">
			<img src={props.img} />
			<a href={props.link}><h3>{props.title}</h3></a>
			<p>{props.desc}</p>
		</div>
	);
}

function SkillButton(props) {
	return (
		<p className="skill-button">{props.name}</p>
	);
}

export default Home;