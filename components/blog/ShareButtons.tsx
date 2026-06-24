"use client";

import { useState } from "react";
import { Link2 } from "lucide-react";
import { LinkedinIcon, FacebookIcon, XIcon } from "@/components/ui/BrandIcons";

interface ShareButtonsProps {
  title: string;
  slug: string;
}

export default function ShareButtons({ title, slug }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const url =
    typeof window !== "undefined"
      ? window.location.href
      : `https://outsourcing-4-you.com/blog/${slug}`;

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = url;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const iconClass =
    "text-gray-500 dark:text-white/50 hover:text-primary dark:hover:text-white transition-colors duration-200";

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-gray-500 dark:text-white/50 font-medium">Share:</span>
      <a
        href={shareLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        className={iconClass}
      >
        <LinkedinIcon className="w-5 h-5" />
      </a>
      <a
        href={shareLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Facebook"
        className={iconClass}
      >
        <FacebookIcon className="w-5 h-5" />
      </a>
      <a
        href={shareLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on X"
        className={iconClass}
      >
        <XIcon className="w-5 h-5" />
      </a>
      <button
        onClick={handleCopy}
        aria-label="Copy link"
        className={iconClass}
      >
        <Link2 size={20} />
      </button>
      {copied && (
        <span className="text-xs text-primary font-medium">Copied!</span>
      )}
    </div>
  );
}
