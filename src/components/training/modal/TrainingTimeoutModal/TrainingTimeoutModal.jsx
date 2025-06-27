import { useUserProgressContext } from '../../../../contexts/UserProgressContext/useUserProgressContext'
import ActionButton from '../../../common/ActionButton/ActionButton'
import s from './TrainingTimeoutModal.module.css'

const TrainingTimeoutModal = ({ setIsTrainingTimeout }) => {
	const { handleClearProgress } = useUserProgressContext()
	return (
		<>
			<svg className={s.likeIcon} width={54} height={54}>
				<use href='/icons/icons.svg#icon-like-palm'></use>
			</svg>
			<p className={s.text}>
				Ти молодчина,
				<br /> але потрібно швидше!
				<br /> Наступного разу тобі все вдасться)
			</p>
			<div className={s.buttonsWrapper}>
				<ActionButton
					className='confirmButton'
					type='button'
					title='Новє тренування'
					onClick={() => {
						handleClearProgress()
						setIsTrainingTimeout(false)
					}}
				/>
				<ActionButton
					className='cancelButton'
					type='button'
					title='Назад'
					onClick={() => setIsTrainingTimeout(false)}
				/>
			</div>
		</>
	)
}

export default TrainingTimeoutModal
