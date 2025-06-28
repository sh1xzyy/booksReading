import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import { loginThunk } from '../../../redux/auth/operations'
import { validationSchema } from './validationSchema'
import { initialValues } from './initialValues'
import { useTranslation } from 'react-i18next'

export const useLoginForm = () => {
	const dispatch = useDispatch()
	const { t } = useTranslation()

	const handleSubmit = async (value, { resetForm }) => {
		try {
			await dispatch(loginThunk(value)).unwrap()
			toast.success(`${t('loginSuccessToast')}`)
		} catch (error) {
			toast.error(error)
		} finally {
			resetForm()
		}
	}

	return { initialValues, validationSchema, handleSubmit }
}
