import { useUserProgressContext } from '../../../../contexts/UserProgressContext/useUserProgressContext'
import { datePrettier } from '../../../../utils/sidePanel/resultsPanel/datePrettier'
import s from './ResultsStatisticsList.module.css'

const ResultsStatisticsList = () => {
	const { statistics } = useUserProgressContext()
	return (
		<div className={s.statisticsWrapper}>
			<h3 className={s.statisticsTitle}>Статистика</h3>
			<ul className={s.statisticsList}>
				{statistics.map(({ date, time, pages }, index) => (
					<li key={index}>
						<ul className={s.statisticItemDetails}>
							<li className={s.item}>
								<span className={s.statDate}>{datePrettier(date)}</span>
							</li>
							<li className={s.item}>
								<span className={s.statTime}>{time}</span>
							</li>
							<li className={s.item}>
								<span className={s.statPages}>{pages}</span>
								&nbsp;
								<span className={s.statPagesLabel}>стор.</span>
							</li>
						</ul>
					</li>
				))}
			</ul>
		</div>
	)
}

export default ResultsStatisticsList
