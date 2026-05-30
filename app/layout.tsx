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
      <body className="size-full flex flex-col">
          <main className="max-w-full h-full p-2 flex flex-col">
            {children}
          </main>
      </body>
    </html>
  );
}
