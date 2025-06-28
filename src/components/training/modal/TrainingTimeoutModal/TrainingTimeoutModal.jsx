import { useTranslation } from 'react-i18next'
import { useUserProgressContext } from '../../../../contexts/UserProgressContext/useUserProgressContext'
import ActionButton from '../../../common/ActionButton/ActionButton'
import s from './TrainingTimeoutModal.module.css'

const TrainingTimeoutModal = ({ setIsTrainingTimeout }) => {
	const { handleClearProgress } = useUserProgressContext()
	const { t } = useTranslation()
	return (
		<>
			<svg className={s.likeIcon} width={54} height={54}>
				<use href='/icons/icons.svg#icon-like-palm'></use>
			</svg>
			<p className={s.text}>
				{t('trainingTimeoutModalText1')}
				<br /> {t('trainingTimeoutModalText2')}
				<br /> {t('trainingTimeoutModalText3')}
			</p>
			<div className={s.buttonsWrapper}>
				<ActionButton
					className='confirmButton'
					type='button'
					title={t('trainingTimeoutNewTrainButton')}
					onClick={() => {
						handleClearProgress()
						setIsTrainingTimeout(false)
					}}
				/>
				<ActionButton
					className='cancelButton'
					type='button'
					title={t('backButton')}
					onClick={() => setIsTrainingTimeout(false)}
				/>
			</div>
		</>
	)
}

export default TrainingTimeoutModal
