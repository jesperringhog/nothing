import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/header/Header";

export const metadata: Metadata = {
  title: "Nothing",
  description: "Created by Jesper Ringhög",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="size-full flex flex-col">
        <Header />
          <main className="max-w-full h-full pl-2 px-2 flex flex-col">
            {children}
          </main>
      </body>
    </html>
  );
}
