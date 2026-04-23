import { BookOpen, Link2, PenLine, Headphones, FileText, ClipboardList } from "lucide-react";

export interface BentoItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  status?: string;
  tags?: string[];
  meta?: string;
  cta?: string;
  colSpan?: number;
  hasPersistentHover?: boolean;
  comingSoon?: boolean;
}

export interface BentoGridProps {
  items: BentoItem[];
}

export const itemsStudy: BentoItem[] = [
  {
    title: "Verbindingswoorden",
    meta: "8 categorieën",
    description: "Signaalwoorden voor cohesie: tegenstelling, oorzaak, gevolg, doel, volgorde en meer.",
    icon: <Link2 className="w-4 h-4 text-indigo-400" />,
    status: "Flashkaarten",
    tags: ["Toevoeging", "Tegenstelling", "Oorzaak"],
    colSpan: 2,
    hasPersistentHover: true,
  },
  {
    title: "Woordenschat",
    meta: "3 categorieën",
    description: "Academische en formele woordenschat voor schrijven en spreken op B2–C1 niveau.",
    icon: <BookOpen className="w-4 h-4 text-emerald-400" />,
    tags: ["Formeel", "Academisch"],
    comingSoon: true,
  },
  {
    title: "Schrijfvaardigheid",
    meta: "Essay & register",
    description: "Structuur van een betogend essay, formeel register en nuttige formuleringen.",
    icon: <PenLine className="w-4 h-4 text-violet-400" />,
    tags: ["Inleiding", "Hoofdtekst", "Conclusie"],
    colSpan: 2,
    comingSoon: true,
  },
  {
    title: "Begrijpend lezen",
    meta: "4 strategieën",
    description: "Leesstrategieën en aanpak per vraagtype voor de leesvaardigheidstoets.",
    icon: <FileText className="w-4 h-4 text-sky-400" />,
    tags: ["Oriënterend", "Intensief", "Kritisch"],
    comingSoon: true,
  },
  {
    title: "Luistervaardigheid",
    meta: "5 genres",
    description: "Luisterstrategieën en tekstgenres voor de luistertoets van het ITNA-examen.",
    icon: <Headphones className="w-4 h-4 text-amber-400" />,
    tags: ["Nieuwsbericht", "Interview", "Lezing"],
    comingSoon: true,
  },
  {
    title: "Mock tests",
    meta: "2 toetsen",
    description: "Korte oefentoetsen in de stijl van het ITNA-examen met directe feedback.",
    icon: <ClipboardList className="w-4 h-4 text-rose-400" />,
    tags: ["Verbindingswoorden", "Woordenschat"],
    colSpan: 2,
    comingSoon: true,
  },
];
