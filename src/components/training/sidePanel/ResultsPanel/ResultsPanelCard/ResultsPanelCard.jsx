import ResultsPanelForm from '../ResultsPanelForm/ResultsPanelForm'
import ResultsStatisticsList from '../ResultsStatisticsList/ResultsStatisticsList'
import s from './ResultsPanelCard.module.css'

const ResultsPanelCard = () => {
	return (
		<>
			<h3 className={s.resultsTitle}>Результати</h3>
			<ResultsPanelForm />
			<ResultsStatisticsList />
		</>
	)
}

export default ResultsPanelCard
