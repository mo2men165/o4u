import type { Metadata } from "next";
import { Header, Footer, WhatsAppButton, CookieConsent, ThemeProvider } from "@/components/layout";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Outsourcing 4 You",
    default: "Outsourcing 4 You — Egypt's Premier Outsourcing Partner",
  },
  description:
    "Outsourcing 4 You is Egypt's premier outsourcing partner, delivering exceptional customer service, sales, and back-office solutions to businesses worldwide.",
  openGraph: {
    siteName: "Outsourcing 4 You",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning className="font-body antialiased text-gray-900 bg-white dark:bg-ink dark:text-white transition-colors duration-300">
        <ThemeProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <WhatsAppButton />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}
