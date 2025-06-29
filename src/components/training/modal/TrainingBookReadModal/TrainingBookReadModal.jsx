import { useTranslation } from 'react-i18next'
import ActionButton from '../../../common/ActionButton/ActionButton'
import s from './TrainingBookReadModal.module.css'

const TrainingBookReadModal = ({ setIsBookReadModalOpen }) => {
	const { t } = useTranslation()
	return (
		<>
			<svg className={s.likeIcon} width={54} height={54}>
				<use href='/icons/icons.svg#icon-like-palm'></use>
			</svg>
			<p className={s.text}>
				{t('trainingBookReadModalText1')}
				<br /> {t('trainingBookReadModalText2')}
			</p>
			<ActionButton
				className='readyButton'
				type='button'
				title={t('trainingBookReadModalButton')}
				onClick={() => {
					setIsBookReadModalOpen(false)
				}}
			/>
		</>
	)
}

export default TrainingBookReadModal
