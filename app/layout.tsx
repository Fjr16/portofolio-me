import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Cursor } from "@/components/ui/Cursor";
import { LenisScroll } from "@/components/ui/LenisScroll";
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
  title: "Portfolio",
  description: "Minimal portfolio foundation",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[color:var(--bg)] text-[color:var(--fg)]">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <LenisScroll />
          <Cursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
