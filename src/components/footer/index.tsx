"use client";

import { useTranslation } from "react-i18next";
import Container from "../container";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <div className="h-12 mt-10 flex justify-center flex-wrap items-center  w-full border-t text-sm">
        <p className="text-center mr-2">{t("system.footer.intro")}</p>
      </div>
    </Container>
  );
};

export default Footer;
