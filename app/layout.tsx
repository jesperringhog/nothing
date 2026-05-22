import type { Metadata } from "next";
import "./globals.css";

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
      <body className="min-h-full flex flex-col">
          <main className="w-full pt-5 flex gap-5">
            {children}
          </main>
      </body>
    </html>
  );
}
