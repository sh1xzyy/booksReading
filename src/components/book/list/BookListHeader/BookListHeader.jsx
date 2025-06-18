import { getHeaderClassByStatus } from '../../../../utils/book/getHeaderClassByStatus'
import DefaultHeaderList from '../BookListHeaderByStatus/DefaultHeaderList/DefaultHeaderList'
import FinishedHeaderList from '../BookListHeaderByStatus/FinishedHeaderList/FinishedHeaderList'
import s from './BookListHeader.module.css'

const BookListHeader = ({ status }) => {
	return (
		<ul className={getHeaderClassByStatus(s, status)}>
			{status === 'finished' ? (
				<FinishedHeaderList />
			) : (
				<DefaultHeaderList status={status} />
			)}
		</ul>
	)
}

export default BookListHeader
