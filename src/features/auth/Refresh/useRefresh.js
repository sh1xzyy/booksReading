import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { refreshThunk, userDataThunk } from '../../../redux/auth/operations'

export const useRefresh = isLoggedIn => {
	const dispatch = useDispatch()

	useEffect(() => {
		const fetchData = async () => {
			try {
				await dispatch(refreshThunk()).unwrap()
				if (isLoggedIn) await dispatch(userDataThunk()).unwrap()
			} catch (error) {
				console.error(error)
			}
		}
		fetchData()
	}, [dispatch, isLoggedIn])
}
