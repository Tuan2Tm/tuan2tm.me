'use client'
import { appKeys } from "@/i18n/keys/app.key";
import { useTranslation } from "react-i18next";

export default function Home() {
  const {t} = useTranslation();
  
  return (
    <div className="container">
      <p className="">{t(appKeys.name)}</p>
    </div>
  );
}
