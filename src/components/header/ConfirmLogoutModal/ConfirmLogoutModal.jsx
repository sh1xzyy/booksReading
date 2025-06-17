import { useLogout } from '../../../features/auth/Logout/useLogout'
import ActionButton from '../../common/ActionButton/ActionButton'
import BaseModal from '../../modal/BaseModal/BaseModal'
import s from './ConfirmLogoutModal.module.css'

const ConfirmLogoutModal = ({ isModalOpen }) => {
	const { handleLogout } = useLogout()

	return (
		<BaseModal className='confirmLogoutModal' isModalOpen={isModalOpen}>
			<p className={s.title}>
				Якщо Ви вийдете з програми незбережені дані будуть втрачені
			</p>
			<div className={s.buttonsWrapper}>
				<ActionButton
					className='cancelButton'
					type='button'
					title='Відміна'
					onClick={() => isModalOpen(false)}
				/>
				<ActionButton
					className='confirmButton'
					type='button'
					title='Вийти'
					onClick={() => {
						handleLogout()
						isModalOpen(false)
					}}
				/>
			</div>
		</BaseModal>
	)
}

export default ConfirmLogoutModal
