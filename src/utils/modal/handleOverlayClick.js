export const handleOverlayClick = (e, setIsModalOpen) => {
	if (e.target === e.currentTarget) {
		setIsModalOpen(false)
	}
}
