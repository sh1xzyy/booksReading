import { nanoid } from '@reduxjs/toolkit'
import clsx from 'clsx'
import { useUserTrainingProgressContext } from '../../../../../../contexts/UserTrainingProgressContext/useUserTrainingProgressContext'
import { useUserProgressContext } from '../../../../../../contexts/UserProgressContext/useUserProgressContext'
import s from './PlanningCheckbox.module.css'
const PlanningCheckbox = ({ _id }) => {
	const { checkedItemList, handleCheckboxToggle } = useUserProgressContext()
	const { setIsBookReadModalOpen } = useUserTrainingProgressContext()
	const checkboxId = nanoid()

	return (
		<div className={s.fieldWrapper}>
			<label className={s.checkboxLabel} htmlFor={checkboxId}>
				<input
					className={clsx('visually-hidden', s.checkbox)}
					type='checkbox'
					name='checkbox'
					checked={checkedItemList?.includes(_id)}
					id={checkboxId}
					onChange={e => {
						handleCheckboxToggle(e.target.checked, _id)
						setIsBookReadModalOpen(e.target.checked)
					}}
				/>
				<span className={s.customCheckbox}></span>
				<svg className={s.checkMark} width={12} height={12}>
					<use href='/icons/icons.svg#icon-check-mark'></use>
				</svg>
			</label>
		</div>
	)
}

export default PlanningCheckbox
