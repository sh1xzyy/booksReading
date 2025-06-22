import useDeadlineToNewYear from '../hooks/useDeadlineToNewYear/useDeadlineToNewYear'
import { useDeadlineToData } from '../hooks/useDeadlineToData/useDeadlineToData'
import s from './TimerBlock.module.css'
import Timer from '../Timer/Timer'

const TimerBlock = () => {
	const { timeLeftToNewYear } = useDeadlineToNewYear()
	const { timeLeftToData } = useDeadlineToData()

	return (
		<div className={s.timersGroup}>
			<Timer timer={timeLeftToNewYear} title='До закінчення року залишилось' />
			<Timer timer={timeLeftToData} title='До досягнення мети залишилось' />
		</div>
	)
}

export default TimerBlock
