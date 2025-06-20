import { useSelector } from 'react-redux'
import s from './GoalToReadPanel.module.css'
import { getListClassName } from '../../../utils/sidePanel/goalToReadPanel/getListClassName'
import { getCounterItemClassName } from '../../../utils/sidePanel/goalToReadPanel/getCounterItemClassName'
import { getCounterClassName } from '../../../utils/sidePanel/goalToReadPanel/getCounterClassName'
import { getCounterDescriptionClassName } from '../../../utils/sidePanel/goalToReadPanel/getCounterDescriptionClassName'
import { useUserProgressContext } from '../../../contexts/UserProgressContext/useUserProgressContext'
import { selectPlannedData } from '../../../redux/planning/selectors'

const GoalToReadPanel = () => {
	const { plannedBooks, duration } = useSelector(selectPlannedData)
	const { isTraining, checkedItemList } = useUserProgressContext()

	const getBooksLeft = () =>
		plannedBooks?.length - (checkedItemList?.length || 0)

	return (
		<>
			<div className={s.goalHeader}>
				<h3 className={s.title}>Моя мета прочитати</h3>
			</div>
			<div className={s.countWrapper}>
				<ul className={getListClassName(s, isTraining)}>
					<li>
						<div className={getCounterItemClassName(s, isTraining)}>
							<span className={getCounterClassName(s, isTraining)}>
								{plannedBooks.length || '0'}
							</span>
						</div>
						<span className={getCounterDescriptionClassName(s, isTraining)}>
							Кількість книжок
						</span>
					</li>
					<li>
						<div className={getCounterItemClassName(s, isTraining)}>
							<span className={getCounterClassName(s, isTraining)}>
								{duration || '0'}
							</span>
						</div>
						<span className={getCounterDescriptionClassName(s, isTraining)}>
							Кількість днів
						</span>
					</li>
					{isTraining && (
						<li>
							<div className={getCounterItemClassName(s, isTraining)}>
								<span className={getCounterClassName(s, isTraining)}>
									{getBooksLeft(plannedBooks, checkedItemList)}
								</span>
							</div>
							<span className={getCounterDescriptionClassName(s, isTraining)}>
								Залишилось книжок
							</span>
						</li>
					)}
				</ul>
			</div>
		</>
	)
}

export default GoalToReadPanel
