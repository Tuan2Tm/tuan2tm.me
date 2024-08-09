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
import { Button } from "./ui/button";

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
                    <p className="text-left text-ellipsis line-clamp-3 md:my-10">
                      {t(
                        `${multiKeys.cv.workExperience}.${props.position}.project.${item}.description`
                      )}
                    </p>
                    <Link href={"https://phenikaa-x.com/"} target="_blank">
                      <Button
                        variant="outline"
                        className="relative p-5 rounded-lg shadow-md overflow-hidden transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-r
                  before:from-purple-500 before:to-blue-500 before:transition-transform before:duration-700 before:transform before:origin-center before:-translate-x-full hover:before:translate-x-0"
                      >
                        <span className="relative">View</span>
                      </Button>
                    </Link>
                  </Card>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>
                      <p>
                        <span className="font-semibold mr-2">
                          {props.project}:
                        </span>
                        {props.projectName}
                      </p>
                    </DialogTitle>
                    <DialogDescription>
                      <ul className="list-disc ml-4">
                        <li className="mt-1">
                          <p>
                            <span className="font-semibold mr-2">
                              {t(
                                `${multiKeys.system.CVWorkDetails.description}`
                              )}
                              :
                            </span>
                            {props.projectDescription}
                          </p>
                        </li>
                        <li>
                          <p>
                            <span className="font-semibold mr-2">
                              {t(
                                `${multiKeys.system.CVWorkDetails.technologies}`
                              )}
                              :
                            </span>
                            {props.projectTechnologies}
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
