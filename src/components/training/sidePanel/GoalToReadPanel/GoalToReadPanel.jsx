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
import { useTranslation } from 'react-i18next'

const GoalToReadPanel = () => {
	const { plannedBooks, duration } = useSelector(selectPlannedData)
	const { isTraining, checkedItemList } = useUserProgressContext()
	const { t } = useTranslation()

	return (
		<>
			<div className={s.goalHeader}>
				<h3 className={s.title}>{t('goalToReadMyGoals')}</h3>
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
							{t('goalToReadAmountBooks')}
						</span>
					</li>
					<li>
						<div className={getCounterItemClassName(s, isTraining)}>
							<span className={getCounterClassName(s, isTraining)}>
								{duration || '0'}
							</span>
						</div>
						<span className={getCounterDescriptionClassName(s, isTraining)}>
							{t('goalToReadAmountDays')}
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
								{t('goalToReadBooksLeft')}
							</span>
						</li>
					)}
				</ul>
			</div>
		</>
	)
}

export default GoalToReadPanel
