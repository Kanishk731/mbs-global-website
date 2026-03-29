"use client";

import { useEffect } from "react";
import { AlertCircle, RefreshCcw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application Error Boundry Caught:", error);
  }, [error]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center bg-zinc-50 dark:bg-black/95">
      <div className="max-w-xl w-full rounded-3xl border border-zinc-200/50 bg-white/70 p-12 shadow-2xl shadow-indigo-500/10 backdrop-blur-xl dark:border-zinc-800/80 dark:bg-zinc-900/50">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100/80 shadow-inner dark:bg-red-900/20">
          <AlertCircle
            className="h-10 w-10 text-red-600 dark:text-red-500"
            strokeWidth={1.5}
          />
        </div>

        <h2 className="mt-8 text-3xl font-zalando font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Service Unavailable
        </h2>

        <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
          {error.message.includes("Strapi") || error.message.includes("fetch")
            ? "We are currently experiencing issues connecting to our content server. Our team has been notified."
            : "An unexpected error occurred while loading this page. " +
              error.message}
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-zinc-900/20 hover:bg-zinc-800 hover:scale-105 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-600 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 transition-all duration-300"
          >
            <RefreshCcw className="mr-2 h-4 w-4" />
            Try again
          </button>

          <button
            onClick={() => (window.location.href = "/")}
            className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-8 py-3.5 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50 hover:scale-105 active:scale-95 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800 transition-all duration-300"
          >
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </button>
        </div>
      </div>
    </main>
  );
}
