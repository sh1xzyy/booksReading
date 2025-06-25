import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Form, Formik } from 'formik'
import { selectIsLoggedIn } from '../../../../redux/auth/selectors'
import NavigationButton from '../../../common/NavigationButton/NavigationButton'
import { useLoginForm } from '../../../../features/auth/LoginForm/useLoginForm'
import ActionButton from '../../../common/ActionButton/ActionButton'
import s from './LoginForm.module.css'
import FormField from '../../../common/form/FormField/FormField'

const LoginForm = () => {
	const { initialValues, validationSchema, handleSubmit } = useLoginForm()
	const isLoggedIn = useSelector(selectIsLoggedIn)

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
							className='googleButton'
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
								labelTitle='Електронна адреса '
								name='email'
								type='email'
								placeholder='your@email.com'
								isSup={true}
							/>
							<FormField
								classField='authfield'
								classLabel='authLabel'
								labelTitle='Пароль '
								name='password'
								type='password'
								placeholder='Пароль'
								isSup={true}
							/>
						</div>
						<ActionButton
							className='loginSubmitButton'
							type='submit'
							title='Увійти'
						/>
						<NavigationButton
							className='registerLink'
							to='/register'
							title='Реєстрація'
						/>
					</Form>
				</Formik>
			</div>
		</>
	)
}

export default LoginForm
