import GalleryRow from '../GalleryRow';
import './gallery.scss';

const room = {
	large: 'Large Double Room',
	small: 'Double Room'
};
const bed = {
	double: 'Double Bed',
	king: 'King-Size ',
	poster: '4 Poster Bed'
};
const bathroom = {
	external: 'Private External ',
	ensuite: 'En-Suite',
	bathroom: 'Bathroom',
	shower: 'Shower Room',
	bath: 'with Roll Top Bath'
};
const tv = 'Flat Screen TV & Free Wi-fi';
const tray = 'Complimentary Hospitality Tray';

export default function Gallery() {
	return (
		<section className={'gallery'}>
			<GalleryRow
				title={'Lily'}
				text={''}
				points={[[room.large], [bed.double], [bathroom.external, bathroom.bathroom], tv, tray]}
				photos={['./img/rooms/lily.jpg', './img/rooms/lilybathroom.jpg']}
			/>
			<GalleryRow
				title={'Pansy'}
				text={''}
				points={[[room.small], [bed.poster], [bathroom.ensuite, bathroom.shower], tv, tray]}
				photos={['./img/rooms/pansy.jpg', './img/rooms/pansybathroom.jpg']}
			/>
			<GalleryRow
				title={'Rose'}
				text={''}
				points={[[room.large], [bed.king, bed.poster], [bathroom.ensuite, bathroom.shower], tv, tray]}
				photos={['./img/rooms/rose.jpg', './img/rooms/rosebathroom.jpg']}
			/>
			<GalleryRow
				title={'Iris'}
				text={''}
				points={[[room.large], [bed.poster], [bathroom.ensuite, bathroom.bathroom, bathroom.bath], tv, tray]}
				photos={['./img/rooms/iris.jpg', './img/rooms/irisbathroom.jpg']}
			/>
			<GalleryRow
				title={'Daisy'}
				text={''}
				points={[[room.small], [bed.double], [bathroom.external, bathroom.shower], tv, tray]}
				photos={['./img/rooms/daisy.jpg', './img/rooms/daisybathroom.jpg']}
			/>
		</section>
	);
}
