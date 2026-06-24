"use client";

import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onFilterChange: (category: string) => void;
}

export default function CategoryFilter({
  categories,
  activeCategory,
  onFilterChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onFilterChange(category)}
          className={cn(
            "rounded-full px-4 py-2 font-heading text-xs font-semibold transition-all duration-200 cursor-pointer",
            activeCategory === category
              ? "bg-primary-500 text-white shadow-soft"
              : "border border-gray-200 dark:border-primary-700/40 bg-white dark:bg-primary-900 text-gray-600 dark:text-white/60 hover:border-primary-300 dark:hover:border-primary-400/30 hover:text-primary-600 dark:hover:text-white"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
