import { useEffect } from 'react'

export const useCloseModalByKeydown = setIsModalOpen => {
	useEffect(() => {
		const onKeydownClick = event =>
			event.key === 'Escape' && setIsModalOpen(false)

		addEventListener('keydown', onKeydownClick)
		return () => removeEventListener('keydown', onKeydownClick)
	}, [setIsModalOpen])
}
