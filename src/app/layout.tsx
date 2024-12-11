import { draftMode } from "next/headers";
import { Inter } from "next/font/google";

import "@/app/globals.css";

import { PreviewNotice } from "@/components/Globals/PreviewNotice/PreviewNotice";
import Header from "@/components/Layouts/header";
import Home from "@/components/Layouts/home";

const inter = Inter({ subsets: ["latin"] });
export const revalidate = 3600;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isEnabled } = draftMode() as any;

  return (
    <html lang="en">
      <body className={inter.className}>
        {isEnabled && <PreviewNotice />}
        {children}
      </body>
    </html>
  );
}
