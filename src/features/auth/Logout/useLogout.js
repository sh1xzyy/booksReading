import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import { logoutThunk } from '../../../redux/auth/operations'

export const useLogout = () => {
	const dispatch = useDispatch()

	const handleLogout = async () => {
		try {
			await dispatch(logoutThunk()).unwrap()
			toast.success('Ви успішно вийшли з системи!')
		} catch (error) {
			toast.error('Щось пішло не так!')
		}
	}
	return { handleLogout }
}
