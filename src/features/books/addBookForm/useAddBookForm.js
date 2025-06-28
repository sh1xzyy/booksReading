import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import { useBookFormModalContext } from '../../../contexts/BookFormModalContext/useBookFormModalContext'
import { addBookThunk } from '../../../redux/book/operations'
import { validationSchema } from './validationSchema'
import { initialValues } from './initialValues'
import { useTranslation } from 'react-i18next'

export const useAddBookForm = () => {
	const { setIsBookFormOpen } = useBookFormModalContext()
	const dispatch = useDispatch()
	const { t } = useTranslation()

	const handleSubmit = async (values, { resetForm }) => {
		try {
			await dispatch(addBookThunk(values)).unwrap()
			toast.success(`${t('addBookFormSuccessToast')}`)
			setIsBookFormOpen(false)
		} catch (error) {
			toast.error(error.message)
		} finally {
			resetForm()
		}
	}

	return { initialValues, validationSchema, handleSubmit }
}
