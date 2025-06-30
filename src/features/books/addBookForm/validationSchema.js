import * as Yup from 'yup'

export const validationSchema = t =>
	Yup.object().shape({
		title: Yup.string().required(`${t('addBookFormTitleValidation')}`),
		author: Yup.string().required(`${t('addBookFormAuthorValidation')}`),
		publishYear: Yup.string()
			.min(4, `${t('addBookFormPublishYearLengthValidation')}`)
			.required(`${t('addBookFormPublishYearValidation')}`),
		pagesTotal: Yup.string()
			.required(`${t('addBookFormPagesTotalRequiredValidation')}`)
			.matches(/^\d+$/, `${t('addBookFormPagesTotalTypeValidation')}`),
	})
