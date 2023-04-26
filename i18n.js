import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import nlTranslations from "./public/locales/nl.json";
import plTranslations from "./public/locales/pl.json";

i18n.use(initReactI18next).init({
	lng: "nl", // set the default language
	fallbackLng: "nl", // if translation for current language is not available, fallback to this language
	resources: {
		nl: {
			translation: nlTranslations, // import the nl translations
		},
		pl: {
			translation: plTranslations, // import the pl translations
		},
	},
});

export default i18n;
