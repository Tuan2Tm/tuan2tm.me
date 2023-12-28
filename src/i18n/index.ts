import enLang from "./translations/en.json";
import  viLang from "./translations/vi.json";

export const getSkillKeys = () => Object.keys(viLang.cv.skills);
export { viLang, enLang };
