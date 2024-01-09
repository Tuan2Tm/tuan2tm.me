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

      <div className="mt-3">
        <p>
          <span className="font-semibold mr-2">{props.project}:</span>
          {props.projectName}
        </p>
        <ul className="list-disc ml-8">
          <li className="mt-1">
            <p>
              <span className="font-semibold mr-2">
                {t(`${multiKeys.system.CVWorkDetails.description}`)}:
              </span>
              {props.projectDescription}
            </p>
          </li>
          <li>
            <p>
              <span className="font-semibold mr-2">
                {t(`${multiKeys.system.CVWorkDetails.technologies}`)}: 
              </span>
              {props.projectTechnologies}
            </p>
          </li>
          <li>
            <p>{t(`${multiKeys.system.CVWorkDetails.responsibilities}`)}:</p>
            <ul className="list-[circle] ml-8">
              {props.projectResponsibilities?.map((item, idx) => (
                <li key={idx}>
                  {item}
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CVWorkInfo;
