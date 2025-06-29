import * as Yup from 'yup'

export const validationSchema = t =>
	Yup.object().shape({
		name: Yup.string().required(`${t('registerNameValidation')}`),
		email: Yup.string().required(`${t('registerEmailValidation')}`),
		password: Yup.string()
			.min(6, `${t('registerPasswordMinValidation')}`)
			.max(32, `${t('registerPasswordMaxValidation')}`)
			.matches(/[A-Z]/, `${t('registerPasswordContentValidation1')}`)
			.matches(/[a-z]/, `${t('registerPasswordContentValidation2')}`)
			.matches(/\d/, `${t('registerPasswordContentValidation3')}`)
			.matches(/[@$!%*?&]/, `${t('registerPasswordContentValidation4')}`)
			.required(`${t('registerPasswordRequiredValidation')}`),
		confirmPassword: Yup.string()
			.min(6, `${t('registerPasswordMinValidation')}`)
			.max(32, `${t('registerPasswordMaxValidation')}`)
			.required(`${t('registerPasswordConfirmRequiredValidation')}`),
	})
