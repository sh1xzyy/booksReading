import { HiArrowLongLeft } from 'react-icons/hi2'
import { Form, Formik } from 'formik'
import { useState } from 'react'
import { useAddBookTrainingPlanForm } from '../../../../features/planning/AddBookTrainingPlan/useAddBookTrainingPlanForm'
import { useTrainingFormModalContext } from '../../../../contexts/TrainingFormModalContext/useTrainingFormModalContext'
import CustomDatePicker from '../../../custom/DatePicker/CustomDatePicker/CustomDatePicker'
import CustomSelector from '../../../custom/Selector/CustomSelector/CustomSelector'
import ActionButton from '../../../common/ActionButton/ActionButton'
import ErrorMsg from '../../../common/form/ErrorMsg/ErrorMsg'
import s from './TrainingForm.module.css'

const TrainingForm = () => {
	const [hasUserStartDataChange, setHasUserStartDataChange] = useState(false)
	const [hasUserEndDataChange, setHasUserEndDataChange] = useState(false)
	const { setIsTrainingFormModalOpen } = useTrainingFormModalContext()
	const { initialValues, validationSchema, handleSubmit } =
		useAddBookTrainingPlanForm()

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
				<h3 className={s.title}>Моє тренування</h3>
			</div>
			<Formik
				initialValues={initialValues}
				onSubmit={handleSubmit}
				validationSchema={validationSchema}
			>
				<Form className={s.form}>
					<div className={s.fields}>
						<div className={s.fieldWrapper}>
							<CustomDatePicker
								className='trainingDatePicker'
								hasUserDataChange={hasUserStartDataChange}
								setHasUserDataChange={setHasUserStartDataChange}
								name='startDate'
								placeholder='Початок'
							/>
							<ErrorMsg name='startDate' />
						</div>
						<div className={s.fieldWrapper}>
							<CustomDatePicker
								className='trainingDatePicker'
								hasUserDataChange={hasUserEndDataChange}
								setHasUserDataChange={setHasUserEndDataChange}
								name='endDate'
								placeholder='Завершення'
							/>
							<ErrorMsg name='endDate' />
						</div>
						<div className={s.fieldWrapper}>
							<CustomSelector
								name='books'
								placeholder='Обрати книги з бібліотеки'
							/>
							<ErrorMsg name='books' />
						</div>
					</div>
					<ActionButton
						className='addBookButton'
						type='submit'
						title='Додати'
					/>
				</Form>
			</Formik>
		</>
	)
}

export default TrainingForm
