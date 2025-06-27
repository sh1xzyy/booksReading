import ActionButton from '../../../common/ActionButton/ActionButton'
import s from './TrainingBookReadModal.module.css'

const TrainingBookReadModal = ({ setIsBookReadModalOpen }) => {
	return (
		<>
			<svg className={s.likeIcon} width={54} height={54}>
				<use href='/icons/icons.svg#icon-like-palm'></use>
			</svg>
			<p className={s.text}>
				Вітаю!
				<br /> Ще одна книга прочитана.
			</p>
			<ActionButton
				className='readyButton'
				type='button'
				title='Готово'
				onClick={() => {
					setIsBookReadModalOpen(false)
				}}
			/>
		</>
	)
}

export default TrainingBookReadModal
