import '../Gallery/gallery.scss';

export default function GalleryRow({title, text, points, photos}) {
	return (
		<section className={'gallery'}>
			<div className={'wrapper'}>
				<div className={'row'}>
					<div class={'room'}>
						<h3>
							{title}
						</h3>
						{text &&
							<p className={'text'}>
								{text}
							</p>
						}
						<p className={'pad-bottom'}>
							<ul>
								{points.map(point =>
									<li>
										{point}
									</li>
								)}
							</ul>
						</p>
					</div>
					<div className={'photos'}>
						{photos.map(photo =>
							<img src={photo} alt={title + ' photo'} loading='lazy' />
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
