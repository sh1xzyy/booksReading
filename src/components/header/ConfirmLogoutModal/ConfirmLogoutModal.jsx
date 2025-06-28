import { useTranslation } from 'react-i18next'
import { useConfirmLogoutModalContext } from '../../../contexts/ConfirmLogoutModalContext/useConfirmLogoutModalContext'
import { useLogout } from '../../../features/auth/Logout/useLogout'
import ActionButton from '../../common/ActionButton/ActionButton'
import BaseModal from '../../modal/BaseModal/BaseModal'
import s from './ConfirmLogoutModal.module.css'

const ConfirmLogoutModal = () => {
	const { setIsConfirmLogoutModalOpen } = useConfirmLogoutModalContext()
	const { handleLogout } = useLogout()
	const { t } = useTranslation()

	return (
		<BaseModal
			className='confirmLogoutModal'
			setIsModalOpen={setIsConfirmLogoutModalOpen}
		>
			<p className={s.title}>{t('logoutModalTitle')}</p>
			<div className={s.buttonsWrapper}>
				<ActionButton
					className='cancelButton'
					type='button'
					title={t('logoutModalCancelButton')}
					onClick={() => setIsConfirmLogoutModalOpen(false)}
				/>
				<ActionButton
					className='confirmButton'
					type='button'
					title={t('logoutModalGoOutButton')}
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
