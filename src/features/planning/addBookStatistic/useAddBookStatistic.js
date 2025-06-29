import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import { planningThunk } from '../../../redux/planning/operations'
import { validationSchema } from './validationSchema'
import { initialValues } from './initialValues'
import { useTranslation } from 'react-i18next'

export const useAddBookStatistic = () => {
	const dispatch = useDispatch()
	const { t } = useTranslation()

	const handleSubmit = async (value, { resetForm }) => {
		try {
			await dispatch(
				planningThunk({ method: 'PATCH', body: { pages: value.pages } })
			).unwrap()
			toast.success(`${t('addBookStatisticSuccessToast')}`)
			resetForm()
		} catch (error) {
			toast.error(error.message)
		} finally {
			resetForm()
		}
	}

	return { initialValues, validationSchema, handleSubmit }
}
