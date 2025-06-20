import s from './SidePanel.module.css'
import ResultsPanelCard from '../ResultsPanel/ResultsPanelCard/ResultsPanelCard'
import GoalToReadPanel from '../GoalToReadPanel/GoalToReadPanel'
import { getWrapperClassByType } from '../../../utils/sidePanel/sidePanelCard/getWrapperClassByType'

const SidePanel = ({ type }) => {
	const isTraining = false

	return (
		<div className={getWrapperClassByType(s, type, isTraining)}>
			{type === 'goalToRead' ? <GoalToReadPanel /> : <ResultsPanelCard />}
		</div>
	)
}

export default SidePanel
