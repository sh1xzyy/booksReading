import { useTranslation } from 'react-i18next'
import { useWindowWidth } from '../../../../../contexts/WindowWidthContext/useWindowWidth'
import s from './FinishedHeaderList.module.css'

const FinishedHeaderList = () => {
	const { windowWidth } = useWindowWidth()
	const { t } = useTranslation()
	return (
		<>
			<li className={s.finishedHeaderItem}>{t('bookHeaderNameTitle')}</li>
			<li className={s.finishedHeaderItem}>{t('bookHeaderAuthorTitle')}</li>
			<li className={s.finishedHeaderItem}>
				{t('bookHeaderPublishYearTitle')}
			</li>
			<li className={s.finishedHeaderItem}>{t('bookHeaderPagesTotalTitle')}</li>
			<li className={s.finishedHeaderItem}>
				{windowWidth < 1268
					? t('bookHeaderRatingShort')
					: t('bookHeaderRatingLong')}
			</li>
		</>
	)
}

export default FinishedHeaderList
