import { useSelector } from 'react-redux'
import { useBookFormModalContext } from '../../contexts/BookFormModalContext/useBookFormModalContext'
import { useWindowWidth } from '../../contexts/WindowWidthContext/useWindowWidth'
import AddBookForm from '../../components/book/form/AddBookForm/AddBookForm'
import Container from '../../components/common/Container/Container'
import { selectIsListEmpty } from '../../redux/book/selectors'
import Section from '../../components/common/Section/Section'
import s from './LibraryPage.module.css'

const LibraryPage = () => {
	const { isBookFormOpen, setIsBookFormOpen } = useBookFormModalContext()
	const isListEmpty = useSelector(selectIsListEmpty)
	const { windowWidth } = useWindowWidth

	return (
		<>
			<div className={s.libraryPageWrapper}>
				{windowWidth < 768 ? (
					isListEmpty || isBookFormOpen ? (
						<ActionFormModal type='addBookForm' />
					) : null
				) : (
					<Section className='formSection'>
						<Container className='container'>
							<AddBookForm />
						</Container>
					</Section>
				)}
			</div>
			{windowWidth < 768 && !isBookFormOpen && !isListEmpty && (
				<ActionButton
					className='openFormButton'
					type='button'
					onClick={() => setIsBookFormOpen(true)}
				>
					<GoPlus color='#fff' size={24} />
				</ActionButton>
			)}
		</>
	)
}

export default LibraryPage
