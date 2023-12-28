import i18next from "i18next";
import { DEFAULT_LANG, KEY_LANG } from "@/constants/i18n";
import { initReactI18next } from "react-i18next";
import { enLang, viLang } from "@/i18n";
import { save } from "@/utils/storage";

const resources = Object.freeze({
  vi: { translation: viLang },
  en: { translation: enLang },
});

const useLang = (langLocal?: string) => {
  const initI18n = (lang?: string) => {
    i18next
      .use(initReactI18next)
      .init({
        resources,
        lng: lang || DEFAULT_LANG,
        fallbackLng: DEFAULT_LANG,
        debug: false,
        react: {
          useSuspense: true,
        },
      })
      .then(() => {
        console.log("initialI18Next success!");
      })
      .catch((e) => {
        console.log("initialI18Next error", e);
      });
  };

  langLocal ?? save(KEY_LANG, DEFAULT_LANG);

  const onChangeLang = (code: string): void => {
    i18next.changeLanguage(code);
    save(KEY_LANG, code);
  };

  return { initI18n, onChangeLang };
};

export default useLang;
