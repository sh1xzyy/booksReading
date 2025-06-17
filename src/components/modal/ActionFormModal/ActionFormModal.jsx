import s from './ActionFormModal.module.css'
import AddBookForm from '../../book/form/AddBookForm/AddBookForm'
import { useDisableBodyScroll } from '../../hooks/useDisableBodyScroll/useDisableBodyScroll'

const ActionFormModal = ({ type }) => {
	useDisableBodyScroll()

	return (
		<div className={s.modalOverlay}>
			<Container className='container'>
				{type === 'addBookForm' ? <AddBookForm /> : null}
			</Container>
		</div>
	)
}

export default ActionFormModal
