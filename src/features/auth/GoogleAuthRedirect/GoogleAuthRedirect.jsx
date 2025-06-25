import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import { useEffect } from 'react'
import { userDataThunk } from '../../../redux/auth/operations'
import Loader from '../../../components/common/Loader/Loader'

const GoogleAuthRedirect = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	useEffect(() => {
		const query = new URLSearchParams(window.location.search)
		const accessToken = query.get('accessToken')
		const refreshToken = query.get('refreshToken')
		const sid = query.get('sid')

		if (accessToken && refreshToken && sid) {
			dispatch({
				type: 'auth/login/fulfilled',
				payload: {
					userData: { name: 'Google User', email: '' },
					accessToken,
					refreshToken,
					sid,
				},
			})

			dispatch(userDataThunk()).then(() => {
				navigate('/library')
			})
		} else {
			toast.error(
				'Користувача не знайдено. Будь ласка, зареєструйтесь спочатку.'
			)
			navigate('/login')
		}
	}, [dispatch, navigate])

	return <Loader />
}

export default GoogleAuthRedirect
