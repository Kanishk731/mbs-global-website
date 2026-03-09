import SolutionsHero from "@/components/sections/SolutionsHero";
import SolutionsGrid from "@/components/sections/SolutionsGrid";
import SolutionsSplit from "@/components/sections/SolutionsSplit";
import SolutionGlassmorphism from "@/components/sections/SolutionGlassmorphism";
import SolutionAnimatedFeatures from "@/components/sections/SolutionAnimatedFeatures";
import SolutionCarousel from "@/components/sections/SolutionCarousel";

export default async function SolutionDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Render the glassmorphism component for specific slugs
  const showGlassmorphism = [
    "workspace-solution",
    "operative-managements",
    "strategic-consulting",
    "innovation",
  ].includes(slug);

  // Render the carousel for the specific slug
  const showCarousel = slug === "strategic-consulting";

  // Render animated features for specific slugs
  const showAnimatedFeatures = ["innovation", "operative-managements"].includes(
    slug,
  );

  return (
    <main className="min-h-screen pt-20">
      <SolutionsHero />
      {showGlassmorphism && <SolutionGlassmorphism slug={slug} />}
      {showAnimatedFeatures && <SolutionAnimatedFeatures slug={slug} />}
      <SolutionsGrid />
      {showCarousel && <SolutionCarousel />}
      <SolutionsSplit />
    </main>
  );
}
