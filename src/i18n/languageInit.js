import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'
import en from './locales/en'
import uk from './locales/uk'
import ru from './locales/ru'

const browserLang = navigator.language.split('-')[0]

i18n.use(initReactI18next).init({
	resources: {
		en: { translation: en },
		uk: { translation: uk },
		ru: { translation: ru },
	},
	lng: browserLang,
	fallbackLng: 'ru',
	interpolation: {
		escapeValue: false,
	},
})

export default i18n
