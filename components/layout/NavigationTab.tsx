import { ChevronDown } from "lucide-react";

export default function NavigationTab({ title }: { title: string }) {
  return (
    <div className="flex select-none items-center text-text-main-100 px-5 font-semibold gap-2 hover:bg-main-150 min-h-14 cursor-pointer whitespace-nowrap">
      <span>{title}</span>
      <ChevronDown />
    </div>
  );
}
