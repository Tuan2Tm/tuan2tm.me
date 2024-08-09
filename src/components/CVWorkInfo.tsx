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
  projectResponsibilities?: Array<string>;
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
      <div className="flex justify-between w-full my-1 text-dark-500 dark:text-gray-200">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:mt-5">
          <Dialog>
            <DialogTrigger>
              <Card className="hover:cursor-pointer">
                <div className="flex flex-col rounded-lg justify-between p-6 md:p-8 gap-14">
                  <div className="flex justify-between items-center ">
                    <Link href={"https://phenikaa-x.com/"} target="_blank">
                      <h2>Phenikaa-X Website</h2>
                    </Link>
                    <p>10/2020 – 04/2023</p>
                  </div>
                  <p className="text-left text-ellipsis line-clamp-2">
                    Deploying monitoring and advertising applications for the
                    company, controlling and providing web services for
                    autonomous vehicles and unmanned aerial vehicles.
                  </p>
                </div>
              </Card>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <div>
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
                            {t(`${multiKeys.system.CVWorkDetails.description}`)}
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
                      <li>
                        <p>
                          {t(
                            `${multiKeys.system.CVWorkDetails.responsibilities}`
                          )}
                          :
                        </p>
                        <ul className="list-[circle] ml-8">
                          {props.projectResponsibilities?.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </li>
                    </ul>
                  </DialogDescription>
                </div>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          <div className="flex bg-purple-300">2</div>
          <div className="flex bg-pink-400">3</div>
        </div>
      )}
    </div>
  );
};

export default CVWorkInfo;
