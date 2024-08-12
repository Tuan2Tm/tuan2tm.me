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
      contact: "system.CVHeaderTitle.contact",
      additionalInformation: "system.CVHeaderTitle.additionalInformation",
    },
    CVWorkDetails: {
      project: "system.CVWorkDetails.project",
      description: "system.CVWorkDetails.description",
      technologies: "system.CVWorkDetails.technologies",
      responsibilities: "system.CVWorkDetails.responsibilities",
    },
    personalInfo: {
      email: "system.personalInfo.email",
      name: "system.personalInfo.name",
      phone: "system.personalInfo.phone",
      linkedin: "system.personalInfo.linkedin",
    },
    lastUpdate: "system.lastUpdate",
    footer: {
      intro: "system.intro",
      view: "system.view",
    },
  },
  cv: {
    personalInfo: {
      email: "cv.personalInfo.email",
      name: "cv.personalInfo.fullname",
      phone: "cv.personalInfo.phone",
      linkedin: "cv.personalInfo.linkedin",
    },
    summary: "cv.summary",
    skills: "cv.skills",
    contact: "cv.contact",
    workExperience: "cv.workExperience",
    education: {
      university: {
        name: "cv.education.university.name",
        address: "cv.education.university.address",
      },
      information: {
        degree: "cv.education.information.degree",
        period: "cv.education.information.period",
      },
    },
    additionalInformation: "cv.additionalInformation",
  },
  app: {
    name: "app.name",
    info: {
      hi: "app.info.hi",
    },
  },
  settings: {
    languages: {
      title: "settings.languages.title",
      vi: "settings.languages.vi",
      en: "settings.languages.en",
    },
  },
};

export const getProjectKeys = (
  index: keyof typeof viLang.cv.workExperience
) => {
  return Object.keys(viLang.cv.workExperience[index].project);
};

export const getProjectResKeys = (
  index: keyof typeof viLang.cv.workExperience,
  indexPro: keyof (typeof viLang.cv.workExperience)[typeof index]["project"]
) => {
  const project = viLang.cv.workExperience[index].project[indexPro];
  return Object.keys(project.responsibilities);
};

export const getWorkKeys = (): Array<keyof typeof viLang.cv.workExperience> =>
  Object.keys(viLang.cv.workExperience) as Array<
    keyof typeof viLang.cv.workExperience
  >;

export const getAdditionalInfoKeys = () =>
  Object.keys(viLang.cv.additionalInformation);
export const getSkillKeys = () => Object.keys(viLang.cv.skills);
export const getPersonalSummaryKeys = () => Object.keys(viLang.cv.summary);
