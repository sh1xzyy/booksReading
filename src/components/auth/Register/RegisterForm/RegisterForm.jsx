import { Form, Formik } from 'formik'
import { useRegisterForm } from '../../../../features/auth/RegisterForm/useRegisterForm'
import NavigationButton from '../../../common/NavigationButton/NavigationButton'
import ActionButton from '../../../common/ActionButton/ActionButton'
import FormField from '../../../common/form/FormField/FormField'
import Loader from '../../../common/Loader/Loader'
import s from './RegisterForm.module.css'

const RegisterForm = () => {
	const { initialValues, validationSchema, handleSubmit } = useRegisterForm()

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
							labelTitle='Ім’я '
							name='name'
							type='text'
							placeholder='...'
							isSup={true}
						/>
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
							placeholder='...'
							isSup={true}
						/>
						<FormField
							classField='authfield'
							classLabel='authLabel'
							labelTitle='Підтвердити пароль '
							name='confirmPassword'
							type='password'
							placeholder='...'
							isSup={true}
						/>
					</div>
					<ActionButton
						className='registerSubmitButton'
						type='submit'
						title='Зареєструватися'
					/>
					<p className={s.loginText}>
						Вже з нами?&nbsp;
						<NavigationButton
							className='loginLink'
							to='/login'
							title='Увійти'
						/>
					</p>
				</Form>
			</Formik>
		</div>
	)
}

export default RegisterForm
