"use client";
import { CVSkillDetail, CVTitle, CVWorkInfo } from "@/components";
import {
  getAdditionalInfoKeys,
  getPersonalSummaryKeys,
  getRespTransalteByIndex,
  getSkillKeys,
  getWorkKeys,
  multiKeys,
} from "@/i18n";
import { Each } from "@/utils/Each";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  const arr = [1,2,3,4]
  return (
    <div className="mx-auto lg:w-1/3 md:w-2/3 container xl:w-1/3 rounded-md ">
      <Each<number> of={arr} render={(item: number) => (
        <p>{item}</p>
      )}/>
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
      <CVTitle
        className="py-2"
        title={t(multiKeys.system.CVHeaderTitle.experience)}
      />
      {getWorkKeys().map((item, idx) => (
        <CVWorkInfo
          key={idx}
          companyLink={t(`${multiKeys.cv.workExperience}.${item}.company.link`)}
          companyAddress={t(
            `${multiKeys.cv.workExperience}.${item}.company.address`
          )}
          companyName={t(`${multiKeys.cv.workExperience}.${item}.company.name`)}
          workPeriod={t(`${multiKeys.cv.workExperience}.${item}.job.period`)}
          workPosition={t(
            `${multiKeys.cv.workExperience}.${item}.job.position`
          )}
          project={t(`${multiKeys.system.CVWorkDetails.project}`)}
          projectName={t(
            `${multiKeys.cv.workExperience}.${item}.project.title`
          )}
          projectDescription={t(
            `${multiKeys.cv.workExperience}.${item}.project.description`
          )}
          projectTechnologies={t(
            `${multiKeys.cv.workExperience}.${item}.project.technologies`
          )}
          projectResponsibilities={getRespTransalteByIndex(`${item}`, t)}
        />
      ))}

      <CVTitle
        className="py-2"
        title={t(multiKeys.system.CVHeaderTitle.education)}
      />
       <CVWorkInfo
         companyAddress={t(
           `${multiKeys.cv.education.university.address}`
         )}
         companyName={t(`${multiKeys.cv.education.university.name}`)}
         workPeriod={t(`${multiKeys.cv.education.information.period}`)}
         workPosition={t(
           `${multiKeys.cv.education.information.degree}`
         )}
       />

      <CVTitle
        className="py-2"
        title={t(multiKeys.system.CVHeaderTitle.additionalInformation)}
      />
      {getAdditionalInfoKeys().map((item, idx) => (
        <p key={idx}>{t(`${multiKeys.cv.additionalInformation}.${item}`)}</p>
      ))}
      <div className="flex justify-end mt-4">
        <p className="text-sm">{t("system.lastUpdate")}</p>
      </div>
    </div>
  );
}
