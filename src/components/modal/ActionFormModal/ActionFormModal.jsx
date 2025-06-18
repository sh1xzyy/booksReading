import { useCloseModalByKeydown } from '../../hooks/useCloseModalByKeydown/useCloseModalByKeydown'
import { useDisableBodyScroll } from '../../hooks/useDisableBodyScroll/useDisableBodyScroll'
import Container from '../../common/Container/Container'
import s from './ActionFormModal.module.css'

const ActionFormModal = ({ children, isModalOpen }) => {
	useDisableBodyScroll()
	useCloseModalByKeydown(isModalOpen)

	return (
		<div className={s.modalOverlay}>
			<Container className='container'>{children}</Container>
		</div>
	)
}

export default ActionFormModal
