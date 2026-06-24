import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { formatDate } from "@/lib/utils";
import { Container } from "@/components/ui";
import { TableOfContents, ShareButtons, PostCard } from "@/components/blog";
import { ArrowLeft } from "lucide-react";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function extractHeadings(content: string) {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings: Array<{ text: string; id: string; level: number }> = [];
  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    const id = slugify(text);
    headings.push({ text, id, level });
  }
  return headings;
}

// Custom MDX components that add IDs to headings
const mdxComponents = {
  h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
    const text = typeof children === "string" ? children : String(children);
    const id = slugify(text);
    return (
      <h2 id={id} {...props}>
        {children}
      </h2>
    );
  },
  h3: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
    const text = typeof children === "string" ? children : String(children);
    const id = slugify(text);
    return (
      <h3 id={id} {...props}>
        {children}
      </h3>
    );
  },
};

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { meta } = getPostBySlug(slug);
    return {
      title: meta.title,
      description: meta.metaDescription,
      keywords: meta.keywords,
      openGraph: {
        title: meta.title,
        description: meta.metaDescription,
        type: "article",
        publishedTime: meta.date,
      },
    };
  } catch {
    return { title: "Post Not Found" };
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  const { meta, content } = post;
  const headings = extractHeadings(content);

  // Get related posts (same category, excluding current)
  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter((p) => p.category === meta.category && p.slug !== meta.slug)
    .slice(0, 3);

  // Determine CTA based on category
  const isCareerOrCulture =
    meta.category === "Career Tips" || meta.category === "Company Culture";

  // Article JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.title,
    description: meta.metaDescription,
    datePublished: meta.date,
    author: {
      "@type": "Organization",
      name: "Outsourcing 4 You",
    },
    publisher: {
      "@type": "Organization",
      name: "Outsourcing 4 You",
    },
    keywords: meta.keywords.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="py-16 md:py-24 bg-accent dark:bg-ink min-h-screen">
        <Container>
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-white/50 hover:text-primary dark:hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>

          {/* Header */}
          <header className="max-w-3xl mb-10">
            <span className="inline-block bg-primary/10 text-primary dark:text-primary-300 text-xs rounded-full px-3 py-1 font-medium">
              {meta.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-4 text-gray-900 dark:text-white">
              {meta.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-gray-400 dark:text-white/40">
              <span>{formatDate(meta.date)}</span>
              <span aria-hidden="true">&middot;</span>
              <span>{meta.readTime}</span>
            </div>
            <div className="mt-4">
              <ShareButtons title={meta.title} slug={meta.slug} />
            </div>
          </header>

          {/* Content + ToC */}
          <div className="flex gap-12">
            {/* Article */}
            <article className="max-w-prose min-w-0 flex-1 prose prose-lg dark:prose-invert prose-purple prose-headings:font-heading prose-headings:font-bold prose-p:font-body prose-a:text-primary dark:prose-a:text-primary-300 hover:prose-a:text-primary-dark">
              <MDXRemote source={content} components={mdxComponents} />
            </article>

            {/* Table of Contents - desktop only */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <TableOfContents headings={headings} />
            </aside>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-white dark:bg-white/[0.04] border border-gray-100 dark:border-white/8 rounded-2xl p-8 md:p-12 text-center shadow-soft dark:shadow-none">
            {isCareerOrCulture ? (
              <>
                <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white">
                  Ready to Join Our Team?
                </h3>
                <p className="text-gray-600 dark:text-white/60 mt-2 font-body max-w-lg mx-auto">
                  Explore exciting career opportunities at Outsourcing 4 You and
                  take the next step in your professional journey.
                </p>
                <Link
                  href="/careers"
                  className="inline-block mt-6 bg-primary text-white rounded-full px-8 py-3 font-medium hover:bg-primary-dark transition-colors"
                >
                  View Open Positions
                </Link>
              </>
            ) : (
              <>
                <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white">
                  Ready to Scale Your Business?
                </h3>
                <p className="text-gray-600 dark:text-white/60 mt-2 font-body max-w-lg mx-auto">
                  Let us show you how Outsourcing 4 You can help you deliver
                  exceptional customer experiences while reducing costs.
                </p>
                <Link
                  href="/contact"
                  className="inline-block mt-6 bg-primary text-white rounded-full px-8 py-3 font-medium hover:bg-primary-dark transition-colors"
                >
                  Contact Us
                </Link>
              </>
            )}
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-8">
                Related Posts
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <PostCard key={relatedPost.slug} post={relatedPost} />
                ))}
              </div>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
