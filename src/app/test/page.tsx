"use client";

import Link from "next/link";
import React, { useReducer, useState } from "react";

type Task = {
  name?: string;
  isCompleted?: boolean;
  subTask?: Array<string>;
};

const TestPage = () => {
  const [state, setState] = useState("demo");
  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState([]);

  const [task1, setTask1] = useState({
    name: "demo",
    phone: "09782362387",
    isCompleted: false,
    subTask: [],
  });

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask1((prevState) => ({ ...prevState, name: e.target.value }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name);
    setTask1((prevState) => ({ ...prevState, [name]: value }));
  };

  const [task, updateTask] = useReducer(
    (per: Task, next: Task) => ({ ...per, ...next }),
    {
      name: "demo",
      isCompleted: false,
      subTask: [],
    }
  );

  return (
    <div>
      {/* <input
        type="text"
        onChange={handleChange}
        name="name"
        value={task1.name}
      />
      <input
        name="phone"
        className="mt-5"
        type="text"
        onChange={handleChange}
        value={task1.phone}
      />
      <p>{task1.name}</p>
      <p>{task1.phone}</p> */}
      <p>{task.name}</p>
      <p>{task.isCompleted ? "Completed" : "Not Completed"}</p>
      <p
        onClick={() =>
          updateTask({
            name: "test",
          })
        }
      >
        update task
      </p>
      {/* <button
        onClick={() => {
          updateTask({ isCompleted: !task.isCompleted });
        }}
        className="relative p-5 bg-red-600 border border-blue-600 rounded-lg shadow-md overflow-hidden transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-500 before:to-blue-700 before:transition-transform before:duration-300 before:transform before:-translate-x-full hover:before:translate-x-0 before:scale-x-0 hover:before:scale-x-100"
      >
        <span className="relative z-10">set Completed</span>
      </button> */}
      <button
        onClick={() => {
          updateTask({ isCompleted: !task.isCompleted });
        }}
        className="relative p-5 border border-blue-600 rounded-lg shadow-md 
        overflow-hidden transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-r
         before:from-red-500 before:to-blue-400 before:transition-transform before:duration-700 
         before:transform before:origin-center before:-translate-x-full hover:before:translate-x-0"
      >
        <span className="relative z-10">set Completed</span>
      </button>
      <Link href={"/"} className="btn-gradient-purple-pink py-3">
        Lien he
      </Link>
      <p className="text-animation">
        Im am{" "}
        <span className="before:content-[''] before:animate-words before:text-sky-500"></span>
      </p>
      <p className="animate-fadeInOut">Tuan2Tm</p>
    </div>
  );
};

export default TestPage;
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
//       projectResponsibilities={getRespTranslateByIndex(`${item}`, t)}
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