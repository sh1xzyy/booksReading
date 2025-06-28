import { Form, Formik } from 'formik'
import { useRegisterForm } from '../../../../features/auth/RegisterForm/useRegisterForm'
import NavigationButton from '../../../common/NavigationButton/NavigationButton'
import ActionButton from '../../../common/ActionButton/ActionButton'
import FormField from '../../../common/form/FormField/FormField'
import { useTranslation } from 'react-i18next'
import s from './RegisterForm.module.css'

const RegisterForm = () => {
	const { initialValues, validationSchema, handleSubmit } = useRegisterForm()
	const { t } = useTranslation()

	return (
		<div className={s.formWrapper}>
			<Formik
				initialValues={initialValues}
				onSubmit={handleSubmit}
				validationSchema={validationSchema}
			>
				<Form className={s.form}>
					<ActionButton
						className='registerGoogleButton'
						type='button'
						title='Google'
					/>
					<div className={s.fields}>
						<FormField
							classField='authfield'
							classLabel='authLabel'
							labelTitle={t('registerNameLabel')}
							name='name'
							type='text'
							placeholder='...'
							isSup={true}
						/>
						<FormField
							classField='authfield'
							classLabel='authLabel'
							labelTitle={t('registerEmailLabel')}
							name='email'
							type='email'
							placeholder='your@email.com'
							isSup={true}
						/>
						<FormField
							classField='authfield'
							classLabel='authLabel'
							labelTitle={t('registerPasswordLabel')}
							name='password'
							type='password'
							placeholder='...'
							isSup={true}
						/>
						<FormField
							classField='authfield'
							classLabel='authLabel'
							labelTitle={t('registerConfirmPasswordLabel')}
							name='confirmPassword'
							type='password'
							placeholder='...'
							isSup={true}
						/>
					</div>
					<ActionButton
						className='registerSubmitButton'
						type='submit'
						title={t('registerButton')}
					/>
					<p className={s.loginText}>
						Вже з нами?&nbsp;
						<NavigationButton
							className='loginLink'
							to='/login'
							title={t('registerLink')}
						/>
					</p>
				</Form>
			</Formik>
		</div>
	)
}

export default RegisterForm
