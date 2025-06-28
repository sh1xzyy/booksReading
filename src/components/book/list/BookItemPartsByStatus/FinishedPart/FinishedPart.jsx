import { Rating } from 'react-simple-star-rating'
import { MdOutlineStar } from 'react-icons/md'
import { useBookReviewModalContext } from '../../../../../contexts/BookReviewModalContext/useBookReviewModalContext'
import ActionButton from '../../../../common/ActionButton/ActionButton'
import s from './FinishedPart.module.css'
import { useTranslation } from 'react-i18next'

const FinishedPart = ({ data: { _id, rating, feedback } }) => {
	const { setModalData, setIsBookReviewModalOpen } = useBookReviewModalContext()
	const { t } = useTranslation()

	return (
		<li className={s.ratingWrapper}>
			<div className={s.infoRow}>
				<span className={s.label}>{t('bookHeaderRatingShort')}:</span>
				<Rating
					initialValue={rating}
					readonly={true}
					emptyIcon={<MdOutlineStar className={s.emptyIcon} />}
					fillIcon={<MdOutlineStar className={s.fillIcon} />}
				/>
			</div>
			<ActionButton
				className='summaryButton'
				type='button'
				title={t('bookReviewButton')}
				onClick={() => {
					setModalData({ _id, rating, feedback })
					setIsBookReviewModalOpen(true)
				}}
			/>
		</li>
	)
}

export default FinishedPart
