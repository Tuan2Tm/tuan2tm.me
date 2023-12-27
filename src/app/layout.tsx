import type { Metadata } from "next";
import "./globals.css";
import { Header, ThemeProvider } from "@/components";

export const metadata: Metadata = {
  title: "Tuan2tm ",
  description: "CV tuantm",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
