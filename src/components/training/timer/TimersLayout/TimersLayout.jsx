import { useDeadlineToSelectedData } from '../../../../hooks/useDeadlineToSelectedData/useDeadlineToSelectedData'
import { useDeadlineToNewYear } from '../../../../hooks/useDeadlineToNewYear/useDeadlineToNewYear'
import BaseTimer from '../BaseTimer/BaseTimer'
import s from './TimersLayout.module.css'
import { useTranslation } from 'react-i18next'

const TimersLayout = () => {
	const { timeLeftToData } = useDeadlineToSelectedData()
	const { timeLeftToNewYear } = useDeadlineToNewYear()
	const { t } = useTranslation()

	return (
		<div className={s.timersGroup}>
			<BaseTimer
				timer={timeLeftToNewYear}
				title={t('timerLeftToNewYearTitle')}
			/>
			<BaseTimer timer={timeLeftToData} title={t('timerLeftToData')} />
		</div>
	)
}

export default TimersLayout
