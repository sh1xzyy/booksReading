import { getWrapperClassByType } from '../../../utils/sidePanel/sidePanelCard/getWrapperClassByType'
import { useUserProgressContext } from '../../../contexts/UserProgressContext/useUserProgressContext'
import ResultsPanelCard from '../ResultsPanel/ResultsPanelCard/ResultsPanelCard'
import GoalToReadPanel from '../GoalToReadPanel/GoalToReadPanel'
import s from './SidePanel.module.css'

const SidePanel = ({ type }) => {
	const { isTraining } = useUserProgressContext()

	return (
		<div className={getWrapperClassByType(s, type, isTraining)}>
			{type === 'goalToRead' ? <GoalToReadPanel /> : <ResultsPanelCard />}
		</div>
	)
}

export default SidePanel
