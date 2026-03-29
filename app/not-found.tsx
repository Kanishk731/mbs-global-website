import { FileQuestion, Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center bg-zinc-50 dark:bg-black/95">
      <div className="max-w-xl w-full rounded-3xl border border-zinc-200/50 bg-white/70 p-12 shadow-2xl shadow-indigo-500/10 backdrop-blur-xl dark:border-zinc-800/80 dark:bg-zinc-900/50">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100/80 shadow-inner dark:bg-blue-900/20">
          <FileQuestion
            className="h-10 w-10 text-blue-600 dark:text-blue-500"
            strokeWidth={1.5}
          />
        </div>

        <h2 className="mt-8 text-3xl font-zalando font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Page Not Found
        </h2>

        <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
          We couldn't locate the page you're looking for. It might have been
          moved, deleted, or perhaps the URL is incorrect.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-zinc-900/20 hover:bg-zinc-800 hover:scale-105 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-600 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 transition-all duration-300"
          >
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
