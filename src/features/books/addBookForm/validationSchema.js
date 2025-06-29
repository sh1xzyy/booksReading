import * as Yup from 'yup'

export const validationSchema = t =>
	Yup.object().shape({
		title: Yup.string().required(`${t('addBookFormTitleValidation')}`),
		author: Yup.string().required(`${t('addBookFormAuthorValidation')}`),
		publishYear: Yup.string().required(
			`${t('addBookFormPublishYearValidation')}`
		),
		pagesTotal: Yup.number()
			.typeError(`${t('addBookFormPagesTotalTypeValidation')}`)
			.min(1, `${t('addBookFormPagesTotalMinValidation')}`)
			.required(`${t('addBookFormPagesTotalRequiredValidation')}`),
	})
