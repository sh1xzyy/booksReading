import { useTranslation } from 'react-i18next'

export const useSections = () => {
	const { t } = useTranslation()
	return [
		{
			title: t('registerQuoteTitle1'),
			messages: t('registerQuoteDesc1', { returnObjects: true }),
		},
		{
			title: t('registerQuoteTitle2'),
			messages: t('registerQuoteDesc2', { returnObjects: true }),
		},
	]
}
