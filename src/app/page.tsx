"use client";
import { CVSkillDetail, CVTitle } from "@/components";
import { getPersonalSummaryKeys, getSkillKeys, multiKeys } from "@/i18n";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="mx-auto lg:w-1/3 md:w-2/3 container  rounded-md ">
      <CVTitle
        className="pb-2"
        title={t(multiKeys.system.CVHeaderTitle.summary)}
      />
      <div>
        {getPersonalSummaryKeys().map((item, idx) => (
          <p key={idx}>{t(`${multiKeys.cv.summary}.${item}`)}</p>
        ))}
      </div>
      <CVTitle
        className="py-2"
        title={t(multiKeys.system.CVHeaderTitle.skills)}
      />
      <ul className="list-disc pl-6">
        {getSkillKeys().map((item, idx) => (
          <li key={idx}>
            <CVSkillDetail
              skillTitle={t(`${multiKeys.cv.skills}.${item}.title`)}
              skillDetail={t(`${multiKeys.cv.skills}.${item}.details`)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
