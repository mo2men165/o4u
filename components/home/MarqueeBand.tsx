"use client";

export const metrics = [
  "250+ Dedicated Agents",
  "50+ Global Clients",
  "1M+ Calls Handled",
  "10+ Years of Excellence",
  "4 Continents Served",
  "98% Client Retention",
  "24/7 Multilingual Support",
  "2 to 4 Week Team Launch",
];

export default function MarqueeBand() {
  return (
    <div className="bg-primary-100 dark:bg-primary-700 border-y border-primary-200 dark:border-primary-500/30 py-4 overflow-hidden">
      <div className="flex w-max group">
        <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
          {[...metrics, ...metrics].map((m, i) => (
            <span key={i} className="flex items-center gap-3 mx-8 whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0" />
              <span className="font-heading font-semibold text-sm text-primary-800 dark:text-white/85 uppercase tracking-wide">
                {m}
              </span>
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
