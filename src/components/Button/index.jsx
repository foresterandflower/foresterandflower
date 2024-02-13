import './button.scss';

export default function Button({link = null, action = null, text, classes = ['']}) {
	return (
		<>
			{link ?
				<a
					className={'button ' + [...classes]}
					href={link}
				>
					{text}
				</a>
			:
				<button
					className={'button ' + [...classes]}
					onClick={action ? action : null}
				>
					{text}
				</button>
			}
		</>
	);
}
