import { useTranslation } from 'react-i18next'
import s from './LoginGuide.module.css'

const LoginGuide = () => {
	const { t } = useTranslation()

	return (
		<div className={s.loginGuideWrapper}>
			<span className={s.quoteMark}>“</span>
			<p className={s.quoteText}>{t('loginQuote')}</p>
			<span className={s.quoteAuthor}>{t('loginQuoteAuthor')}</span>
		</div>
	)
}

export default LoginGuide
