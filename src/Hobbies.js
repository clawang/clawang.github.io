import React from 'react';
import {StandardSection, HeaderSection, Footer, TileGallery, PhotoDivider, PhotoTitleSection} from './Layouts';
import tulum from './media/westvillage.jpg';

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

class Work extends React.Component {
	render() {
		return (
			<div className="page">
				<PhotoTitleSection img={tulum}>
					<h1>Hobbies</h1>
				</PhotoTitleSection>
				<StandardSection color="white" text={true}>
					<div className="section">
						<h3>Travel Blog – Adventure at Work</h3>
						<div className="columns">
							<p>In my junior year of high school, I decided to start a <a href="http://adventureatwork.co" target="_blank">travel blog</a> to document my journeys. Although it started out as a simple way to record my memories for later, upon introduction to the travel blog community, I realized that there were people for whom their travel blog was their full-time job!</p>
							<p>As a student, I could never commit the same amount of time into my blog as the professionals did, but through the travel community I did learn enough to turn my humble blog into a side gig which at its peak reached 80,000 monthly page views! I learned so much about photography, digital marketing, graphic design, and more through this community, and also received some insane opportunities, like the chance to attend the New York Times Travel Show and to see <a href="https://www.amazon.com/wanderlust-Worlds-Unforgettable-Travel-Destinations/dp/006298103X" target="_blank">my photography published in a book</a>. And the best part is, I got to meet some of the most incredible people from around the world.</p>
						</div>
						<p><a href="http://adventureatwork.co/" target="_blank" className="button">Read the Blog</a></p>
						<TileGallery images={travelPics} />
					</div>
				</StandardSection>
				<PhotoDivider img="/bluestripes.jpg" />
				<StandardSection text={true}>
					<div className="section">
						<h3>Food Photography</h3>
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
				</div>
				<Footer />
			</div>
		);
	}
}

export default Work;