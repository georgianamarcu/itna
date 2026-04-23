import { BentoGrid } from "./components/BentoGrid";
import { itemsStudy } from "./assets/StudyItems";

export default function App() {
  return (
    <div className="absolute inset-0 h-full w-full bg-bg [background-image:radial-gradient(125%_125%_at_50%_-50%,var(--color-accent-muted)_0%,transparent_70%)]">
      <BentoGrid items={itemsStudy} />
    </div>
  );
}
