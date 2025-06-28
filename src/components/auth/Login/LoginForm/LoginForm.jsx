import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Form, Formik } from 'formik'
import { selectIsLoggedIn } from '../../../../redux/auth/selectors'
import NavigationButton from '../../../common/NavigationButton/NavigationButton'
import { useLoginForm } from '../../../../features/auth/LoginForm/useLoginForm'
import ActionButton from '../../../common/ActionButton/ActionButton'
import FormField from '../../../common/form/FormField/FormField'
import { useTranslation } from 'react-i18next'
import s from './LoginForm.module.css'

const LoginForm = () => {
	const { initialValues, validationSchema, handleSubmit } = useLoginForm()
	const isLoggedIn = useSelector(selectIsLoggedIn)
	const { t } = useTranslation()

	if (isLoggedIn) {
		return <Navigate to='/library' />
	}

	return (
		<>
			<div className={s.formWrapper}>
				<Formik
					initialValues={initialValues}
					onSubmit={handleSubmit}
					validationSchema={validationSchema}
				>
					<Form className={s.form}>
						<ActionButton
							className='loginGoogleButton'
							type='button'
							title='Google'
							onClick={() => {
								window.location.href = `${
									import.meta.env.VITE_API_KEY
								}auth/google`
							}}
						/>
						<div className={s.fields}>
							<FormField
								classField='authfield'
								classLabel='authLabel'
								labelTitle={t('loginEmailLabel')}
								name='email'
								type='email'
								placeholder='your@email.com'
								isSup={true}
							/>
							<FormField
								classField='authfield'
								classLabel='authLabel'
								labelTitle={t('loginPasswordLabel')}
								name='password'
								type='password'
								placeholder={t('loginPasswordLabel')}
								isSup={true}
							/>
						</div>
						<ActionButton
							className='loginSubmitButton'
							type='submit'
							title={t('loginButton')}
						/>
						<NavigationButton
							className='registerLink'
							to='/register'
							title={t('loginLink')}
						/>
					</Form>
				</Formik>
			</div>
		</>
	)
}

export default LoginForm
