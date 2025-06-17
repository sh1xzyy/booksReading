import { useSelector } from 'react-redux'
import { selectIsLoading } from '../../redux/auth/selectors'
import Loader from '../../components/common/Loader/Loader'

const LibraryPage = () => {
	const isLoading = useSelector(selectIsLoading)
	return (
		<>
			{isLoading && <Loader />}
			<div>LibraryPage</div>
		</>
	)
}

export default LibraryPage
