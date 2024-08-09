"use client";

import { CVSkillDetail, CVTitle, CVWorkInfo } from "@/components";
import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import {
  getAdditionalInfoKeys,
  getPersonalSummaryKeys,
  getRespTranslateByIndex,
  getSkillKeys,
  getWorkKeys,
  multiKeys,
} from "@/i18n";
import { useTranslation } from "react-i18next";
import { Card } from "@/components/ui/card";
import Link from "next/link";
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
                <span className="relative">Education</span>
              </Button>
            </div>
          </div>
          <div className="w-full h-auto md:w-2/3 md:h-[700px] bg-center bg-cover bg-no-repeat bg-[url('/images/me.jpeg')]" />
        </div>

        <div className="flex flex-col md:mt-10">
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

        <div className="flex flex-col md:mt-10" id="education">
          <CVTitle
            className="py-2"
            title={t(multiKeys.system.CVHeaderTitle.experience)}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <Card className="hover:cursor-pointer">
              <div className="flex flex-col rounded-lg justify-between p-6 md:p-8 gap-14">
                <div className="flex justify-between items-center ">
                  <Link href={"https://phenikaa-x.com/"} target="_blank">
                    <h2>Phenikaa-X Website</h2>
                  </Link>
                  <p>10/2020 – 04/2023</p>
                </div>
                <p className="text-ellipsis line-clamp-2">
                  Deploying monitoring and advertising applications for the
                  company, controlling and providing web services for autonomous
                  vehicles and unmanned aerial vehicles.
                </p>
              </div>
            </Card>

            <div className="flex bg-purple-300">2</div>
            <div className="flex bg-pink-400">3</div>
          </div>
        </div>

        <div className="flex flex-col md:mt-10">
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

        <div className="flex flex-col md:mt-10">
          <CVTitle
            className="py-2"
            title={t(multiKeys.system.CVHeaderTitle.additionalInformation)}
          />
          <div className="flex flex-col md:flow-row justify-between">
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
