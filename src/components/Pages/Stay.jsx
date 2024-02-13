import Slider from '../Slider';
import Content from '../Content';
import Gallery from '../Gallery';
import Button from '../Button';
import './pages.scss';

export default function Stay({title, imageSet}) {
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
					<p className={'centre pad-bottom'}>
						Here's a bit of info about each of our five lovely rooms. 
					</p>
					<Button
						text={'Book Now'}
						link={'http://www.booking.com/hotel/gb/the-forester-and-flower.en-gb.html'}
					/>
				</Content>
				<Gallery />
			</main>
		</>
	);
}
