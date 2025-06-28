import { useBookReviewModalContext } from '../../../../contexts/BookReviewModalContext/useBookReviewModalContext'
import AddBookReviewForm from '../../form/AddBookReviewForm/AddBookReviewForm'
import BaseModal from '../../../modal/BaseModal/BaseModal'
import s from './BookReviewModal.module.css'
import { useTranslation } from 'react-i18next'

const BookReviewModal = () => {
	const { setIsBookReviewModalOpen } = useBookReviewModalContext()
	const { t } = useTranslation()

	return (
		<BaseModal
			className='bookReviewModal'
			setIsModalOpen={setIsBookReviewModalOpen}
		>
			<h3 className={s.chooseRating}>{t('bookReviewFormTitle')}</h3>
			<AddBookReviewForm />
		</BaseModal>
	)
}

export default BookReviewModal
