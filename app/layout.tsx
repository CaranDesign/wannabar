import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import { DatasetProvider } from "@/context/DatasetContext";
import { ConfigProvider } from "@/context/ConfigContext";
import { AppToaster } from "@/components/AppToaster";
import { Header } from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WannaBar? - Simple and Easy file to Chart!",
  description: "Display a simple chart from data file. Keep all your data private on your computer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
          <ConfigProvider>
            <DatasetProvider>
              <Header />
              <AppToaster/>
              <main className="bg-green-animated h-full min-h-screen">{children}</main>
              <Footer/>
            </DatasetProvider>
          </ConfigProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
