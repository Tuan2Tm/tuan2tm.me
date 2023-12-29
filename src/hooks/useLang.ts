"use client";

/* eslint-disable react-hooks/rules-of-hooks */
import { DEFAULT_LANG, KEY_LANG } from "@/constants/i18n";
import { load, save } from "@/utils/storage";
import i18next from "i18next";
import { useState } from "react";

const useLang = () => {
  const langLocal = load(KEY_LANG);

  !langLocal && save(KEY_LANG, DEFAULT_LANG);

  const language = langLocal || DEFAULT_LANG;

  const [lang, setLang] = useState(language);

  const onChangeLang = (code: string): void => {
    i18next.changeLanguage(code);
    save(KEY_LANG, code);
    setLang(code);
  };

  return { lang, language, onChangeLang };
};

export default useLang;
