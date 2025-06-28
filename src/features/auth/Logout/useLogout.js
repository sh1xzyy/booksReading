import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import { logoutThunk } from '../../../redux/auth/operations'
import { useTranslation } from 'react-i18next'

export const useLogout = () => {
	const dispatch = useDispatch()
	const { t } = useTranslation()

	const handleLogout = async () => {
		try {
			await dispatch(logoutThunk()).unwrap()
			toast.success(`${t('logoutSuccessToast')}`)
		} catch (error) {
			toast.error(`${t('logoutFailureToast')}`)
		}
	}
	return { handleLogout }
}
