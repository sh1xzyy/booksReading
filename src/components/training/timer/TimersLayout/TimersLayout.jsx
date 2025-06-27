import { useDeadlineToSelectedData } from '../../../../hooks/useDeadlineToSelectedData/useDeadlineToSelectedData'
import { useDeadlineToNewYear } from '../../../../hooks/useDeadlineToNewYear/useDeadlineToNewYear'
import BaseTimer from '../BaseTimer/BaseTimer'
import s from './TimersLayout.module.css'

const TimersLayout = () => {
	const { timeLeftToNewYear } = useDeadlineToNewYear()
	const { timeLeftToData } = useDeadlineToSelectedData()

	return (
		<div className={s.timersGroup}>
			<BaseTimer
				timer={timeLeftToNewYear}
				title='До закінчення року залишилось'
			/>
			<BaseTimer timer={timeLeftToData} title='До досягнення мети залишилось' />
		</div>
	)
}

export default TimersLayout
