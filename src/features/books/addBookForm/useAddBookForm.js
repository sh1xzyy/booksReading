import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import { useBookFormModalContext } from '../../../contexts/BookFormModalContext/useBookFormModalContext'
import { addBookThunk } from '../../../redux/book/operations'
import { validationSchema } from './validationSchema'
import { initialValues } from './initialValues'

export const useAddBookForm = () => {
	const { setIsBookFormOpen } = useBookFormModalContext()
	const dispatch = useDispatch()

	const handleSubmit = async (values, { resetForm }) => {
		try {
			await dispatch(addBookThunk(values)).unwrap()
			toast.success('Ви успішно додали книгу!')
			setIsBookFormOpen(false)
		} catch (error) {
			toast.error(error.message)
		} finally {
			resetForm()
		}
	}

	return { initialValues, validationSchema, handleSubmit }
}
