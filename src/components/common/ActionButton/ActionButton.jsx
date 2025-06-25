import s from './ActionButton.module.css'

const ActionButton = ({
	className,
	type,
	title,
	children,
	onClick,
	disabled = false,
}) => {
	return (
		<button
			className={s[className]}
			type={type}
			onClick={onClick}
			disabled={false}
		>
			{title}
			{children}
		</button>
	)
}

export default ActionButton
