import { useUserProgressContext } from '../../../../contexts/UserProgressContext/useUserProgressContext'
import { getWrapperClassByType } from '../../../../utils/sidePanel/sidePanelCard/getWrapperClassByType'
import ResultsPanelCard from '../ResultsPanel/ResultsPanelCard/ResultsPanelCard'
import GoalToReadPanel from '../GoalToReadPanel/GoalToReadPanel'
import s from './SidePanelCard.module.css'

const SidePanelCard = ({ type }) => {
	const { isTraining } = useUserProgressContext()

	return (
		<div className={getWrapperClassByType(s, type, isTraining)}>
			{type === 'goalToRead' ? <GoalToReadPanel /> : <ResultsPanelCard />}
		</div>
	)
}

export default SidePanelCard
