import { GoPlus } from 'react-icons/go'
import ActionButton from '../../components/common/ActionButton/ActionButton'
import Container from '../../components/common/Container/Container'
import Section from '../../components/common/Section/Section'
import ActionFormModal from '../../components/modal/ActionFormModal/ActionFormModal'
import TrainingForm from '../../components/training/form/TrainingForm/TrainingForm'
import { useTrainingFormModalContext } from '../../contexts/TrainingFormModalContext/useTrainingFormModalContext'
import { useWindowWidth } from '../../contexts/WindowWidthContext/useWindowWidth'
import { getLayoutClassByTraining } from '../../utils/trainingForm/getLayoutClassByTraining'
import s from './StatisticsPage.module.css'
import { useGetTrainingPlanForm } from '../../features/planning/getTrainingData/useGetTrainingPlanForm'
import SidePanel from '../../components/sidePanel/SidePanel/SidePanel'

const StatisticsPage = () => {
	const { isTrainingFormModalOpen, setIsTrainingFormModalOpen } =
		useTrainingFormModalContext()
	const { windowWidth } = useWindowWidth()
	const isTraining = false

	useGetTrainingPlanForm()
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

					{windowWidth >= 768 && (
						<Section className='trainingFormSection' moduleClass={s.formArea}>
							<Container className='innerContainer'>
								<TrainingForm />
							</Container>
						</Section>
					)}
				</div>
			</Container>
		</>
	)
}

export default StatisticsPage
