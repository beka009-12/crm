import type { Metadata } from "next";
import "./globals.css";
import LayoutClient from "./layout.c";

export const metadata: Metadata = {
  title: "СRM medical",
  description: "CRM система для медицинских центров",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true">
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
