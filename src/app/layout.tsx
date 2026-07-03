import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import { ScrollTracker } from "@/components/ScrollTracker";
import { Chatbot } from "@/components/Chatbot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nova-speaker.example.com"),
  title: "Nova AI Speaker | The Future of Sound and Intelligence",
  description: "Experience unparalleled audio quality combined with next-generation AI. Nova adapts to your lifestyle, understands your needs, and controls your entire home with just your voice.",
  keywords: ["AI Speaker", "Smart Home", "Voice Assistant", "Nova", "Noise Cancellation"],
  openGraph: {
    title: "Nova AI Speaker | The Future of Sound and Intelligence",
    description: "Experience unparalleled audio quality combined with next-generation AI. Nova adapts to your lifestyle.",
    url: "https://nova-speaker.example.com",
    siteName: "Nova AI",
    images: [
      {
        url: "/nova-speaker.png",
        width: 1200,
        height: 630,
        alt: "Nova AI Speaker",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nova AI Speaker | The Future of Sound and Intelligence",
    description: "Experience unparalleled audio quality combined with next-generation AI.",
    images: ["/nova-speaker.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Chatbot />
          <ScrollTracker />
          <Toaster
            position="bottom-right"
            richColors
            closeButton
            duration={3000}
            theme="light"
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
