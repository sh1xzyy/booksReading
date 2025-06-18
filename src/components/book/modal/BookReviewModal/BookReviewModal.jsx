import { useBookReviewModalContext } from '../../../../contexts/BookReviewModalContext/useBookReviewModalContext'
import AddBookReviewForm from '../../form/AddBookReviewForm/AddBookReviewForm'
import BaseModal from '../../../modal/BaseModal/BaseModal'
import s from './BookReviewModal.module.css'

const BookReviewModal = () => {
	const { setIsBookReviewModalOpen } = useBookReviewModalContext()

	return (
		<BaseModal
			className='bookReviewModal'
			isModalOpen={setIsBookReviewModalOpen}
		>
			<h3 className={s.chooseRating}>Обрати рейтинг книги</h3>
			<AddBookReviewForm />
		</BaseModal>
	)
}

export default BookReviewModal
