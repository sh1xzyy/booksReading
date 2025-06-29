import { useTranslation } from 'react-i18next'
import s from './DefaultHeaderList.module.css'

const DefaultHeaderList = () => {
	const { t } = useTranslation()
	return (
		<>
			<li className={s.headerItem}>{t('bookHeaderNameTitle')}</li>
			<li className={s.headerItem}>{t('bookHeaderAuthorTitle')}</li>
			<li className={s.headerItem}>{t('bookHeaderPublishYearTitle')}</li>
			<li className={s.headerItem}>{t('bookHeaderPagesTotalTitle')}</li>
		</>
	)
}

export default DefaultHeaderList
