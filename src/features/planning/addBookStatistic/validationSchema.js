import * as Yup from 'yup'

export const validationSchema = t =>
	Yup.object().shape({
		date: Yup.string().required(`${t('addBookStatisticDateValidation')}`),
		pages: Yup.number()
			.max(5000, `${t('addBookStatisticPagesMaxValidation')}`)
			.required(`${t('addBookStatisticDateRequiredValidation')}`),
	})
