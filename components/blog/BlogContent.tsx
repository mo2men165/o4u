"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BlogPostMeta } from "@/lib/types";
import { Container } from "@/components/ui";
import FeaturedPost from "./FeaturedPost";
import PostCard from "./PostCard";
import CategoryFilter from "./CategoryFilter";

const CATEGORIES = [
  "All",
  "Industry Insights",
  "Company Culture",
  "Career Tips",
  "Client Success",
];

interface BlogContentProps {
  posts: BlogPostMeta[];
}

export default function BlogContent({ posts }: BlogContentProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const featuredPost = posts.find((p) => p.featured) || posts[0];
  const nonFeaturedPosts = posts.filter((p) => p.slug !== featuredPost?.slug);
  const filteredPosts =
    activeCategory === "All"
      ? nonFeaturedPosts
      : nonFeaturedPosts.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-50 dark:bg-ink">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary-700/25 blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] rounded-full bg-gold-500/8 blur-[80px] animate-pulse [animation-delay:1.5s]" />
        </div>
        <div className="absolute inset-0 bg-grid-pattern [background-size:48px_48px] opacity-[0.06]" />

        <Container className="relative z-10 pt-32 pb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-sm px-4 py-1.5 mb-8"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold-500 animate-pulse" />
            <span className="font-heading text-xs font-semibold uppercase tracking-[0.18em] text-primary-700 dark:text-white/70">
              Insights &amp; Ideas
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading font-bold text-ink dark:text-white leading-tight"
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)" }}
          >
            The O4U <span className="text-gold-400">Blog</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mt-5 font-body text-lg text-ink/60 dark:text-white/60 max-w-xl mx-auto leading-relaxed"
          >
            Industry insights, career stories, and outsourcing intelligence, written by people who live it every day.
          </motion.p>
        </Container>
      </section>

      {/* Content */}
      <section className="bg-accent dark:bg-ink py-20">
        <Container>
          {/* Featured Post */}
          {featuredPost && (
            <div className="mb-14">
              <span className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-primary-500 dark:text-gold-400 block mb-4">
                Featured
              </span>
              <FeaturedPost post={featuredPost} />
            </div>
          )}

          {/* Filter */}
          <div className="mb-10">
            <CategoryFilter
              categories={CATEGORIES}
              activeCategory={activeCategory}
              onFilterChange={setActiveCategory}
            />
          </div>

          {/* Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.09 }}
                >
                  <PostCard post={post} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="font-body text-gray-400 text-base">
                No posts in this category yet. Check back soon.
              </p>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
