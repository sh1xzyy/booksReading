import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import { deleteTrainingBookThunk } from '../../../redux/planning/operations'

export const useDeleteTrainingPlan = () => {
	const dispatch = useDispatch()

	const deleteBookFromPlan = async _id => {
		try {
			await dispatch(deleteTrainingBookThunk(_id)).unwrap()
			toast.success('Ви успішно видалили план книги!')
		} catch (error) {
			toast.error('Ви не можете видалити книгу, яку вже прочитали/читаєте')
			console.log(error)
		}
	}

	return { deleteBookFromPlan }
}
