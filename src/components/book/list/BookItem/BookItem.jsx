import { MdMenuBook } from 'react-icons/md'
import PlanningCheckbox from '../BookItemPartsByStatus/Planning/PlanningCheckbox/PlanningCheckbox'
import { useUserProgressContext } from '../../../../contexts/UserProgressContext/useUserProgressContext'
import PlanningPart from '../BookItemPartsByStatus/Planning/PlanningPart/PlanningPart'
import { getDetailsWrapperClass } from '../../../../utils/book/getDetailsWrapperClass'
import { getItemClassByStatus } from '../../../../utils/book/getItemClassByStatus'
import { croppedTitleByWidth } from '../../../../utils/book/croppedTitleByWidth'
import FinishedPart from '../BookItemPartsByStatus/FinishedPart/FinishedPart'
import { getBookIconClass } from '../../../../utils/book/getBookIconClass'
import { getInfoListClass } from '../../../../utils/book/getInfoListClass'
import DefaultPart from '../BookItemPartsByStatus/DefaultPart/DefaultPart'
import EmptyPart from '../BookItemPartsByStatus/EmptyPart/EmptyPart'
import s from './BookItem.module.css'

const BookItem = ({ book, status, windowWidth }) => {
	const {
		_id = '',
		title = '',
		author = '',
		publishYear = '',
		pagesTotal = '',
		rating = 0,
		feedback = '',
	} = book || {}

	const { isTraining } = useUserProgressContext()

	return (
		<li className={getItemClassByStatus(s, status)}>
			{status === 'planning' && isTraining ? (
				<PlanningCheckbox _id={_id} />
			) : (
				<MdMenuBook className={getBookIconClass(s, status)} />
			)}
			{status === 'empty' ? (
				<EmptyPart />
			) : (
				<div className={getDetailsWrapperClass(s, status)}>
					<span className={s.defaultTitle} title={title}>
						{croppedTitleByWidth(title, windowWidth, status)}
					</span>
					<ul className={getInfoListClass(s, status)}>
						<DefaultPart
							data={{ author, publishYear, pagesTotal }}
							status={status}
							windowWidth={windowWidth}
						/>

						{status === 'planning' && !isTraining && (
							<PlanningPart data={{ _id, rating, feedback }} />
						)}

						{status === 'finished' && (
							<FinishedPart data={{ _id, rating, feedback }} />
						)}
					</ul>
				</div>
			)}
		</li>
	)
}

export default BookItem
