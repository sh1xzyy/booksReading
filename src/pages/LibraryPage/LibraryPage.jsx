import { useSelector } from 'react-redux'
import { useBookReviewModalContext } from '../../contexts/BookReviewModalContext/useBookReviewModalContext'
import { useBookFormModalContext } from '../../contexts/BookFormModalContext/useBookFormModalContext'
import BookReviewModal from '../../components/book/modal/BookReviewModal/BookReviewModal'
import { useWindowWidth } from '../../contexts/WindowWidthContext/useWindowWidth'
import AddBookForm from '../../components/book/form/AddBookForm/AddBookForm'
import ActionButton from '../../components/common/ActionButton/ActionButton'
import { selectBooks, selectIsListEmpty } from '../../redux/book/selectors'
import Container from '../../components/common/Container/Container'
import BookList from '../../components/book/list/BookList/BookList'
import Section from '../../components/common/Section/Section'
import s from './LibraryPage.module.css'

const LibraryPage = () => {
	const { isBookFormOpen, setIsBookFormOpen } = useBookFormModalContext()
	const { goingToRead, currentlyReading, finishedReading } =
		useSelector(selectBooks)
	const { isBookReviewModalOpen } = useBookReviewModalContext()
	const isListEmpty = useSelector(selectIsListEmpty)
	const { windowWidth } = useWindowWidth

	return (
		<>
			{isBookReviewModalOpen && <BookReviewModal />}

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

				<div className={s.bookListWrapper}>
					{finishedReading.length > 0 && (
						<Section>
							<Container className='container'>
								<BookList
									sectionTitle='Прочитано'
									items={finishedReading}
									status='finished'
								/>
							</Container>
						</Section>
					)}

					{currentlyReading.length > 0 && (
						<Section>
							<Container className='container'>
								<BookList
									sectionTitle='Читаю'
									items={currentlyReading}
									status='reading'
								/>
							</Container>
						</Section>
					)}

					{goingToRead.length > 0 && (
						<Section>
							<Container className='container'>
								<BookList
									sectionTitle='Маю намір прочитати'
									items={goingToRead}
									status='goingToReading'
								/>
							</Container>
						</Section>
					)}
				</div>

				{!isListEmpty && (
					<ActionButton
						className='myTrainingButton'
						type='button'
						title='Моє тренування'
						onClick={() => console.log('My Training Clicked')}
					/>
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
