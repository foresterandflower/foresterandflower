import { useState, useEffect, useRef } from 'react';
import Arrow from '../svg/Arrow';
import './slider.scss';

export default function Slider({imageSet, delay = 6000}) {
	const [index, setIndex] = useState(0);

	const interval = useRef(null);

	useEffect(() => {
		interval.current = setInterval(() => {
			next();
		}, delay);

		return () => {
			if (interval.current) {
				clearTimeout(interval.current);
			}
		};
	}, [index]);

	useEffect(() => {
		window.addEventListener('keydown', handleKeydown);

		return () => {
			window.removeEventListener('keydown', handleKeydown);
		};
	}, [index]);

	function handleKeydown(e) {
		switch (e.key) {
			case 'ArrowLeft': prev();
				break;
			case 'ArrowRight': next();
				break;
			default: return;
		}
	}

	function prev() {
		setIndex(prevIndex => prevIndex === 0 ? imageSet.length - 1 : prevIndex - 1)
	}

	function next() {
		setIndex(prevIndex => prevIndex === imageSet.length - 1 ? 0 : prevIndex + 1);
	}

	return (
		<div className={'slider'}>
			<button
				className={'prevNext prev'}
				aria-label='previous'
				onClick={() => prev()}
			>
				<Arrow
					title={'previous'}
				/>
			</button>
			<div className={'wrapper'}>
				{imageSet.map((image, i) =>
					<img
						key={'slider' + i}
						className={index === i ? 'is-visible' : ''}
						src={image}
						alt='bar'
						loading='lazy'
						role='button'
						aria-label='click for next image'
						onClick={() => next()}
					/>
				)}
			</div>
			<div className={'dot-container'}>
				{imageSet.map((image, i) =>
					<button
						key={'dot' + i}
						className={'dot' + (index === i ? ' is-full' : '')}
						onClick={() => setIndex(i)}
						aria-label='select photo'
					>
					</button>
				)}
			</div>
			<button
				className={'prevNext next'}
				aria-label='next'
				onClick={() => next()}
			>
				<Arrow
					title={'next'}
				/>
			</button>
		</div>
	);
}
