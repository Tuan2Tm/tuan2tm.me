"use client";

import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="h-12 mt-10 flex justify-center flex-wrap items-center  w-full border-t text-sm">
      <p className="text-center mr-2">{t("system.footer.intro")}</p>
    </div>
  );
};

export default Footer;
