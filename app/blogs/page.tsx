import BlogHero from "@/components/sections/BlogHero";
import BlogCard from "@/components/ui/BlogCard";
import { BLOGS } from "@/lib/blog-data";

export default function BlogsPage() {
  const featuredBlog = BLOGS[0];
  const otherBlogs = BLOGS.slice(1);

  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mx-auto mt-32 px-6 pb-24 max-w-7xl">
        <header className="my-8">
          <h1 className="text-4xl font-zalando font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-6xl">
            Blogs
          </h1>
        </header>

        <div className="space-y-24">
          <BlogHero blog={featuredBlog} />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {otherBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
