import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import { registerThunk } from '../../../redux/auth/operations'
import { validationSchema } from './validationSchema'
import { initialValues } from './initialValues'
import { useTranslation } from 'react-i18next'

export const useRegisterForm = () => {
	const dispatch = useDispatch()
	const { t } = useTranslation()

	const handleSubmit = async ({ name, email, password }, actions) => {
		try {
			await dispatch(registerThunk({ name, email, password })).unwrap()
			toast.success(`${t('registerSuccessToast')}`)
		} catch (error) {
			toast.error(error)
		} finally {
			actions.resetForm()
		}
	}
	return { initialValues, validationSchema, handleSubmit }
}
