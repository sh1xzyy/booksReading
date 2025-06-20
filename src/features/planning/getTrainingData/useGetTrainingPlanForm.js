import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { planningThunk } from '../../../redux/planning/operations'

export const useGetTrainingPlanForm = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		const fetchData = async () => {
			try {
				await dispatch(planningThunk({ method: 'GET' })).unwrap()
			} catch (error) {
				console.error(error)
			}
		}
		fetchData()
	}, [dispatch])
}
