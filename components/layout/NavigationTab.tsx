"use client";

import { useState, useRef, useEffect, CSSProperties } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function NavigationTab({
  title,
  submenus,
}: {
  title: string;
  submenus?: { title: string; href: string }[];
}) {
  const [open, setOpen] = useState(false);
  const [submenuStyle, setSubmenuStyle] = useState<CSSProperties>({});
  const parentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!parentRef.current) return;

    const rect = parentRef.current.getBoundingClientRect();
    setSubmenuStyle({
      position: "absolute",
      top: rect.bottom + window.scrollY,
      left: rect.right + window.scrollX,
      transform: "translate(-100%, 0)", // 오른쪽 최하단에 맞추기 위해
    });
  }, [open]);

  return (
    <div
      ref={parentRef}
      className="flex select-none items-center text-text-main-100 px-5 font-semibold gap-2 hover:bg-main-150 min-h-14 cursor-pointer whitespace-nowrap"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <span>{title}</span>
      {submenus && submenus.length > 0 && <ChevronDown />}
      {open && submenus && submenus.length > 0 && (
        <div style={submenuStyle} className="mt-2 bg-main-50 rounded-md z-50">
          {submenus.map((item) => (
            <Link key={item.title} href={item.href} passHref legacyBehavior>
              <div className="px-4 py-2 hover:bg-main-150 text-text-main-100 cursor-pointer whitespace-nowrap">
                {item.title}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
