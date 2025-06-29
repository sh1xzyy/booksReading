import * as Yup from 'yup'

export const validationSchema = t =>
	Yup.object().shape({
		startDate: Yup.string()
			.matches(
				/^\d{4}-\d{2}-\d{2}$/,
				`${t('addBookTrainingDateContentValidation')}`
			)
			.required(`${t('addBookTrainingStartDateRequiredValidation')}`),
		endDate: Yup.string()
			.matches(
				/^\d{4}-\d{2}-\d{2}$/,
				`${t('addBookTrainingDateContentValidation')}`
			)
			.required(`${t('addBookTrainingEndDateRequiredValidation')}`),
		books: Yup.array()
			.of(Yup.string())
			.min(1, `${t('addBookTrainingBooksMinValidation')}`)
			.required(`${t('addBookTrainingBooksRequiredValidation')}`),
	})
