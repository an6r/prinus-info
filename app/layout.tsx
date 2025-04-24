// @ts-check

import type { Metadata } from "next";

import "@/styles/main.scss"

import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Personal Site of Maria Prinus",
  description: "Personal Site of Maria Prinus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="wrapper">
          <Header/>
          <main className="main-section">
            {children}
          </main>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
