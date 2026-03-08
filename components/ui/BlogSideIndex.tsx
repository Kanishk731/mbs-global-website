"use client";

import { useEffect, useState } from "react";
import { BlogSection } from "@/lib/blog-data";

export default function BlogSideIndex({
  sections,
}: {
  sections: BlogSection[];
}) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0% -35% 0%", threshold: 0.5 },
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="sticky top-32 hidden w-64 space-y-6 lg:block">
      <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-900 dark:text-white">
        On this page
      </h4>
      <nav className="flex flex-col space-y-3">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`text-left text-sm transition-colors hover:text-blue-600 ${
              activeId === section.id
                ? "font-semibold text-blue-600 dark:text-blue-400"
                : "text-zinc-500 dark:text-zinc-400"
            }`}
          >
            {section.title}
          </button>
        ))}
      </nav>
    </div>
  );
}
