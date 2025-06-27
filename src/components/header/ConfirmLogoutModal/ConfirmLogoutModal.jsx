import { useConfirmLogoutModalContext } from '../../../contexts/ConfirmLogoutModalContext/useConfirmLogoutModalContext'
import { useLogout } from '../../../features/auth/Logout/useLogout'
import ActionButton from '../../common/ActionButton/ActionButton'
import BaseModal from '../../modal/BaseModal/BaseModal'
import s from './ConfirmLogoutModal.module.css'

const ConfirmLogoutModal = () => {
	const { setIsConfirmLogoutModalOpen } = useConfirmLogoutModalContext()
	const { handleLogout } = useLogout()

	return (
		<BaseModal
			className='confirmLogoutModal'
			setIsModalOpen={setIsConfirmLogoutModalOpen}
		>
			<p className={s.title}>
				Якщо Ви вийдете з програми незбережені дані будуть втрачені
			</p>
			<div className={s.buttonsWrapper}>
				<ActionButton
					className='cancelButton'
					type='button'
					title='Відміна'
					onClick={() => setIsConfirmLogoutModalOpen(false)}
				/>
				<ActionButton
					className='confirmButton'
					type='button'
					title='Вийти'
					onClick={() => {
						handleLogout()
						setIsConfirmLogoutModalOpen(false)
					}}
				/>
			</div>
		</BaseModal>
	)
}

export default ConfirmLogoutModal
