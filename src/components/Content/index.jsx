import './content.scss';

export default function Content({title, isPrimary, classes = [''], children}) {
	return (
		<div className={'container'}>
			<section className={'content ' + [...classes]}>
				{title &&
					<>
						{isPrimary ?
							<h2>
								{title}
							</h2>
							:
							<h3>
								{title}
							</h3>
						}
					</>
				}
				<div>
					{children}
				</div>
			</section>
		</div>
	);
}
