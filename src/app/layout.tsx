"use client";

import "./globals.css";
import Layout from "./root";
import { DEFAULT_LANG, KEY_LANG } from "@/constants/i18n";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const lang = localStorage.getItem(KEY_LANG);
  return (
    <html lang={lang || DEFAULT_LANG} suppressHydrationWarning>
      <body className="w-full">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
