import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import { useUserProgressContext } from '../../../contexts/UserProgressContext/useUserProgressContext'
import { planningThunk } from '../../../redux/planning/operations'
import { validationSchema } from './validationSchema'
import { initialValues } from './initialValues'

export const useAddBookStatistic = () => {
	const { handleAddResult } = useUserProgressContext()
	const dispatch = useDispatch()

	const handleSubmit = async (value, { resetForm }) => {
		try {
			await dispatch(
				planningThunk({ method: 'PATCH', body: { pages: value.pages } })
			).unwrap()
			handleAddResult(value)
			toast.success('Ви успішно додали статистику!')
			resetForm()
		} catch (error) {
			toast.error(error.message)
		} finally {
			resetForm()
		}
	}

	return { initialValues, validationSchema, handleSubmit }
}
