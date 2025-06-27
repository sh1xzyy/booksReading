import { useUserTrainingProgressContext } from '../../../../contexts/UserTrainingProgressContext/useUserTrainingProgressContext'
import { setTrainingModalClass } from '../../../../utils/trainingResultModal/setTrainingModalClass'
import { setModalOpenFunc } from '../../../../utils/trainingResultModal/setModalOpenFunc'
import TrainingBookReadModal from '../TrainingBookReadModal/TrainingBookReadModal'
import TrainingTimeoutModal from '../TrainingTimeoutModal/TrainingTimeoutModal'
import BaseModal from '../../../modal/BaseModal/BaseModal'

const TrainingResultModal = ({ type }) => {
	const { setIsTrainingTimeout, setIsBookReadModalOpen } =
		useUserTrainingProgressContext()

	return (
		<BaseModal
			className={setTrainingModalClass(type)}
			setIsModalOpen={setModalOpenFunc(
				type,
				setIsBookReadModalOpen,
				setIsTrainingTimeout
			)}
		>
			{type === 'completed' ? (
				<TrainingBookReadModal
					setIsBookReadModalOpen={setIsBookReadModalOpen}
				/>
			) : (
				<TrainingTimeoutModal setIsTrainingTimeout={setIsTrainingTimeout} />
			)}
		</BaseModal>
	)
}

export default TrainingResultModal
