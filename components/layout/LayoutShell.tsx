"use client";

import { usePathname } from "next/navigation";
import {
  Header,
  Footer,
  WhatsAppButton,
  CookieConsent,
} from "@/components/layout";

export default function LayoutShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  return (
    <>
      {!isAdmin && <Header />}
      <main className="min-h-screen">{children}</main>
      {!isAdmin && <Footer />}
      {!isAdmin && <WhatsAppButton />}
      {!isAdmin && <CookieConsent />}
    </>
  );
}
