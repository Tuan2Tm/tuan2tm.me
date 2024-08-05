"use client";

import { useState } from "react";
import { CVSkillDetail, CVTitle, CVWorkInfo } from "@/components";
import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import {
  getAdditionalInfoKeys,
  getPersonalSummaryKeys,
  getRespTransalteByIndex,
  getSkillKeys,
  getWorkKeys,
  multiKeys,
} from "@/i18n";
import { useTranslation } from "react-i18next";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function Home() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    // <div className="mx-auto lg:w-1/3 md:w-2/3 container xl:w-1/3 rounded-md ">
    //   <CVTitle
    //     className="pb-2"
    //     title={t(multiKeys.system.CVHeaderTitle.summary)}
    //   />
    //   <div>
    //     {getPersonalSummaryKeys().map((item, idx) => (
    //       <p key={idx}>{t(`${multiKeys.cv.summary}.${item}`)}</p>
    //     ))}
    //   </div>
    //   <CVTitle
    //     className="py-2"
    //     title={t(multiKeys.system.CVHeaderTitle.skills)}
    //   />
    //   <ul className="list-disc pl-6">
    //     {getSkillKeys().map((item, idx) => (
    //       <li key={idx}>
    //         <CVSkillDetail
    //           skillTitle={t(`${multiKeys.cv.skills}.${item}.title`)}
    //           skillDetail={t(`${multiKeys.cv.skills}.${item}.details`)}
    //         />
    //       </li>
    //     ))}
    //   </ul>
    //   <CVTitle
    //     className="py-2"
    //     title={t(multiKeys.system.CVHeaderTitle.experience)}
    //   />
    //   {getWorkKeys().map((item, idx) => (
    //     <CVWorkInfo
    //       key={idx}
    //       companyLink={t(`${multiKeys.cv.workExperience}.${item}.company.link`)}
    //       companyAddress={t(
    //         `${multiKeys.cv.workExperience}.${item}.company.address`
    //       )}
    //       companyName={t(`${multiKeys.cv.workExperience}.${item}.company.name`)}
    //       workPeriod={t(`${multiKeys.cv.workExperience}.${item}.job.period`)}
    //       workPosition={t(
    //         `${multiKeys.cv.workExperience}.${item}.job.position`
    //       )}
    //       project={t(`${multiKeys.system.CVWorkDetails.project}`)}
    //       projectName={t(
    //         `${multiKeys.cv.workExperience}.${item}.project.title`
    //       )}
    //       projectDescription={t(
    //         `${multiKeys.cv.workExperience}.${item}.project.description`
    //       )}
    //       projectTechnologies={t(
    //         `${multiKeys.cv.workExperience}.${item}.project.technologies`
    //       )}
    //       projectResponsibilities={getRespTransalteByIndex(`${item}`, t)}
    //     />
    //   ))}

    //   <CVTitle
    //     className="py-2"
    //     title={t(multiKeys.system.CVHeaderTitle.education)}
    //   />
    //   <CVWorkInfo
    //     companyAddress={t(`${multiKeys.cv.education.university.address}`)}
    //     companyName={t(`${multiKeys.cv.education.university.name}`)}
    //     workPeriod={t(`${multiKeys.cv.education.information.period}`)}
    //     workPosition={t(`${multiKeys.cv.education.information.degree}`)}
    //   />

    //   <CVTitle
    //     className="py-2"
    //     title={t(multiKeys.system.CVHeaderTitle.additionalInformation)}
    //   />
    //   {getAdditionalInfoKeys().map((item, idx) => (
    //     <p key={idx}>{t(`${multiKeys.cv.additionalInformation}.${item}`)}</p>
    //   ))}
    //   <div className="flex justify-end mt-4">
    //     <p className="text-sm">{t("system.lastUpdate")}</p>
    //   </div>
    // </div>
    <Container className="justify-between items-center">
      <div className="flex flex-col w-full gap-2">
        <h1>{`Hi. It's TuanTm`}</h1>
        <p className="text-animation">
          Im am{" "}
          <span className="before:content-[''] before:animate-words before:text-sky-500"></span>
        </p>
        {getPersonalSummaryKeys().map((item, idx) => (
          <p key={idx} className="des w-2/3">
            {t(`${multiKeys.cv.summary}.${item}`)}
          </p>
        ))}
        <div className="flex gap-x-3">
          <Button
            variant="outline"
            className="relative p-5 rounded-lg shadow-md overflow-hidden transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-r
          before:from-purple-500 before:to-blue-500 before:transition-transform before:duration-700 before:transform before:origin-center before:-translate-x-full hover:before:translate-x-0"
          >
            <span className="relative">Contact</span>
          </Button>
          <Popover>
            <PopoverTrigger>
              <Button
                variant="outline"
                className="relative p-5 rounded-lg shadow-md overflow-hidden transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-r
              before:from-purple-500 before:to-blue-500 before:transition-transform before:duration-700 before:transform before:origin-center before:scale-x-0 hover:before:scale-x-100"
              >
                <span className="relative">
                  Education
                  <PopoverContent className="w-[400px]">
                    <CVWorkInfo
                      companyAddress={t(
                        `${multiKeys.cv.education.university.address}`
                      )}
                      companyName={t(
                        `${multiKeys.cv.education.university.name}`
                      )}
                      workPeriod={t(
                        `${multiKeys.cv.education.information.period}`
                      )}
                      workPosition={t(
                        `${multiKeys.cv.education.information.degree}`
                      )}
                    />
                  </PopoverContent>
                </span>
              </Button>
            </PopoverTrigger>
          </Popover>
        </div>
      </div>
      <div className="size-[800px] bg-red-400">img</div>
    </Container>
  );
}
