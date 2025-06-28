import { useTranslation } from 'react-i18next'
import s from './BaseTimer.module.css'

const BaseTimer = ({ timer: { days, hours, minutes, seconds }, title }) => {
	const { t } = useTranslation()
	return (
		<div className={s.timer}>
			<h3 className={s.timerTitle}>{title}</h3>
			<div className={s.timerWrapper}>
				<ul className={s.timeList}>
					<li className={s.timeItem}>
						<div className={s.timeBox}>
							<span className={s.timeValue}>{days || '0'}</span>
							<span className={s.timeLabel}>{t('timerDays')}</span>
						</div>
					</li>
					<li className={s.timeItem}>
						<div className={s.timeBox}>
							<span className={s.timeValue}>{hours || '0'}</span>
							<span className={s.timeLabel}>{t('timerHours')}</span>
						</div>
					</li>
					<li className={s.timeItem}>
						<div className={s.timeBox}>
							<span className={s.timeValue}>{minutes || '0'}</span>
							<span className={s.timeLabel}>{t('timerMinutes')}</span>
						</div>
					</li>
					<li className={s.timeItem}>
						<div className={s.timeBox}>
							<span className={s.timeValue}>{seconds || '0'}</span>
							<span className={s.timeLabel}>{t('timerSeconds')}</span>
						</div>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default BaseTimer
