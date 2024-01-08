import "./globals.css";
import Layout from "./root";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="w-full">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
