import { useEffect } from 'react'

export const useCloseModalByKeydown = isModalOpen => {
	useEffect(() => {
		const onKeydownClick = event => event.key === 'Escape' && isModalOpen(false)

		addEventListener('keydown', onKeydownClick)
		return () => removeEventListener('keydown', onKeydownClick)
	}, [isModalOpen])
}
