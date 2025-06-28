import { useTranslation } from 'react-i18next'
import { croppedAuthorByWidth } from '../../../../../utils/book/croppedAuthorByWidth'
import { getAuthorClass } from '../../../../../utils/book/getAuthorClass'
import s from './DefaultPart.module.css'

const DefaultPart = ({
	data: { author, publishYear, pagesTotal },
	status,
	windowWidth,
}) => {
	const { t } = useTranslation()
	return (
		<>
			<li className={s.infoRow}>
				<span className={s.label}>{t('bookHeaderAuthorTitle')}:</span>
				<span className={getAuthorClass(s, status)} title={author}>
					{croppedAuthorByWidth(author, windowWidth, status)}
				</span>
			</li>
			<li className={s.infoRow}>
				<span className={s.label}>{t('bookHeaderPublishYearTitle')}:</span>
				<span className={s.description}>{publishYear}</span>
			</li>
			<li className={s.infoRow}>
				<span className={s.label}>{t('bookHeaderPagesTotalTitle')}.:</span>
				<span className={s.description}>{pagesTotal}</span>
			</li>
		</>
	)
}

export default DefaultPart
