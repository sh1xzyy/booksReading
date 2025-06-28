import { Rating } from 'react-simple-star-rating'
import { MdOutlineStar } from 'react-icons/md'
import { Form, Formik } from 'formik'
import { useState } from 'react'
import { useBookReviewModalContext } from '../../../../contexts/BookReviewModalContext/useBookReviewModalContext'
import { useAddBookReviewForm } from '../../../../features/books/addBookReviewForm/useAddBookReviewForm'
import ActionButton from '../../../common/ActionButton/ActionButton'
import FormField from '../../../common/form/FormField/FormField'
import s from './AddBookReviewForm.module.css'
import { useTranslation } from 'react-i18next'

const AddBookReviewForm = () => {
	const {
		modalData: { _id, rating, feedback },
		setIsBookReviewModalOpen,
	} = useBookReviewModalContext()
	const [bookRating, setBookRating] = useState(rating || 0)
	const { handleSubmit } = useAddBookReviewForm(_id)
	const { t } = useTranslation()

	return (
		<Formik
			onSubmit={({ feedback }) =>
				handleSubmit({ rating: bookRating, feedback })
			}
			initialValues={{ feedback: feedback || '' }}
		>
			<Form>
				<Rating
					className={s.stars}
					onClick={rate => setBookRating(rate)}
					initialValue={bookRating}
					emptyIcon={<MdOutlineStar className={s.emptyIcon} />}
					fillIcon={<MdOutlineStar className={s.fillIcon} />}
				/>
				<div className={s.textareaWrapper}>
					<FormField
						classField='bookReviewTextarea'
						classLabel='bookReviewLabel'
						labelTitle={t('bookReviewFormTextareaLabel')}
						as='textarea'
						name='feedback'
						placeholder='...'
					/>
				</div>
				<div className={s.buttonsWrapper}>
					<ActionButton
						className='reviewGoBackButton'
						type='button'
						title={t('backButton')}
						onClick={() => setIsBookReviewModalOpen(false)}
					/>
					<ActionButton
						className='reviewSaveButton'
						type='submit'
						title={t('bookReviewFormSaveButton')}
					/>
				</div>
			</Form>
		</Formik>
	)
}

export default AddBookReviewForm
