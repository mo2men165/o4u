"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button, Container } from "@/components/ui";

function getCookie(name: string): string | null {
  const match = document.cookie.match(
    new RegExp("(^| )" + name + "=([^;]+)")
  );
  return match ? decodeURIComponent(match[2]) : null;
}

function setCookie(name: string, value: string, days: number) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires};path=/;SameSite=Lax`;
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = getCookie("cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleConsent = (value: "accepted" | "declined") => {
    setCookie("cookie-consent", value, 365);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.1)]"
        >
          <Container>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4">
              <p className="text-sm text-gray-600 text-center sm:text-left">
                We use cookies to enhance your browsing experience and analyse
                site traffic.
              </p>
              <div className="flex items-center gap-3 flex-shrink-0">
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => handleConsent("accepted")}
                >
                  Accept
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="border border-gray-300 text-gray-600 hover:bg-gray-50"
                  onClick={() => handleConsent("declined")}
                >
                  Decline
                </Button>
              </div>
            </div>
          </Container>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
