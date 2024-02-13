import Slider from '../Slider';
import Content from '../Content';
import Button from '../Button';
import './pages.scss';

export default function Welcome({title, imageSet}) {
	return (
		<>
			<Slider
				imageSet={imageSet}
			/>
			<main>
				<Content
					title={title}
					isPrimary={true}
					classes={['decal']}
				>
					<p>
						We are an internationally known and locally loved pub and B&amp;B situated in the historic city of Bath.
					</p>
					<p>
						The building, located in the picturesque village of Combe Down, dates back to 1870 where it started life as a renowned Brew House and Coaching Inn.
					</p>
					<p>
						Today we offer a bar full of excellent local brews and other fine drinks, and have five beautiful rooms to stay in. There are a number of local options for breakfast, including the Hub, a lovely cafe just across the road, and the Darling Deli, just 5 minutes walk into the village.
					</p>
				</Content>
				<Content
					title={'Opening Times'}
					classes={['line-out']}
				>
					<p className={'bold large centre highlight'}>
						Tuesday&mdash;Saturday:
					</p>
					<p className={'bold large centre highlight'}>
						<span>5:00pm&mdash;11:00pm</span> for drinks
					</p>
					<p className={'centre highlight'}>
						The kitchen has been closed indefinitely.
					</p>
				</Content>
				<Content
					title={'Fancy a Stay?'}
				>
					<Button
						text={'Book Now'}
						link={'http://www.booking.com/hotel/gb/the-forester-and-flower.en-gb.html'}
					/>
				</Content>
			</main>
		</>
	);
}
