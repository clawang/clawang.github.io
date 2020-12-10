import React from 'react';
import {StandardSection, HeaderSection, Footer, TileGallery, PhotoTitleSection} from './Layouts';
import tulum from './media/westvillage.jpg';
import book from './media/book.jpg';
import nyt from './media/nyt.JPG';
import nomadicmatt from './media/nomadicmatt.jpg';

const travelPics = [
	{src: nyt,
	caption: 'Met some travel bloggers that I really admire at the New York Times Travel Show.'},
	{src: book,
	caption: <span>My picture of London street food in #wanderlust by <a href="https://www.instagram.com/girlvsglobe" target="_blank">@girlvsglobe</a>.</span>},
	{src: nomadicmatt,
	caption: <span>Got to meet <a href="https://www.nomadicmatt.com/" target="_blank">Nomadic Matt</a> and his team at his book launch in NYC.</span>}
]

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
							<p>As a student, I could never commit the same amount of time into my blog, but through the travel community I did learn enough to turn my humble blog into a side gig. I learned so much about photography, digital marketing, graphic design, and more through this community, and also received some insane opportunities, like the chance to attend the New York Times Travel Show and to see <a href="https://www.amazon.com/wanderlust-Worlds-Unforgettable-Travel-Destinations/dp/006298103X" target="_blank">my photography published in a book</a>. And I also met some of the most incredible people from around the world.</p>
						</div>
						<p><a href="http://adventureatwork.co/" target="_blank" className="button">Read the Blog</a></p>
						<TileGallery images={travelPics} />
					</div>
				</StandardSection>
				<Footer />
			</div>
		);
	}
}

export default Work;