import { useWindowWidth } from '../../../../contexts/WindowWidthContext/useWindowWidth'
import { getBookListClassByStatus } from '../../../../utils/book/getBookListClassByStatus'
import { getTitleClassByStatus } from '../../../../utils/book/getTitleClassByStatus'
import BookItem from '../BookItem/BookItem'
import BookItemEmpty from '../BookItemEmpty/BookItemEmpty'
import BookListHeader from '../BookListHeader/BookListHeader'
import s from './BookList.module.css'

const BookList = ({ sectionTitle, items, status }) => {
	const { windowWidth } = useWindowWidth()

	return (
		<>
			<h2 className={getTitleClassByStatus(s, status)}>{sectionTitle}</h2>
			<BookListHeader status={status} />
			<ul className={getBookListClassByStatus(s, status)}>
				{items.length > 0 ? (
					items.map(book => (
						<BookItem
							key={book._id}
							book={book}
							status={status}
							windowWidth={windowWidth}
						/>
					))
				) : (
					<BookItemEmpty />
				)}
			</ul>
		</>
	)
}

export default BookList
