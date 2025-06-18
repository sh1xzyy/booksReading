import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import { useBookReviewModalContext } from '../../../contexts/BookReviewModalContext/useBookReviewModalContext'
import { addBookReviewThunk } from '../../../redux/book/operations'

export const useAddBookReviewForm = _id => {
	const dispatch = useDispatch()
	const { setIsBookReviewModalOpen } = useBookReviewModalContext()

	const handleSubmit = async ({ rating, feedback }) => {
		try {
			await dispatch(
				addBookReviewThunk({
					_id,
					rating,
					feedback,
				})
			).unwrap()
			setIsBookReviewModalOpen(false)
		} catch (error) {
			toast.error(error)
		}
	}
	return { handleSubmit }
}
