import { useSelector } from 'react-redux'
import { GoPlus } from 'react-icons/go'
import { lazy, Suspense } from 'react'
import { useWelcomeGuideModalContext } from '../../contexts/WelcomeGuideModalContext/useWelcomeGuideModalContext'
import { useBookReviewModalContext } from '../../contexts/BookReviewModalContext/useBookReviewModalContext'
import { useBookFormModalContext } from '../../contexts/BookFormModalContext/useBookFormModalContext'
import NavigationButton from '../../components/common/NavigationButton/NavigationButton'
import { useWindowWidth } from '../../contexts/WindowWidthContext/useWindowWidth'
import AddBookForm from '../../components/book/form/AddBookForm/AddBookForm'
import ActionButton from '../../components/common/ActionButton/ActionButton'
import { selectBooks, selectIsListEmpty } from '../../redux/book/selectors'
import Container from '../../components/common/Container/Container'
import BookList from '../../components/book/list/BookList/BookList'
import Section from '../../components/common/Section/Section'
import Loader from '../../components/common/Loader/Loader'
import s from './LibraryPage.module.css'
import { useGlobalLoader } from '../../components/hooks/useGlobalLoader/useGlobalLoader'
const ActionFormModal = lazy(() =>
	import('../../components/modal/ActionFormModal/ActionFormModal')
)
const BookReviewModal = lazy(() =>
	import('../../components/book/modal/BookReviewModal/BookReviewModal')
)
const WelcomeGuide = lazy(() =>
	import('../../components/book/guide/WelcomeGuide/WelcomeGuide')
)

const LibraryPage = () => {
	const { goingToRead, currentlyReading, finishedReading } =
		useSelector(selectBooks)
	const { isBookFormOpen, setIsBookFormOpen } = useBookFormModalContext()
	const { isBookReviewModalOpen } = useBookReviewModalContext()
	const { isWelcomeGuideModalOpen } = useWelcomeGuideModalContext()
	const isListEmpty = useSelector(selectIsListEmpty)
	const { windowWidth } = useWindowWidth()
	const isLoading = useGlobalLoader()

	return (
		<>
			{isBookReviewModalOpen && (
				<Suspense fallback={<Loader />}>
					<BookReviewModal />
				</Suspense>
			)}

			{isListEmpty && !isLoading && isWelcomeGuideModalOpen && (
				<Suspense fallback={<Loader />}>
					<WelcomeGuide />
				</Suspense>
			)}

			<div className={s.libraryPageWrapper}>
				{windowWidth < 768 ? (
					isListEmpty || isBookFormOpen ? (
						<Suspense fallback={<Loader />}>
							<ActionFormModal isModalOpen={setIsBookFormOpen}>
								<AddBookForm />
							</ActionFormModal>
						</Suspense>
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
