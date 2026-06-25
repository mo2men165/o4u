import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import { BlogContent } from "@/components/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Explore insights, career tips, and industry trends from the O4U team.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return <BlogContent posts={posts} />;
}
