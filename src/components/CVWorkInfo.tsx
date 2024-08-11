"use client";

import { multiKeys } from "@/i18n";
import { useTranslation } from "react-i18next";

interface Props {
  workPosition?: string;
  workPeriod?: string;
  companyName?: string;
  companyLink?: string;
  companyAddress?: string;
  project?: string;
  projectName?: string;
  projectDescription?: string;
  projectTechnologies?: string;
  projectKeys?: Array<string>;
  position?: string;
}

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Card } from "./ui/card";
import Link from "next/link";

const CVWorkInfo: React.FC<Props> = (props) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-start w-full">
      <div className="flex justify-between w-full mt-3 text-dark-500 dark:text-gray-200">
        <p className="font-semibold">{props.workPosition}</p>
        <p className="font-semibold">{props.workPeriod}</p>
      </div>
      <div className="flex justify-between w-full">
        {props.companyLink ? (
          <a
            href={props.companyLink}
            className=" dark:text-white italic"
            target={props.companyLink === "#" ? "_self" : "_blank"}
            rel="noopener"
          >
            {props.companyName}
          </a>
        ) : (
          <p className="italic">{props.companyName}</p>
        )}

        <p className="italic">{props.companyAddress}</p>
      </div>

      {props.project && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:mt-5">
          {props.projectKeys &&
            props.projectKeys.map((item, index) => (
              <Dialog key={index}>
                <DialogTrigger>
                  <Card className="flex flex-col items-start hover:cursor-pointer hover:scale-105 rounded-lg p-6 md:p-8">
                    <div className="flex justify-between items-center w-full">
                      <h2 className="text-nowrap">
                        {t(
                          `${multiKeys.cv.workExperience}.${props.position}.project.${item}.title`
                        )}
                      </h2>
                      <p className="text-nowrap">
                        {t(
                          `${multiKeys.cv.workExperience}.${props.position}.project.${item}.time`
                        )}
                      </p>
                    </div>
                    <p className="text-left text-ellipsis line-clamp-3 md:mt-12">
                      {t(
                        `${multiKeys.cv.workExperience}.${props.position}.project.${item}.description`
                      )}
                    </p>
                  </Card>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>
                      <Link href={"https://phenikaa-x.com/"} target="_blank">
                        <span className="font-semibold mr-2">
                          {props.project}:
                        </span>
                        {t(
                          `${multiKeys.cv.workExperience}.${props.position}.project.${item}.title`
                        )}
                      </Link>
                    </DialogTitle>
                    <DialogDescription>
                      <ul className="list-disc ml-4 gap-y-5">
                        <li className="mt-1">
                          <p className="text-ellipsis line-clamp-3 hover:line-clamp-none">
                            <span className="font-semibold mr-2">
                              {t(
                                `${multiKeys.system.CVWorkDetails.description}`
                              )}
                              :
                            </span>
                            {t(
                              `${multiKeys.cv.workExperience}.${props.position}.project.${item}.description`
                            )}
                          </p>
                        </li>
                        <li className="mt-1">
                          <p>
                            <span className="font-semibold mr-2">
                              {t(
                                `${multiKeys.system.CVWorkDetails.technologies}`
                              )}
                              :
                            </span>
                            {t(
                              `${multiKeys.cv.workExperience}.${props.position}.project.${item}.technologies`
                            )}
                            z
                          </p>
                        </li>
                        {/* <li>
                      <p>
                        {t(
                          `${multiKeys.system.CVWorkDetails.responsibilities}`
                        )}
                        :
                      </p>
                      <ul className="list-[circle] ml-8">
                        {props.projectKeys?.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </li> */}
                      </ul>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            ))}
        </div>
      )}
    </div>
  );
};

export default CVWorkInfo;
