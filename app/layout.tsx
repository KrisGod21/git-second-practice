import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vruksh",
  description: "Vruksh brings volunteers and communities together to run outreach programs and drive local impact.",
  openGraph: {
    title: "Vruksh",
    description: "Vruksh brings volunteers and communities together to run outreach programs and drive local impact.",
    siteName: "Vruksh",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vruksh",
    description: "Vruksh brings volunteers and communities together to run outreach programs and drive local impact.",
  },
};

/**
 * Root layout applied to the entire app (public + protected routes).
 * Sets fonts, theme provider, and global toasts.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full min-h-screen`}
      >
       <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster position="top-right" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
