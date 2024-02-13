import './mode-switch.scss';

export default function ModeSwitch({onSaveMode}) {
	return (
		<button
			className={'switch'}
			onClick={onSaveMode}
			aria-label='switch light dark mode'
		>
		</button>
	);
}
