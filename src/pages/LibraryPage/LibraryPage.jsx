import { useSelector } from 'react-redux'
import { GoPlus } from 'react-icons/go'
import { useWelcomeGuideModalContext } from '../../contexts/WelcomeGuideModalContext/useWelcomeGuideModalContext'
import { useBookReviewModalContext } from '../../contexts/BookReviewModalContext/useBookReviewModalContext'
import { useBookFormModalContext } from '../../contexts/BookFormModalContext/useBookFormModalContext'
import BookReviewModal from '../../components/book/modal/BookReviewModal/BookReviewModal'
import { useGlobalLoader } from '../../components/hooks/useGlobalLoader/useGlobalLoader'
import NavigationButton from '../../components/common/NavigationButton/NavigationButton'
import { useWindowWidth } from '../../contexts/WindowWidthContext/useWindowWidth'
import WelcomeGuide from '../../components/book/guide/WelcomeGuide/WelcomeGuide'
import AddBookForm from '../../components/book/form/AddBookForm/AddBookForm'
import ActionButton from '../../components/common/ActionButton/ActionButton'
import { selectBooks, selectIsListEmpty } from '../../redux/book/selectors'
import Container from '../../components/common/Container/Container'
import BookList from '../../components/book/list/BookList/BookList'
import Section from '../../components/common/Section/Section'
import Loader from '../../components/common/Loader/Loader'
import s from './LibraryPage.module.css'
import ActionFormModal from '../../components/modal/ActionFormModal/ActionFormModal'

const LibraryPage = () => {
	const { isBookFormOpen, setIsBookFormOpen } = useBookFormModalContext()
	const { goingToRead, currentlyReading, finishedReading } =
		useSelector(selectBooks)
	const { isBookReviewModalOpen } = useBookReviewModalContext()
	const isListEmpty = useSelector(selectIsListEmpty)
	const { isWelcomeGuideModalOpen } = useWelcomeGuideModalContext()
	const { windowWidth } = useWindowWidth()
	const isLoading = useGlobalLoader()

	if (isLoading) return <Loader />
	return (
		<>
			{}
			{isBookReviewModalOpen && <BookReviewModal />}
			{isListEmpty && isWelcomeGuideModalOpen && <WelcomeGuide />}
			<div className={s.libraryPageWrapper}>
				{windowWidth < 768 ? (
					isListEmpty || isBookFormOpen ? (
						<ActionFormModal isModalOpen={setIsBookFormOpen}>
							<AddBookForm />
						</ActionFormModal>
					) : null
				) : (
					<Section className='formSection'>
						<Container className='container'>
							<AddBookForm />
						</Container>
					</Section>
				)}

				{!isListEmpty && (
					<>
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

						<NavigationButton
							className='myTrainingButton'
							to='/statistics'
							title='Моє тренування'
						/>
					</>
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
