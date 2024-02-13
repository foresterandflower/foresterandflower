import Slider from '../Slider';
import Content from '../Content';
import './pages.scss';
import Button from '../Button';

export default function Contact({title, imageSet}) {
	return (
		<>
			<Slider
				imageSet={imageSet}
			/>
			<main>
				<Content
					title={title}
					isPrimary={true}
					classes={['line-out']}
				>
					<p className={'centre'}>
						You can contact us by e-mail or telephone:
					</p>
					<p className={'large bold gold centre'}>
						louiseflower1410@hotmail.co.uk
					</p>
					<p className={'large bold gold centre'}>
						01225 837671
					</p>
					<p className={'small centre'}>
						We don't spend much time on social media, so Facebook isn't a great way to get in touch!
					</p>
				</Content>
				<Content
					isPrimary={true}
				>
					<p className={'centre pad-bottom'}>
						Alternatively, book your stay easily on <a href='http://www.booking.com/hotel/gb/the-forester-and-flower.en-gb.html' target='blank'>booking.com</a>
					</p>
					<Button
						text={'Book Now'}
						link={'http://www.booking.com/hotel/gb/the-forester-and-flower.en-gb.html'}
					/>
				</Content>
				<Content
					title={'Location'}
					classes={['decal']}
				>
					<p>
						We are located in Combe Down, less than 2 miles from the centre of Bath.
					</p>
					<p className={'pad-bottom'}>
						We have a small resident's car park situated at the rear of the property
						and there is a <a href="https://bustimes.org/services/2-bath-city-centre-bath-city-centre-via-widcombe-c" target="blank">regular bus service</a> which stops just down the street.
						Bath Spa Railway station is also 5 minutes away by car.
					</p>
					<p className={'centre'}>
						<iframe
							title='Google maps'
							scrolling='no'
							src='https://maps.google.co.uk/maps?hl=en&amp;safe=off&amp;q=forester+and+flower&amp;ie=UTF8&amp;
							hq=forester+and+flower&amp;hnear=Bath,+Bath+and+North+East+Somerset,+UnitedKingdom&amp;
							ll=51.359855,-2.353724&amp;spn=0.015032,0.042272&amp;t=m&amp;z=14&amp;iwloc=A&amp;cid=8297512362491793986&amp;output=embed'
							width='100%'
							height='400px'
							frameborder='0'
						>
						</iframe>
						<a href='https://maps.google.co.uk/maps?hl=en&amp;safe=off&amp;q=forester+and+flower&amp;
						ie=UTF8&amp;hq=forester+and+flower&amp;hnear=Bath,+Bath+and+North+East+Somerset,+United+Kingdom&amp;
						ll=51.359855,-2.353724&amp;spn=0.015032,0.042272&amp;t=m&amp;z=14&amp;iwloc=A&amp;cid=8297512362491793986&amp;source=embed'>
							View in Google Maps
						</a>
					</p>
				</Content>
			</main>
		</>
	);
}
