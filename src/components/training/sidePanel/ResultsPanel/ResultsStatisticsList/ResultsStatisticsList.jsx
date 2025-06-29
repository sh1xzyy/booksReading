import { useTranslation } from 'react-i18next'
import { datePrettier } from '../../../../../utils/sidePanel/resultsPanel/datePrettier'
import { selectPlannedData } from '../../../../../redux/planning/selectors'
import s from './ResultsStatisticsList.module.css'
import { useSelector } from 'react-redux'

const ResultsStatisticsList = () => {
	const { stats } = useSelector(selectPlannedData)
	const { t } = useTranslation()
	return (
		<div className={s.statisticsWrapper}>
			<h3 className={s.statisticsTitle}>{t('resultsStatisticTitle')}</h3>
			<ul className={s.statisticsList}>
				{stats.map(({ time, pagesCount }, index) => (
					<li key={index}>
						<ul className={s.statisticItemDetails}>
							<li className={s.item}>
								<span className={s.statDate}>
									{datePrettier(time.split(' ')[0])}
								</span>
							</li>
							<li className={s.item}>
								<span className={s.statTime}>{time.split(' ')[1]}</span>
							</li>
							<li className={s.item}>
								<span className={s.statPages}>{pagesCount}</span>
								&nbsp;
								<span className={s.statPagesLabel}>
									{t('resultsPagesTitle')}
								</span>
							</li>
						</ul>
					</li>
				))}
			</ul>
		</div>
	)
}

export default ResultsStatisticsList
