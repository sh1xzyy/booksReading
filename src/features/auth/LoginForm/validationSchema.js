import * as Yup from 'yup'

export const validationSchema = t =>
	Yup.object({
		email: Yup.string().required(`${t('loginEmailValidation')}`),
		password: Yup.string()
			.min(8, `${t('loginPasswordMinValidation')}`)
			.max(32, `${t('loginPasswordMaxValidation')}`)
			.required(`${t('loginPasswordRequiredValidation')}`),
	})
