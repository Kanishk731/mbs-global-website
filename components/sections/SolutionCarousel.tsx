"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CAROUSEL_DATA = [
  {
    title: "Global Market Entry",
    description:
      "Navigate new markets with confidence. Our strategic consulting framework provides deep market analysis, regulatory guidance, and localized launch strategies to ensure your expansion succeeds.",
  },
  {
    title: "Digital Transformation",
    description:
      "Modernize your legacy systems. We architect scalable solutions that transition your business processes into agile, cloud-native operations with zero downtime.",
  },
  {
    title: "Operational Excellence",
    description:
      "Streamline your workflows. By identifying bottlenecks and implementing automation, we help you achieve higher throughput and significantly reduced overhead costs.",
  },
];

const SolutionCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? CAROUSEL_DATA.length - 1 : prev - 1,
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === CAROUSEL_DATA.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <section className="bg-zinc-50 dark:bg-zinc-900/50 py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-zalando text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 dark:text-white mb-6">
            Strategic Initiatives
          </h2>
          <p className="font-sans text-lg text-zinc-600 dark:text-zinc-400">
            Explore our curated approaches to solving your most complex business
            challenges.
          </p>
        </div>

        <div className="relative flex items-center justify-center max-w-5xl mx-auto">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 z-10 p-4 -ml-4 md:-ml-8 bg-white dark:bg-black rounded-full shadow-lg border border-zinc-100 dark:border-zinc-800 text-purple-600 hover:text-purple-400 hover:scale-110 transition-all focus:outline-none"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
          </button>

          {/* Card Content */}
          <div className="w-full mx-12 md:mx-20">
            <div className="bg-white dark:bg-black rounded-3xl p-10 md:p-16 shadow-2xl border border-zinc-100 dark:border-zinc-800 text-center transform transition-all duration-500 min-h-[300px] flex flex-col justify-center">
              <h3
                className="font-zalando text-3xl md:text-4xl font-semibold text-zinc-900 dark:text-white mb-6 animate-in fade-in zoom-in duration-500"
                key={`title-${currentIndex}`}
              >
                {CAROUSEL_DATA[currentIndex].title}
              </h3>
              <p
                className="font-sans text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl mx-auto animate-in fade-in zoom-in duration-500 delay-100"
                key={`desc-${currentIndex}`}
              >
                {CAROUSEL_DATA[currentIndex].description}
              </p>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {CAROUSEL_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? "bg-purple-600 w-8"
                      : "bg-zinc-300 dark:bg-zinc-700 hover:bg-purple-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 z-10 p-4 -mr-4 md:-mr-8 bg-white dark:bg-black rounded-full shadow-lg border border-zinc-100 dark:border-zinc-800 text-purple-600 hover:text-purple-400 hover:scale-110 transition-all focus:outline-none"
            aria-label="Next slide"
          >
            <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SolutionCarousel;
