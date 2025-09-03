import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BookingProvider from "@/context/bookingcontext";
import BookingModal from "@/components/bookingmodal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Launch Pad",
  description: "Houston's Premier Car Care & Food Hub",
  icons: {
    icon: [{ url: "/thelaunchpad.png", sizes: "32x32", type: "image/png" }],
    shortcut: "/favicon.ico",
    apple: "/launch-pad-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <BookingProvider>
          {children}
          <BookingModal />
        </BookingProvider>
      </body>
    </html>
  );
}
