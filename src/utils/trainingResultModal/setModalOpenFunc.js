export const setModalOpenFunc = (
	type,
	setIsBookReadModalOpen,
	setIsTrainingTimeout
) => (type === 'completed' ? setIsBookReadModalOpen : setIsTrainingTimeout)
