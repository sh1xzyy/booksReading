import { nanoid } from '@reduxjs/toolkit'
import clsx from 'clsx'
import s from './PlanningCheckbox.module.css'
import { useUserProgressContext } from '../../../../../../contexts/UserProgressContext/useUserProgressContext'
const PlanningCheckbox = ({ _id }) => {
	const id = nanoid()
	const { checkedItemList, handleCheckboxToggle } = useUserProgressContext()

	return (
		<div className={s.fieldWrapper}>
			<label className={s.checkboxLabel} htmlFor={id}>
				<input
					className={clsx('visually-hidden', s.checkbox)}
					type='checkbox'
					name='checkbox'
					checked={checkedItemList?.includes(_id)}
					id={id}
					onChange={e => handleCheckboxToggle(e.target.checked, _id)}
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
