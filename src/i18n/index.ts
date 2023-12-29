import i18next from "i18next";
import enLang from "./translations/en.json";
import viLang from "./translations/vi.json";
import { initReactI18next } from "react-i18next";

const initI18 = (lang: string) => {
  const resources = Object.freeze({
    vi: { translation: viLang },
    en: { translation: enLang },
  });

  i18next
    .use(initReactI18next)
    .init({
      resources,
      lng: lang,
      fallbackLng: lang,
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
};

export { viLang, enLang, initI18 };

export const multiKeys = {
  system: {
    CVHeaderTitle: {
      summary: "system.CVHeaderTitle.summary",
      skills: "system.CVHeaderTitle.skills",
      experience: "system.CVHeaderTitle.experience",
      education: "system.CVHeaderTitle.education",
      additionalInformation: "system.CVHeaderTitle.additionalInformation",
    },
    CVWorkDetails: {
      project: "system.CVWorkDetails.project",
      description: "system.CVWorkDetails.description",
      technologies: "system.CVWorkDetails.technologies",
      responsibilities: "system.CVWorkDetails.responsibilities",
    },
    lastUpdate: "system.lastUpdate",
    footer: {
      intro: "system.intro",
      view: "system.view",
    },
  },
  cv: {
    persionalInfo: {},
    summary: "cv.summary",
    skills: "cv.skills",
  },
};

export const getSkillKeys = () => Object.keys(viLang.cv.skills);
export const getPersonalSummaryKeys = () => Object.keys(viLang.cv.summary);
