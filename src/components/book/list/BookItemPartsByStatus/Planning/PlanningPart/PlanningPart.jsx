import { useDeleteTrainingPlan } from '../../../../../../features/planning/deleteTrainingBook/useDeleteTrainingBook'
import ActionButton from '../../../../../common/ActionButton/ActionButton'
import s from './PlanningPart.module.css'
const PlanningPart = ({ _id }) => {
	const { deleteBookFromPlan } = useDeleteTrainingPlan()

	return (
		<li className={s.infoItem}>
			<ActionButton
				className='deleteButton'
				type='button'
				onClick={() => deleteBookFromPlan(_id)}
			>
				<svg width={14} height={18}>
					<use href='/icons/icons.svg#icon-delete'></use>
				</svg>
			</ActionButton>
		</li>
	)
}

export default PlanningPart
