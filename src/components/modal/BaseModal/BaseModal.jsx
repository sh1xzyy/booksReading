import clsx from 'clsx'
import { useCloseModalByKeydown } from '../../../hooks/useCloseModalByKeydown/useCloseModalByKeydown'
import { useDisableBodyScroll } from '../../../hooks/useDisableBodyScroll/useDisableBodyScroll'
import { handleOverlayClick } from '../../../utils/modal/handleOverlayClick'
import s from './BaseModal.module.css'

const BaseModal = ({ children, className, setIsModalOpen }) => {
	useDisableBodyScroll()
	useCloseModalByKeydown(setIsModalOpen)

	return (
		<div
			className={s.modalOverlay}
			onClick={e => handleOverlayClick(e, setIsModalOpen)}
		>
			<div className={clsx(s.modal, className && s[className])}>{children}</div>
		</div>
	)
}

export default BaseModal
