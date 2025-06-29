import { HiArrowLongLeft } from 'react-icons/hi2'
import { Form, Formik } from 'formik'
import { useState } from 'react'
import { useAddBookTrainingPlanForm } from '../../../features/planning/addBookTrainingPlanForm/useAddBookTrainingPlanForm'
import { useTrainingFormModalContext } from '../../../contexts/TrainingFormModalContext/useTrainingFormModalContext'
import CustomDatePicker from '../../custom/DatePicker/CustomDatePicker/CustomDatePicker'
import CustomSelector from '../../custom/Selector/CustomSelector/CustomSelector'
import ActionButton from '../../common/ActionButton/ActionButton'
import ErrorMsg from '../../common/form/ErrorMsg/ErrorMsg'
import { useTranslation } from 'react-i18next'
import s from './TrainingForm.module.css'

const TrainingForm = () => {
	const [hasUserStartDataChange, setHasUserStartDataChange] = useState(false)
	const [hasUserEndDataChange, setHasUserEndDataChange] = useState(false)
	const { setIsTrainingFormModalOpen } = useTrainingFormModalContext()
	const { initialValues, validationSchema, handleSubmit } =
		useAddBookTrainingPlanForm()
	const { t } = useTranslation()

	return (
		<>
			<ActionButton
				className='goBackButton'
				type='button'
				onClick={() => {
					setIsTrainingFormModalOpen(false)
				}}
			>
				<HiArrowLongLeft color='#ff6b08' size={24} />
			</ActionButton>
			<div className={s.trainingHeader}>
				<h3 className={s.title}>{t('trainingFormTitle')}</h3>
			</div>
			<Formik
				initialValues={initialValues}
				onSubmit={handleSubmit}
				validationSchema={validationSchema(t)}
			>
				<Form className={s.form}>
					<div className={s.fields}>
						<div className={s.dataSelectWrapper}>
							<div className={s.fieldWrapper}>
								<CustomDatePicker
									className='trainingDatePicker'
									hasUserDataChange={hasUserStartDataChange}
									setHasUserDataChange={setHasUserStartDataChange}
									name='startDate'
									placeholder={t('trainingFormStartDate')}
								/>
								<ErrorMsg name='startDate' />
							</div>
							<div className={s.fieldWrapper}>
								<CustomDatePicker
									className='trainingDatePicker'
									hasUserDataChange={hasUserEndDataChange}
									setHasUserDataChange={setHasUserEndDataChange}
									name='endDate'
									placeholder={t('trainingFormFinishDate')}
								/>
								<ErrorMsg name='endDate' />
							</div>
						</div>
						<div className={s.fieldWrapper}>
							<CustomSelector
								name='books'
								placeholder={t('trainingFormSelectBooksPlaceholder')}
							/>
							<ErrorMsg name='books' />
						</div>
					</div>
					<ActionButton
						className='addBookButton'
						type='submit'
						title={t('addFormButton')}
					/>
				</Form>
			</Formik>
		</>
	)
}

export default TrainingForm
