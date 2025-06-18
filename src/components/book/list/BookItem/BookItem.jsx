import { MdMenuBook } from 'react-icons/md'
import { getItemClassByStatus } from '../../../../utils/book/getItemClassByStatus'
import { getBookIconClass } from '../../../../utils/book/getBookIconClass'
import { getDetailsWrapperClass } from '../../../../utils/book/getDetailsWrapperClass'
import { getTitleClass } from '../../../../utils/book/getTitleClass'
import { croppedTitleByWidth } from '../../../../utils/book/croppedTitleByWidth'
import { getInfoListClass } from '../../../../utils/book/getInfoListClass'
import { getAuthorClass } from '../../../../utils/book/getAuthorClass'
import { croppedAuthorByWidth } from '../../../../utils/book/croppedAuthorByWidth'
import FinishedPart from '../BookItemPartsByStatus/FinishedPart/FinishedPart'
import s from './BookItem.module.css'

const BookItem = ({ book, status, windowWidth }) => {
	const {
		_id = '',
		title = '',
		author = '',
		publishYear = '',
		pagesTotal = '',
		rating = 0,
		feedback = '',
	} = book || {}

	return (
		<li className={getItemClassByStatus(s, status)}>
			<MdMenuBook className={getBookIconClass(s, status)} />
			<div className={getDetailsWrapperClass(s, status)}>
				<span className={getTitleClass(s, status)} title={title}>
					{croppedTitleByWidth(title, windowWidth, status)}
				</span>
				<ul className={getInfoListClass(s, status)}>
					<li>
						<div className={s.infoRow}>
							<span className={s.label}>Автор:</span>
							<span className={getAuthorClass(s, status)} title={author}>
								{croppedAuthorByWidth(author, windowWidth, status)}
							</span>
						</div>
					</li>
					<li>
						<div className={s.infoRow}>
							<span className={s.label}>Рік:</span>
							<span className={s.description}>{publishYear}</span>
						</div>
					</li>
					<li>
						<div className={s.infoRow}>
							<span className={s.label}>Стор.:</span>
							<span className={s.description}>{pagesTotal}</span>
						</div>
					</li>
					{status === 'finished' && (
						<FinishedPart data={{ _id, rating, feedback }} />
					)}
				</ul>
			</div>
		</li>
	)
}

export default BookItem
