import { Form, Formik } from 'formik'
import { useState } from 'react'
import { useAddBookStatistic } from '../../../../../features/planning/addBookStatistic/useAddBookStatistic'
import CustomDatePicker from '../../../../custom/DatePicker/CustomDatePicker/CustomDatePicker'
import ActionButton from '../../../../common/ActionButton/ActionButton'
import FormField from '../../../../common/form/FormField/FormField'
import ErrorMsg from '../../../../common/form/ErrorMsg/ErrorMsg'
import s from './ResultsPanelForm.module.css'

const ResultsPanelForm = () => {
	const [hasUserStartDataChange, setHasUserStartDataChange] = useState(false)
	const { initialValues, validationSchema, handleSubmit } =
		useAddBookStatistic()

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={handleSubmit}
			validationSchema={validationSchema}
		>
			<Form className={s.form}>
				<div className={s.fields}>
					<label>
						<span className={s.label}>Дата</span>
						<div className={s.fieldWrapper}>
							<CustomDatePicker
								hasUserDataChange={hasUserStartDataChange}
								setHasUserDataChange={setHasUserStartDataChange}
								name='date'
								className='resultsDatePicker'
								placeholder='Date'
							/>
							<ErrorMsg name='date' />
						</div>
					</label>
					<FormField
						name='pages'
						type='number'
						placeholder='0'
						classField='resultsField'
						classLabel='resultsPanelLabel'
						labelTitle='Кількість сторінок'
					/>
				</div>
				<ActionButton
					className='addResultButton'
					type='submit'
					title='Додати результат'
				/>
			</Form>
		</Formik>
	)
}

export default ResultsPanelForm
