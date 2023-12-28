/* eslint-disable react-hooks/rules-of-hooks */
import i18next from "i18next";
import { DEFAULT_LANG } from "@/constants/i18n";
import I18NextHttpBackend from "i18next-http-backend";
import { initReactI18next, useTranslation } from "react-i18next";
import { enLang, viLang } from "@/i18n";

const resources = Object.freeze({
  vi: {translation: viLang},
  en: {translation: enLang},
});


const useLang = () => {

  i18next
    .use(I18NextHttpBackend)
    .use(initReactI18next)
    .init({
      resources,
      lng: DEFAULT_LANG,
      fallbackLng: "en",
      debug: false,
      react: {
        useSuspense: false,
      },
      interpolation: {
        escapeValue: false,
        formatSeparator: ",",
      },
    })
    .then(() => {
      console.log("initialI18Next success!");
    })
    .catch((e) => {
      console.log("initialI18Next error", e);
    });

  const onChangeLang = (code: string): void => {
    console.log(code);
    
    i18next.changeLanguage(code);
  };

  return {  i18next, onChangeLang };
};

export default useLang;
