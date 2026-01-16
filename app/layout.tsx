import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { DatasetProvider } from "@/context/DatasetContext";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/Header";
import { Toaster } from "sonner";
import { AppToaster } from "@/components/AppToaster";
import { ConfigProvider } from "@/context/ConfigContext";
import Footer from "@/components/layout/Footer";

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
              <main className="bg-green-animated">{children}</main>
              <Footer/>
            </DatasetProvider>
          </ConfigProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
