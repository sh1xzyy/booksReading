import { Form, Formik } from 'formik'
import { useState } from 'react'
import * as Yup from 'yup'
import s from './ResultsPanelForm.module.css'
import CustomDatePicker from '../../../custom/DatePicker/CustomDatePicker/CustomDatePicker'
import ErrorMsg from '../../../common/form/ErrorMsg/ErrorMsg'
import FormField from '../../../common/form/FormField/FormField'
import ActionButton from '../../../common/ActionButton/ActionButton'
import { useUserProgressContext } from '../../../../contexts/UserProgressContext/useUserProgressContext'

const initialValues = {
	statDate: '',
	statPages: '',
}

const ResultsPanelForm = () => {
	const [hasUserStartDataChange, setHasUserStartDataChange] = useState(false)
	const { handleAddResult } = useUserProgressContext()

	const handleSubmit = async (value, { resetForm }) => {
		handleAddResult(value)
		resetForm()
	}

	const validationSchema = Yup.object().shape({
		statDate: Yup.string().required('Оберіть дату'),
		statPages: Yup.number().max(5000, 'Максимум 5000').required(`Обов'язково`),
	})

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
								name='statDate'
								className='resultsDatePicker'
								placeholder='Date'
							/>
							<ErrorMsg name='statDate' />
						</div>
					</label>
					<FormField
						name='statPages'
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
