import { DEFAULT_LANG, KEY_LANG } from "@/constants/i18n";
import i18next from "i18next";
import { useState } from "react";

const useLang = () => {
  const language = DEFAULT_LANG;

  const [lang, setLang] = useState(language);

  const onChangeLang = (code: string): void => {
    i18next.changeLanguage(code);
    setLang(code);
  };

  return { lang, language, onChangeLang };
};

export default useLang;
