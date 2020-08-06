import React from 'react';
import styles from './Drawing.scss';

const headerLetters = ['C', 'l', 'a', 'i', 'r', 'e', ' ', 'W', 'a','n','g'];
const subtitleLetters = 'DEVELOPER & DESIGNER';

class Drawing extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			header: '',
			headerDone: false,
			subtitle: '',
			subtitleDone: false
		};
		this.typeHeader = this.typeHeader.bind(this);
		this.typeSubtitle = this.typeSubtitle.bind(this);
	}

	typeHeader(i) {
		if (this.state.header.length < headerLetters.length) {
			const newHeader = this.state.header.concat(headerLetters[i]);
			setTimeout(
			    function() {
			        this.setState({header: newHeader});
			        this.typeHeader(i+1);
			    }
			    .bind(this),
			    200
			);
		} else {
			this.setState({headerDone: true});
			setTimeout(
			    function() {
			        this.typeSubtitle(0);
			    }
			    .bind(this),
			    500
			);
		}
	}

	typeSubtitle(j) {
		if(this.state.subtitle.length < subtitleLetters.length) {
			const newSub = this.state.subtitle.concat(subtitleLetters.charAt(j));
			setTimeout(
			    function() {
			        this.setState({subtitle: newSub});
			        this.typeSubtitle(j+1);
			    }
			    .bind(this),
			    200
			);
		}
	}

	render() {
		return (
			<div className="drawing-container">
				<div className="drawing">
					<div className="computer">
						<div className="computer-screen">
							<h1 className={this.state.headerDone ? '' : 'typing'}>{this.state.header}</h1>
							<h4 className={this.state.subtitleDone ? '' : 'typing'}>{this.state.subtitle}</h4>
						</div>
						<div className="computer-bezel">
							<div className="computer-button"></div>
						</div>
						<div className="computer-stand"></div>
					</div>
					<div className="mouse"></div>
					<div className="plant">
						<div className="plant-pot"></div>
						<div className="plant-leaves-1"></div>
						<div className="plant-leaves-2"></div>
						<div className="plant-leaves-3"></div>
					</div>
					<div className="coffee">
						<div className="coffee-mug"></div>
						<div className="coffee-handle"></div>
					</div>
					<div className="shelf">
						<div className="book-1"></div>
						<div className="book-2"></div>
						<div className="book-3"></div>
						<div className="book-4"></div>
						<div className="binder-1"></div>
						<div className="book-5"></div>
						<div className="book-6"></div>
						<div className="book-7"></div>
						<div className="shelf-picture"></div>
						<div className="shelf-plant">
							<div className="shelf-plant-pot"></div>
							<div className="shelf-plant-1"></div>
							<div className="shelf-plant-2"></div>
							<div className="shelf-plant-3"></div>
						</div>
						<div className="shelf-bottom"></div>
					</div>
					<Polaroid color="blush" top="150px" left="650px" />
					<Polaroid color="blue" top="170px" left="800px"/>
					<Polaroid color="darkGreen" top="220px" left="720px" />
					<Polaroid color="nude" top="300px" left="120px" />
					<div className="clock">
						<div className="clock-hour-hand"></div>
						<div className="clock-minute-hand"></div>
						<div className="clock-second-hand"></div>
					</div>
				</div>
				<div className="desk"></div>
			</div>
		);
	}

	componentDidMount() {
		let flag = this.typeHeader(0); 
	}
}

function Polaroid(props) {
	const colors = {
		blush: "#d09b7b",
		nude: "#d0b0af",
		terracotta: "#bb6f1c",
		blue: "#cbd2d4",
		darkGreen: "#3A4F41",
		lightGreen: "#81957a"
	}
	return (
		<div className="polaroid-container" style={{top: props.top, left: props.left}}>
			<div className="polaroid-photo"  style={{background: colors[props.color]}}></div>
		</div>
	);
}

export default Drawing;