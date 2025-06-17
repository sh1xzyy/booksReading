import { useSelector } from 'react-redux'

export const useGlobalLoader = () => {
	return useSelector(state => state?.auth?.isLoading || state?.book?.isLoading)
}
