"use client";
import { CVTitle } from "@/components";
import { getPersonalSummaryKeys, multiKeys } from "@/i18n";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="mx-auto px-4 py-1 rounded-md ">
      <CVTitle title={t(multiKeys.system.CVHeaderTitle.summary)} />
      <div>
        {getPersonalSummaryKeys().map((item, idx) => (
          <p key={idx} className="mt-2">
            {t(`${multiKeys.cv.summary}.${item}`)}
          </p>
        ))}
      </div>
    </div>
  );
}
