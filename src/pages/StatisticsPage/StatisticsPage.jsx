import { useSelector } from 'react-redux'
import { GoPlus } from 'react-icons/go'
import { lazy, Suspense } from 'react'
import { useUserTrainingProgressContext } from '../../contexts/UserTrainingProgressContext/useUserTrainingProgressContext'
import { useTrainingFormModalContext } from '../../contexts/TrainingFormModalContext/useTrainingFormModalContext'
import { useUserProgressContext } from '../../contexts/UserProgressContext/useUserProgressContext'
import { useGetTrainingBooks } from '../../features/planning/getTrainingBooks/useGetTrainingBooks'
import { getLayoutClassByTraining } from '../../utils/trainingForm/getLayoutClassByTraining'
import CustomRechart from '../../components/custom/Recharts/CustomRechart/CustomRechart'
import { useWindowWidth } from '../../contexts/WindowWidthContext/useWindowWidth'
import TrainingForm from '../../components/training/TrainingForm/TrainingForm'
import ActionButton from '../../components/common/ActionButton/ActionButton'
import Container from '../../components/common/Container/Container'
import BookList from '../../components/book/list/BookList/BookList'
import { selectPlannedData } from '../../redux/planning/selectors'
import Section from '../../components/common/Section/Section'
import Loader from '../../components/common/Loader/Loader'
import s from './StatisticsPage.module.css'
const SidePanelCard = lazy(() =>
	import('../../components/training/sidePanel/SidePanelCard/SidePanelCard')
)
const ActionFormModal = lazy(() =>
	import('../../components/modal/ActionFormModal/ActionFormModal')
)
const TimersLayout = lazy(() =>
	import('../../components/training/timer/TimersLayout/TimersLayout')
)
const TrainingResultModal = lazy(() =>
	import(
		'../../components/training/modal/TrainingResultModal/TrainingResultModal'
	)
)

const StatisticsPage = () => {
	const { isTrainingFormModalOpen, setIsTrainingFormModalOpen } =
		useTrainingFormModalContext()
	const { isTrainingTimeout, isBookReadModalOpen } =
		useUserTrainingProgressContext()
	const { isTraining, handleStartTraining } = useUserProgressContext()
	const { plannedBooks } = useSelector(selectPlannedData)
	const { windowWidth } = useWindowWidth()

	useGetTrainingBooks()

	return (
		<>
			{isTrainingFormModalOpen && (
				<Suspense fallback={<Loader />}>
					<ActionFormModal>
						<TrainingForm />
					</ActionFormModal>
				</Suspense>
			)}

			{isTrainingTimeout && (
				<Suspense fallback={<Loader />}>
					<TrainingResultModal type='failure' />
				</Suspense>
			)}

			{isBookReadModalOpen && (
				<Suspense fallback={<Loader />}>
					<TrainingResultModal type='completed' />
				</Suspense>
			)}

			{windowWidth < 768 && !isTrainingFormModalOpen && (
				<ActionButton
					className='openFormButton'
					type='button'
					onClick={() => setIsTrainingFormModalOpen(true)}
				>
					<GoPlus color='#fff' size={24} />
				</ActionButton>
			)}

			<Container className='statisticsPageContainer'>
				<div className={getLayoutClassByTraining(s, isTraining)}>
					{isTraining && (
						<Suspense fallback={<Loader />}>
							<Section className='timerSection' moduleClass={s.timerArea}>
								<Container className='innerContainer'>
									<TimersLayout />
								</Container>
							</Section>
						</Suspense>
					)}

					<Suspense fallback={<Loader />}>
						<Section className='goalSection' moduleClass={s.goalArea}>
							<Container className='innerContainer'>
								<SidePanelCard type='goalToRead' />
							</Container>
						</Section>
					</Suspense>

					{windowWidth >= 768 && !isTraining && (
						<Section className='trainingFormSection' moduleClass={s.formArea}>
							<Container className='innerContainer'>
								<TrainingForm />
							</Container>
						</Section>
					)}

					<Section className='planningListSection' moduleClass={s.listArea}>
						<Container className='innerContainer'>
							<BookList
								items={plannedBooks}
								sectionTitle='Planning'
								status='planning'
							/>
							{plannedBooks?.length > 0 && !isTraining && (
								<ActionButton
									className='startTrainingButton'
									type='button'
									title='Почати тренування'
									onClick={() => handleStartTraining(true)}
								/>
							)}
						</Container>
					</Section>

					<Section className='chartSection' moduleClass={s.chartArea}>
						<Container className='innerContainer'>
							<CustomRechart />
						</Container>
					</Section>

					{isTraining && (
						<Section className='resultsSection' moduleClass={s.resultsArea}>
							<Container className='innerContainer'>
								<SidePanelCard type='results' />
							</Container>
						</Section>
					)}
				</div>
			</Container>
		</>
	)
}

export default StatisticsPage
