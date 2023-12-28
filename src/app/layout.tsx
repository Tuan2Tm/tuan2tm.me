/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { Header, ThemeProvider } from "@/components";
import useLang from "@/hooks/useLang";
import Head from "next/head";
import { I18nextProvider } from "react-i18next";
import "./globals.css";
import i18next from "i18next";
import { useEffect } from "react";
import { load } from "@/utils/storage";
import { DEFAULT_LANG, KEY_LANG } from "@/constants/i18n";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const langLocal = load(KEY_LANG);
  // const lang = langLocal || DEFAULT_LANG;
  // const { initI18n } = useLang(lang);

  // useEffect(() => {
  //   initI18n(lang);
  // }, []);

  return (
    <html lang={DEFAULT_LANG} suppressHydrationWarning>
      <Head>
        <title>My page title</title>
      </Head>
      <body>
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
      </body>
    </html>
  );
}
