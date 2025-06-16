import RegisterGuide from '../../components/auth/Register/RegisterGuide/RegisterGuide'
import RegisterForm from '../../components/auth/Register/RegisterForm/RegisterForm'
import { useWindowWidth } from '../../contexts/WindowWidthContext/useWindowWidth'
import Container from '../../components/common/Container/Container'
import Section from '../../components/common/Section/Section'
import s from './RegisterPage.module.css'

const RegisterPage = () => {
	const { windowWidth } = useWindowWidth()

	return (
		<Section className='authSection'>
			<Container className='authContainer'>
				<div className={s.registerWrapper}>
					<RegisterForm />
					{windowWidth >= 768 && <RegisterGuide />}
				</div>
			</Container>
		</Section>
	)
}

export default RegisterPage
