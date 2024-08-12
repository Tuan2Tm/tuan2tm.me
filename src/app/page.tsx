"use client";

import { CVSkillDetail, CVTitle, CVWorkInfo } from "@/components";
import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import {
  getAdditionalInfoKeys,
  getPersonalSummaryKeys,
  getProjectKeys,
  getSkillKeys,
  getWorkKeys,
  multiKeys,
} from "@/i18n";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";

export default function Home() {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <Container>
      <div className="flex flex-col mt-14 md:mt-0">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col w-full gap-2 md:mr-40">
            <h1>{t(`${multiKeys.app.info.hi}`)}</h1>
            <p className="text-animation">
              <span className="relative before:content-[''] before:animate-words before:text-cyan-400"></span>
            </p>
            {getPersonalSummaryKeys().map((item, idx) => (
              <p key={idx} className="des">
                {t(`${multiKeys.cv.summary}.${item}`)}
              </p>
            ))}
            <div className="flex gap-x-3">
              <Button
                variant="outline"
                onClick={() => router.push("#education")}
                className="relative p-5 rounded-lg shadow-md overflow-hidden transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-r
                before:from-purple-500 before:to-blue-500 before:transition-transform before:duration-700 before:transform before:origin-center before:scale-x-0 hover:before:scale-x-100"
              >
                <span className="relative">
                  {t(multiKeys.system.CVHeaderTitle.education)}
                </span>
              </Button>
            </div>
          </div>
          <div className="w-full h-[280px] mt-3 md:mt-0 md:w-2/3 md:h-[700px] bg-center bg-cover bg-no-repeat bg-[url('/images/me.jpg')]" />
        </div>

        <div className="flex flex-col mt-5 md:mt-10">
          <CVTitle
            className="py-2"
            title={t(multiKeys.system.CVHeaderTitle.skills)}
          />
          <ul className="list-disc pl-6 ">
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

        <div className="flex flex-col mt-5 md:mt-10">
          <CVTitle title={t(multiKeys.system.CVHeaderTitle.experience)} />

          {getWorkKeys().map((item, idx) => (
            <CVWorkInfo
              key={idx}
              companyLink={t(
                `${multiKeys.cv.workExperience}.${item}.company.link`
              )}
              companyAddress={t(
                `${multiKeys.cv.workExperience}.${item}.company.address`
              )}
              companyName={t(
                `${multiKeys.cv.workExperience}.${item}.company.name`
              )}
              workPeriod={t(
                `${multiKeys.cv.workExperience}.${item}.job.period`
              )}
              workPosition={t(
                `${multiKeys.cv.workExperience}.${item}.job.position`
              )}
              project={t(`${multiKeys.system.CVWorkDetails.project}`)}
              projectKeys={getProjectKeys(`${item}`)}
              position={item}
            />
          ))}
        </div>

        <div className="flex flex-col mt-5 md:mt-10" id="education">
          <CVTitle
            className="py-2"
            title={t(multiKeys.system.CVHeaderTitle.education)}
          />
          <CVWorkInfo
            companyAddress={t(`${multiKeys.cv.education.university.address}`)}
            companyName={t(`${multiKeys.cv.education.university.name}`)}
            workPeriod={t(`${multiKeys.cv.education.information.period}`)}
            workPosition={t(`${multiKeys.cv.education.information.degree}`)}
          />
        </div>

        <div className="flex flex-col mt-5 md:mt-10">
          <CVTitle
            className="py-2"
            title={t(multiKeys.system.CVHeaderTitle.additionalInformation)}
          />
          <div className="flex flex-col md:flex-row justify-between">
            {getAdditionalInfoKeys().map((item, idx) => (
              <p key={idx}>
                {t(`${multiKeys.cv.additionalInformation}.${item}`)}
              </p>
            ))}
            <p className="text-sm">{t("system.lastUpdate")}</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
