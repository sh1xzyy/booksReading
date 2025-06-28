import { Link } from 'react-router-dom'
import s from './NavigationButton.module.css'
import clsx from 'clsx'

const NavigationButton = ({ className, to, title }) => {
	return (
		<Link className={clsx(s.commonButton, s[className])} to={to}>
			{title}
		</Link>
	)
}

export default NavigationButton
