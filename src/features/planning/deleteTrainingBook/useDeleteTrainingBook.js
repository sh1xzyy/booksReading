import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import { deleteTrainingBookThunk } from '../../../redux/planning/operations'
import { useTranslation } from 'react-i18next'

export const useDeleteTrainingPlan = () => {
	const dispatch = useDispatch()
	const { t } = useTranslation()

	const deleteBookFromPlan = async _id => {
		try {
			await dispatch(deleteTrainingBookThunk(_id)).unwrap()
			toast.success(`${t('deleteBookTrainingSuccessToast')}`)
		} catch (error) {
			toast.error(`${t('deleteBookTrainingFailureToast')}`)
		}
	}

	return { deleteBookFromPlan }
}
