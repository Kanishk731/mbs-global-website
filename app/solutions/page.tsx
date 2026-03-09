import SolutionsHero from "@/components/sections/SolutionsHero";
import SolutionsGrid from "@/components/sections/SolutionsGrid";
import SolutionsSplit from "@/components/sections/SolutionsSplit";
import Image from "next/image";

export default function SolutionsPage() {
  return (
    <main className="min-h-screen pt-20">
      <SolutionsHero />
      <SolutionsGrid />
      <SolutionsSplit />
      <div className="relative mt-32 py-32 overflow-hidden text-center w-full">
        {/* CTA Background */}
        <div className="absolute inset-0 z-0 w-full">
          <Image
            src="/join.jpg"
            alt="CTA Background"
            fill
            className="object-cover"
          />
          {/* Dark overlay to make text readable */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* CTA Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-normal font-zalando mb-8 tracking-tighter text-white">
            Ready to Reach the Pinnacle?
          </h2>
          <p className="text-xl md:text-2xl font-sans font-normal text-zinc-200 mb-12 max-w-2xl mx-auto">
            At MBS, the sky is the limit. Let&apos;s build your next strategic
            powerhouse together.
          </p>
          <div className="inline-block border border-white/40 hover:border-white hover:bg-white hover:text-black transition-all duration-300 rounded-sm py-4 px-12 cursor-pointer group">
            <span className="font-zalando font-normal text-lg tracking-wide uppercase">
              Build Your Team
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
