"use client";

import "./globals.css";
import { Header, ThemeProvider } from "@/components";
import useLang from "@/hooks/useLang";
import Head from "next/head";
import { useEffect } from "react";
import { I18nextProvider } from "react-i18next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { i18next } = useLang();
  useEffect(() => {
    document.documentElement.lang = i18next.language;
    console.log('call back');
    
  }, [i18next.language]);

  return (
    <html lang={i18next.language} suppressHydrationWarning>
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
