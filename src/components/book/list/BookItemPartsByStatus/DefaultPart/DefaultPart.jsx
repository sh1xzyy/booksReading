import { croppedAuthorByWidth } from '../../../../../utils/book/croppedAuthorByWidth'
import { getAuthorClass } from '../../../../../utils/book/getAuthorClass'
import s from './DefaultPart.module.css'

const DefaultPart = ({
	data: { author, publishYear, pagesTotal },
	status,
	windowWidth,
}) => {
	return (
		<>
			<li className={s.infoRow}>
				<span className={s.label}>Автор:</span>
				<span className={getAuthorClass(s, status)} title={author}>
					{croppedAuthorByWidth(author, windowWidth, status)}
				</span>
			</li>
			<li className={s.infoRow}>
				<span className={s.label}>Рік:</span>
				<span className={s.description}>{publishYear}</span>
			</li>
			<li className={s.infoRow}>
				<span className={s.label}>Стор.:</span>
				<span className={s.description}>{pagesTotal}</span>
			</li>
		</>
	)
}

export default DefaultPart
