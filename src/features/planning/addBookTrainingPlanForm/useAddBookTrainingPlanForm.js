import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import { useTrainingFormModalContext } from '../../../contexts/TrainingFormModalContext/useTrainingFormModalContext'
import { planningThunk } from '../../../redux/planning/operations'
import { userDataThunk } from '../../../redux/auth/operations'
import { validationSchema } from './validationSchema'
import { initialValues } from './initialValues'
import { useTranslation } from 'react-i18next'

export const useAddBookTrainingPlanForm = () => {
	const { setIsTrainingFormModalOpen } = useTrainingFormModalContext()
	const dispatch = useDispatch()
	const { t } = useTranslation()

	const handleSubmit = async (value, { resetForm }) => {
		try {
			await dispatch(planningThunk({ method: 'POST', body: value })).unwrap()
			toast.success(`${t('addBookTrainingPlanSuccessToast')}`)
			setIsTrainingFormModalOpen(false)
			await dispatch(userDataThunk()).unwrap()
		} catch (error) {
			toast.error(error.message)
		} finally {
			resetForm()
		}
	}

	return { initialValues, validationSchema, handleSubmit }
}
