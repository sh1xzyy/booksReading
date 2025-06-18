import { Rating } from 'react-simple-star-rating'
import { MdOutlineStar } from 'react-icons/md'
import { useBookReviewModalContext } from '../../../../../contexts/BookReviewModalContext/useBookReviewModalContext'
import ActionButton from '../../../../common/ActionButton/ActionButton'
import s from './FinishedPart.module.css'

const FinishedPart = ({ data: { _id, rating, feedback } }) => {
	const { setModalData, setIsBookReviewModalOpen } = useBookReviewModalContext()
	return (
		<li>
			<div className={s.ratingWrapper}>
				<div className={s.infoRow}>
					<span className={s.label}>Рейтинг:</span>
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
					title='Резюме'
					onClick={() => {
						setModalData({ _id, rating, feedback })
						setIsBookReviewModalOpen(true)
					}}
				/>
			</div>
		</li>
	)
}

export default FinishedPart
