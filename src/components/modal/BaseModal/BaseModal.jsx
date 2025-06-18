import clsx from 'clsx'
import { handleOverlayClick } from '../../../utils/modal/handleOverlayClick'
import s from './BaseModal.module.css'
import { useDisableBodyScroll } from '../../hooks/useDisableBodyScroll/useDisableBodyScroll'
import { useCloseModalByKeydown } from '../../hooks/useCloseModalByKeydown/useCloseModalByKeydown'

const BaseModal = ({ children, className, isModalOpen }) => {
	useDisableBodyScroll()
	useCloseModalByKeydown(isModalOpen)

	return (
		<div
			className={s.modalOverlay}
			onClick={e => handleOverlayClick(e, isModalOpen)}
		>
			<div className={clsx(s.modal, className && s[className])}>{children}</div>
		</div>
	)
}

export default BaseModal
