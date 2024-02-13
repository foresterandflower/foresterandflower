import { NavLink } from 'react-router-dom';
import './nav.scss';

export default function Nav({names}) {
	return (
		<nav>
			{names.map((name, i) =>
				<div
					key={'nav' + i}
					className='item'
				>
					<NavLink to={'/' + name}>
						{name}
					</NavLink>
				</div>
			)}
		</nav>
	);
}
