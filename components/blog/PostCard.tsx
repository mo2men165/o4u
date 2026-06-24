"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { BlogPostMeta } from "@/lib/types";
import { formatDate } from "@/lib/utils";

interface PostCardProps {
  post: BlogPostMeta;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <motion.div
        className="group relative rounded-2xl border border-gray-200 dark:border-primary-700/40 bg-white dark:bg-primary-900 overflow-hidden hover:border-primary-300 dark:hover:border-primary-400/30 hover:shadow-elevated dark:hover:shadow-none transition-all duration-300 cursor-pointer h-full flex flex-col"
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Image */}
        <div className="h-44 bg-gradient-to-br from-primary-800 to-ink relative overflow-hidden shrink-0">
          <Image
            src={post.image || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80"}
            alt={post.title}
            fill
            className="object-cover opacity-75 group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
          <span className="absolute top-3 left-3 font-heading text-xs font-semibold text-white/90 bg-primary-500/60 border border-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
            {post.category}
          </span>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <h3 className="font-heading font-bold text-lg text-ink dark:text-white mb-2 leading-snug group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors duration-200 line-clamp-2">
            {post.title}
          </h3>
          <p className="font-body text-gray-600 dark:text-white/50 text-sm leading-relaxed line-clamp-2 flex-1 mb-4">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-xs text-gray-400">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {post.readTime}
              </span>
            </div>
            <ArrowRight className="w-4 h-4 text-primary-400 group-hover:translate-x-1 transition-transform duration-200" />
          </div>
        </div>

        {/* Hover accent bottom line */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.div>
    </Link>
  );
}
