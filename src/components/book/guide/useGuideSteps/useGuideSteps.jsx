import { useTranslation } from 'react-i18next'
import { MdMenuBook } from 'react-icons/md'
import { RiFlagLine } from 'react-icons/ri'

export const useGuideSteps = () => {
	const { t } = useTranslation()
	return [
		{
			title: t('welcomeGuideTitle1'),
			headLine: t('welcomeGuideHeadLine1'),
			hintText: t('welcomeGuideHintText1'),
			Icon: MdMenuBook,
		},
		{
			title: t('welcomeGuideTitle2'),
			headLine: t('welcomeGuideHeadLine2'),
			hintText: t('welcomeGuideHintText2'),
			Icon: RiFlagLine,
		},
	]
}
