"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { BlogPostMeta } from "@/lib/types";
import { formatDate } from "@/lib/utils";

interface FeaturedPostProps {
  post: BlogPostMeta;
}

export default function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <motion.div
        className="group relative rounded-2xl border border-gray-200 dark:border-primary-700/40 bg-white dark:bg-primary-900 overflow-hidden hover:border-primary-300 dark:hover:border-primary-400/30 hover:shadow-elevated dark:hover:shadow-none transition-all duration-300 cursor-pointer"
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Top accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-gold-500" />

        <div className="grid md:grid-cols-[1fr_1.2fr] gap-0">
          {/* Image */}
          <div className="h-56 md:h-full min-h-[220px] bg-gradient-to-br from-primary-800 to-ink relative overflow-hidden">
            <Image
              src={post.image || "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80"}
              alt={post.title}
              fill
              className="object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
            <span className="absolute top-4 left-4 font-heading text-xs font-semibold text-white/90 bg-primary-500/60 border border-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
              {post.category}
            </span>
          </div>

          {/* Content */}
          <div className="p-8 md:p-10 flex flex-col justify-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-ink dark:text-white leading-tight mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors duration-200">
              {post.title}
            </h2>
            <p className="font-body text-gray-600 dark:text-white/50 text-base leading-relaxed line-clamp-3 mb-6">
              {post.excerpt}
            </p>
            <div className="flex items-center gap-4 text-xs text-gray-400 mb-6">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>
            <span className="inline-flex items-center gap-2 font-heading text-sm font-semibold text-primary-500 group-hover:text-primary-400 transition-colors duration-200">
              Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
