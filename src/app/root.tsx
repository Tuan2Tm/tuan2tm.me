"use client";

import "./globals.css";
import { Header, ThemeProvider } from "@/components";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <I18nextProvider i18n={i18next}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Header />
        {children}
      </ThemeProvider>
    </I18nextProvider>
  );
}
