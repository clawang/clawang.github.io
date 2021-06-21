import React from 'react';
import styles from './Hobbies.scss';
import {HashRouter as Router, Link, Switch, Route, withRouter, useLocation} from 'react-router-dom';
import {StandardSection, HeaderSection, SplitSection, Footer, TileGallery, PhotoDivider, PhotoHeaderSection, PhotoTitleSection} from './Layouts';
import tulum from './media/westvillage.jpg';
import nice from './media/amalfi.jpg';
import dame from './media/dametraveler.jpg';
import tj from './media/cupoftj2.jpg';

const hobbies = [
	{title: 'Adventure At Work',
	src: '/aaw.jpg',
	subtitle: 'Travel Blog',
	link: '/aaw'},
	{title: 'Bite Club NYU',
	src: '/blankslatetea.jpg',
	subtitle: 'Food Photography + Social Media',
	link: '/biteclub'},
	{title: 'Cup of TJ',
	src: '/cupoftj.jpg',
	subtitle: 'Graphic Design + Social Media',
	link: '/cupoftj'},
	{title: 'DJI',
	src: '/dji.jpg',
	subtitle: 'Video Editing',
	link: '/dji'}
];

const travelPics = [
	{src: 'nyt.JPG',
	caption: 'Met some travel bloggers that I really admire at the New York Times Travel Show.'},
	{src: 'book.jpg',
	caption: <span>My picture of London street food in #wanderlust by <a href="https://www.instagram.com/girlvsglobe" target="_blank">@girlvsglobe</a>.</span>},
	{src: 'nomadicmatt.jpg',
	caption: <span>Got to meet <a href="https://www.nomadicmatt.com/" target="_blank">Nomadic Matt</a> and his team at his book launch in NYC.</span>}
];

const foodPics = [
	{src: '/food/gracestreet.jpg',
	caption: 'Grace Street'},
	{src: '/food/johnsjuice.jpg',
	caption: "John's Juice"},
	{src: '/food/goodthanks.jpg',
	caption: "Good Thanks"},
	{src: '/food/simo-4.jpg',
	caption: 'Simo Pizza'},
	{src: '/food/dessertgoals.jpg',
	caption: "Dessert Goals Festival"},
	{src: '/food/citizensofbleecker-3.jpg',
	caption: "Citizens of Bleecekr"},
	{src: '/food/barpatea.jpg',
	caption: "Bar Pa Tea"},
	{src: '/food/charleyst-5.jpg',
	caption: "Charley St"},
	{src: '/food/sweetmoment.jpg',
	caption: "Sweet Moment"},
	{src: '/food/blankslatetea-8.jpg',
	caption: "Blank Slate Tea"},
	{src: '/food/bluestripes-7.jpg',
	caption: "Blue Stripes"},
	{src: '/food/thedonutpub-4.jpg',
	caption: "The Donut Pub"}
];

class Play extends React.Component {
	render() {
		return (
			<div className="page">
				<HeaderSection title="Play" color="white" />
				<StandardSection color="" text={false}>
					<div className="tiled-nav">
						{hobbies.map((h, i) => <PlayItem title={h.title} src={h.src} subtitle={h.subtitle} number={i+1} link={h.link} />)}
					</div>
				</StandardSection>
				<Footer />
			</div>
		);
	}
}

function PlayItem(props) {
	return (
		<div className="tiled-nav-item-wrapper">
			<Link to={props.link}>
			<div className="tiled-nav-item">
				<div className="tiled-nav-pic" style={{backgroundImage: 'url("'+process.env.PUBLIC_URL +props.src+'")'}}></div>
				<div className="tiled-nav-text">
					<h1>{props.title}</h1>
					<h4>{props.subtitle}</h4>
				</div>
				<h2>{'0' + props.number + '.'}</h2>
			</div>
			</Link>
		</div>
	);
}

function AdventureAtWork(props) {
	return (
		<div className="page aaw">
			<PhotoHeaderSection img={nice} color="white">
				<div className="photo-header-section-text">
					<h1 style={{marginBottom: '0.3em', fontSize: '4em'}}>Adventure At Work</h1>
					<p>In my junior year of high school, I decided to start a <a href="http://adventureatwork.co" target="_blank">travel blog</a> to document my journeys. Although it started out as a personal blog to record my memories, upon introduction to the travel blog community I discovered that there were people for whom their travel blog was their full-time job!</p>
					<p>As a student, I could never commit the same amount of time into my blog as the professionals did, but through the travel community I did learn enough to turn my humble blog into a side gig which at its peak reached 80,000 monthly page views! I learned so much about photography, digital marketing, graphic design, and more through this community, and also received some insane opportunities, like the chance to attend the New York Times Travel Show and to see <a href="https://www.amazon.com/wanderlust-Worlds-Unforgettable-Travel-Destinations/dp/006298103X" target="_blank">my photography published in a book</a>. And the best part is, I got to meet some of the most incredible people from around the world.</p>
				</div>
			</PhotoHeaderSection>
			<StandardSection color="">
				<div className="section">
					<h1>Read the Blog</h1>
					<p><a href="http://adventureatwork.co/" target="_blank" className="button">Read More</a></p>
				</div>
			</StandardSection>
			<StandardSection color="white" text={true}>
				<div className="section">
					<div className="columns">
						<h1>2016.</h1>
						<p>In 2016, I became an ambassador for The Travel Women, a community for female travelers. Founded by Jennifer O'Brien, The Travel Women exists as both a blog and a larger community for women by women to help you travel more, for less. As an ambassador, I <a href="https://thetravelwomen.com/blog/author/clairewang/" target="_blank">wrote articles</a> and contributed photography for the site biweekly.</p>
					<p className="read-more-link"><a href="https://thetravelwomen.com/blog/interview-with-claire-wang/" target="_blank">Read More</a> ⟶</p>
					</div>
{/*					<TileGallery images={travelPics} />
*/}				</div>
			</StandardSection>
			<StandardSection color="soft-pink" text={false}>
				<div className="half-section">
					<div className="half-section-pic">
						<img src={process.env.PUBLIC_URL + './nyt1.JPG'} />
						<img src={process.env.PUBLIC_URL + './nyt3.JPG'} />
					</div>
					<div className="half-section-text">
						<h1>2018.</h1>
						<p>Through my ambassadorship with The Travel Women, in 2018 I got to attend the New York Times Travel Show. This is the largest travel trade and consumer show in North America, with exhibitor booths from all around the world, tens of thousands of travel industry professionals, and industry expert speakers. This was an amazing opportunity for me to meet a ton of travel bloggers who I admired, such as Nomadic Matt and his team!</p>
					</div>
				</div>
			</StandardSection>
			<SplitSection img={dame}>
				<div>
					<h1>2019.</h1>
					<p>In 2019, I studied abroad in London during my spring semester and gathered a ton of new content for my blog. This was also the year my blog was the most successful – at the peak of traffic, I received 80,000 pageviews in one month! When I came back to New York in the summer, I met the founder of Dame Traveler, a famous female travel publication and community with over half a million followers, and had the opportunity to have one of my articles published in Dame Traveler.</p>
					<p className="read-more-link"><a href="https://dametraveler.com/a-brunch-lovers-guide-to-nolita-nyc/" target="_blank">Read More</a> ⟶</p>
				</div>
			</SplitSection>
			<StandardSection color="" text={false}>
				<div className="half-section">
					<div className="half-section-pic">
						<img src={process.env.PUBLIC_URL + './wanderlust.jpg'} />
						<img src={process.env.PUBLIC_URL + './book.jpg'} />
					</div>
					<div className="half-section-text">
						<h1 style={{color: 'black'}}>2020.</h1>
						<p>I used to guest blog for a blog called Girl vs. Globe, and in late 2019, the founder of Girl vs. Globe Sabina Trojanova contacted me about a travel coffee table book that she was writing. She asked if I would be interested in contributing photography for her book! The book #wanderlust now been published by Harper Design and is available on Amazon.</p>
						<p className="read-more-link"><a href="https://www.amazon.com/wanderlust-Worlds-Unforgettable-Travel-Destinations/dp/006298103X" target="_blank">See The Book</a> ⟶</p>
					</div>
				</div>
			</StandardSection>
			<StandardSection color="white" text={true}>
				<p className="back-link">⟵ <Link to="/play">Back to Projects</Link></p>
			</StandardSection>
			<Footer />
		</div>
	);
}

function BiteClub(props) {
	return (
		<div className="page">
			<HeaderSection title="Bite Club" color="orange" />
			<StandardSection text={true}>
				<div className="section">
					<div className="columns">
						<p>As an avid foodie and photographer, I started taking food photography more seriously once I moved to New York. I joined a food publication on campus called Spoon University, and started contributing to their <a href="https://instagram.com/biteclubnyu" target="_blank">Instagram account</a> weekly. Due to our sizeable following, I started to work with local restaurants to help them create photography for promotional materials.</p>
						<p>In my Junior year, I was promoted to Social Media Director of our club just as Spoon University the organization got defunded. We decided to rebrand our local chapter into a new publication called <a href="https://www.biteclubnyu.com/" target="_blank">Bite Club</a> so that we could continue creating content and supporting restaurants and eateries in the area. Especially during Covid, I'm proud to be able to use our influence to support local businesses in NYC.</p>
					</div>
					<p><a href="https://instagram.com/fooodiesadventures/" target="_blank" className="button">See my photography</a></p>
				</div>
			</StandardSection>
			<div className="gallery-full-wrapper">
				<div className="gallery-full">
					<TileGallery images={foodPics} />
				</div>
				<p className="back-link">⟵ <Link to="/play">Back to Projects</Link></p>
			</div>
			<Footer />
		</div>
	);
}

function CupofTJ(props) {
	return (
		<div className="page cupoftj-page">
			<PhotoHeaderSection img={tj} color="">
				<div className="photo-header-section-text">
					<h1 style={{marginBottom: '0.3em', fontSize: '4em'}}>Cup of TJ</h1>
					<p>Cup of TJ is a popular travel and food show on YouTube, hosted by TJ Lee. In August 2019, TJ brought me on to her team as a Social Media Coordinator and Graphic Designer. I designed many collatoral items for Cup of TJ, including social media graphics, YouTube banners and thumbnails, and more.</p>
					<p><a href="https://www.youtube.com/user/CupofTJ" target="_blank" className="button">Watch the Show</a></p>
				</div>
			</PhotoHeaderSection>
			<StandardSection color="white" text={true}>
				<h1>Graphics</h1>
				<div className="cupoftj">
					<div className="cupoftj-item">
						<img src={process.env.PUBLIC_URL + './cupoftj-yt.jpg'} />
						<h4>YouTube Thumbnail</h4>
					</div>
					<div className="cupoftj-item">
						<img src={process.env.PUBLIC_URL + './CupofTJ Pinterest.jpg'} />
						<h4>Pinterest Graphic</h4>
					</div>
				</div>
			</StandardSection>
			<div className="gallery-full-wrapper white">
				<img src={process.env.PUBLIC_URL + './cupoftj-banner.jpg'} />
				<div className="gallery-full">
					<h4>YouTube Banner</h4>
					<p className="back-link">⟵ <Link to="/play">Back to Projects</Link></p>
				</div>
			</div>
			<Footer />
		</div>
	);
}

function DJI(props) {
	return (
		<div className="page dji-page">
			<HeaderSection title="DJI" color="white" />
			<StandardSection text={true}>
				<div className="section">
					<div className="columns">
						<p>During the summer of 2018, I interned at DJI Headquarters in Shenzhen, China in the International Video Team. DJI is the world's leading consumer drone company, and the International Video Team's job was to create promotional video content for the company. As the intern, I collaborated with the team to help edit shorter clips for their extremely popular social media accounts using Adobe Premiere.</p>  
					</div>
				</div>
			</StandardSection>
			<div className="gallery-full-wrapper">
				<div className="gallery-full">
					<VidGallery />
				</div>
				<p className="back-link">⟵ <Link to="/play">Back to Projects</Link></p>
			</div>
			<Footer />
		</div>
	);
}

class VidGallery extends React.Component {
	render() {
		return (
			<div className="gallery-wrapper">
				<div className="gallery-item-wrapper">
					<div className="gallery-item-img">
						<iframe width="560" height="315" src="https://www.youtube.com/embed/sK7tlIzvUho" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					</div>
					<div className="gallery-item-text">
						<h2>DJI Mavic Air Showreel</h2>
						<p>This showreel was created in anticipation of the release DJI's at the time new product, the Mavic Air.</p>
						<p><a href="https://www.youtube.com/watch?v=sK7tlIzvUho" target="_blank" className="button" style={{"marginLeft": 0}}>Watch in HD</a></p>
					</div>
				</div>
				<div className="gallery-item-wrapper">
					<div className="gallery-item-img">
						<iframe width="560" height="315" src="https://www.youtube.com/embed/p8_SikiWwhM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					</div>
					<div className="gallery-item-text">
						<h2>DJI Billboard in Callao, Spain</h2>
						<p>A quick advertisement I created to promote the DJI Mavic Air during my summer internship. The video on the right is the file I made, the video on the left is it playing live in a square in Callao, Spain.</p>
						<p><a href="https://www.youtube.com/watch?v=p8_SikiWwhM&feature=youtu.be" target="_blank" className="button" style={{"marginLeft": 0}}>Watch in HD</a></p>
					</div>
				</div>
			</div>
		);
	}
}

/*
DJI Mavic Air Showreel
Programs used: Adobe Premiere
A showreel I edited for my internship at DJI, consisting of many clips all filmed on their new product, the Mavic Air.  Click here to view the video in high definition.

DJI Billboard in Callao, Spain
Programs used: Adobe Premiere
A quick advertisement I created to promote the DJI Mavic Air during my summer internship. The video on the right is the file I made, the video on the left is it playing live in a square in Callao, Spain.
*/

export {CupofTJ, Play, AdventureAtWork, BiteClub, DJI};