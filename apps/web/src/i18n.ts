import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from '../public/locales/en/common.json'
import pt from '../public/locales/pt/common.json'
i18next.use(initReactI18next).init({
  lng: 'pt-BR',
  fallbackLng: 'pt-BR',
  resources: {
    en: {
      translation: en,
    },
    'pt-BR': {
      translation: pt,
    },
  },
  debug: process.env.NODE_ENV === 'development',
})
export default i18next
