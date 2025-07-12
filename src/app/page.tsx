import { SectionContent } from "@/components/SectionsHome/SectionContent";
import { SectionHome } from "@/components/SectionsHome/SectionHome";

export default function Home() {
  return (
    <div className="flex-1 z-[1] min-w-[375px]">
      <main className="min-w-[375px]">
        <SectionHome />
        <SectionContent />
      </main>
    </div>
  );
}
