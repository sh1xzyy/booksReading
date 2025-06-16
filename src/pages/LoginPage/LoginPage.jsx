import LoginGuide from '../../components/auth/Login/LoginGuide/LoginGuide'
import LoginForm from '../../components/auth/Login/LoginForm/LoginForm'
import Container from '../../components/common/Container/Container'
import Section from '../../components/common/Section/Section'
import s from './LoginPage.module.css'

const LoginPage = () => {
	return (
		<Section className='authSection'>
			<Container className='authContainer'>
				<div className={s.loginWrapper}>
					<LoginForm />
					<LoginGuide />
				</div>
			</Container>
		</Section>
	)
}

export default LoginPage
