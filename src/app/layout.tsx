"use client";

import "./globals.css";
import { Header, ThemeProvider } from "@/components";
import useLang from "@/hooks/useLang";
import Head from "next/head";
import { useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import Layout from "./root";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { i18next } = useLang();
  useEffect(() => {
    document.documentElement.lang = i18next.language;
    console.log("call back");
  }, [i18next.language]);

  return (
    <html lang={i18next.language} suppressHydrationWarning>
      <Head>
        <title>My page title</title>
      </Head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
