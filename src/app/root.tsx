"use client";

import useLang from "@/hooks/useLang";
import "./globals.css";
import { Footer, Header, ThemeProvider } from "@/components";
import { initI18 } from "@/i18n";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import NavBar from "@/components/narbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { language } = useLang();
  initI18(language);

  return (
    <I18nextProvider i18n={i18next}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <div className="flex flex-col container items-center md:mb-14">
          <NavBar />
          {/* <Header className="mt-14" /> */}
        </div>
        {children}
        <div className="flex justify-center">
          <Footer />
        </div>
      </ThemeProvider>
    </I18nextProvider>
  );
}
