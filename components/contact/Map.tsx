"use client";

import { useState } from "react";

export default function Map() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full h-[450px] rounded-2xl overflow-hidden border border-gray-200 dark:border-primary-700/40">
      {isLoading && (
        <div className="absolute inset-0 bg-gray-100 dark:bg-primary-900 flex items-center justify-center rounded-2xl">
          <p className="font-body text-gray-500 dark:text-white/50">Loading map...</p>
        </div>
      )}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.2700693535635!2d31.274416300000002!3d29.9716676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145839c6d0f4a87f%3A0x3e5108b3213476c5!2sOutsourcing%204%20You!5e0!3m2!1sen!2seg!4v1782216140964!5m2!1sen!2seg"
        width="600"
        height="450"
        className="w-full h-[450px] border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="O4U office location"
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
}
