import { useSelector } from 'react-redux'
import { GoPlus } from 'react-icons/go'
import { useTrainingFormModalContext } from '../../contexts/TrainingFormModalContext/useTrainingFormModalContext'
import { useUserProgressContext } from '../../contexts/UserProgressContext/useUserProgressContext'
import { useGetTrainingBooks } from '../../features/planning/getTrainingBooks/useGetTrainingBooks'
import { getLayoutClassByTraining } from '../../utils/trainingForm/getLayoutClassByTraining'
import ActionFormModal from '../../components/modal/ActionFormModal/ActionFormModal'
import TrainingForm from '../../components/training/form/TrainingForm/TrainingForm'
import { useWindowWidth } from '../../contexts/WindowWidthContext/useWindowWidth'
import ActionButton from '../../components/common/ActionButton/ActionButton'
import SidePanel from '../../components/sidePanel/SidePanel/SidePanel'
import Container from '../../components/common/Container/Container'
import BookList from '../../components/book/list/BookList/BookList'
import { selectPlannedData } from '../../redux/planning/selectors'
import Section from '../../components/common/Section/Section'
import s from './StatisticsPage.module.css'

const StatisticsPage = () => {
	const { isTrainingFormModalOpen, setIsTrainingFormModalOpen } =
		useTrainingFormModalContext()
	const { isTraining, handleStartTraining } = useUserProgressContext()
	const { plannedBooks } = useSelector(selectPlannedData)
	const { windowWidth } = useWindowWidth()

	useGetTrainingBooks()

	return (
		<>
			{isTrainingFormModalOpen && (
				<ActionFormModal>
					<TrainingForm />
				</ActionFormModal>
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
					<Section className='goalSection' moduleClass={s.goalArea}>
						<Container className='innerContainer'>
							<SidePanel type='goalToRead' />
						</Container>
					</Section>

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

					{isTraining && (
						<Section className='resultsSection' moduleClass={s.resultsArea}>
							<Container className='innerContainer'>
								<SidePanel type='results' />
							</Container>
						</Section>
					)}
				</div>
			</Container>
		</>
	)
}

export default StatisticsPage
