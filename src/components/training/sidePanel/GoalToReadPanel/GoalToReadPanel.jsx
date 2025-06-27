import { useSelector } from 'react-redux'
import { getListClassName } from '../../../../utils/sidePanel/goalToReadPanel/getListClassName'
import { useUserProgressContext } from '../../../../contexts/UserProgressContext/useUserProgressContext'
import { getCounterDescriptionClassName } from '../../../../utils/sidePanel/goalToReadPanel/getCounterDescriptionClassName'
import { getBookWrapperClassName } from '../../../../utils/sidePanel/goalToReadPanel/getBookWrapperClassName'
import { getCounterItemClassName } from '../../../../utils/sidePanel/goalToReadPanel/getCounterItemClassName'
import { getCounterClassName } from '../../../../utils/sidePanel/goalToReadPanel/getCounterClassName'
import { getBooksLeft } from '../../../../utils/sidePanel/goalToReadPanel/getBooksLeft'
import { selectPlannedData } from '../../../../redux/planning/selectors'
import s from './GoalToReadPanel.module.css'

const GoalToReadPanel = () => {
	const { plannedBooks, duration } = useSelector(selectPlannedData)
	const { isTraining, checkedItemList } = useUserProgressContext()

	return (
		<>
			<div className={s.goalHeader}>
				<h3 className={s.title}>Моя мета прочитати</h3>
			</div>
			<div className={getBookWrapperClassName(s, isTraining)}>
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
