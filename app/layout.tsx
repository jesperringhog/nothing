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
        <div className="flex flex-col flex-1 items-center justify-center">
          <main className="flex flex-1 w-full flex-col items-center">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
