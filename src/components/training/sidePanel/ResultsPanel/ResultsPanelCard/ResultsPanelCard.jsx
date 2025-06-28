import { useTranslation } from 'react-i18next'
import ResultsPanelForm from '../ResultsPanelForm/ResultsPanelForm'
import ResultsStatisticsList from '../ResultsStatisticsList/ResultsStatisticsList'
import s from './ResultsPanelCard.module.css'

const ResultsPanelCard = () => {
	const { t } = useTranslation()
	return (
		<>
			<h3 className={s.resultsTitle}>{t('resultsPanelTitle')}</h3>
			<ResultsPanelForm />
			<ResultsStatisticsList />
		</>
	)
}

export default ResultsPanelCard
