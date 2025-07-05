"use client";

import { useState, useRef, useEffect, CSSProperties } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function NavigationTab({
  title,
  href,
  submenus,
}: {
  title: string;
  href: string;
  submenus?: { title: string; href: string }[];
}) {
  const [open, setOpen] = useState(false);
  const [submenuStyle, setSubmenuStyle] = useState<CSSProperties>({});
  const parentRef = useRef<HTMLDivElement>(null);
  const [parentWidth, setParentWidth] = useState<number>();

  useEffect(() => {
    if (!parentRef.current) return;

    const rect = parentRef.current.getBoundingClientRect();
    setParentWidth(rect.width);
    setSubmenuStyle({
      position: "absolute",
      top: rect.bottom + window.scrollY,
      left: rect.right + window.scrollX,
      transform: "translate(-100%, 0)",
      width: rect.width,
    });
  }, [open]);

  return (
    <div
      ref={parentRef}
      className="flex select-none items-center text-text-main-100 px-5 font-semibold gap-2 hover:bg-main-150 min-h-14 cursor-pointer whitespace-nowrap"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link href={href} className="flex items-center gap-2">
        <span>{title}</span>
        {submenus && submenus.length > 0 && <ChevronDown />}
      </Link>
      {open && submenus && submenus.length > 0 && (
        <div
          style={{ ...submenuStyle, width: parentWidth }}
          className="bg-main-50 z-50"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          {submenus.map((item) => (
            <Link key={item.title} href={`${href}/${item.href}`} passHref>
              <div className="px-4 py-2 hover:bg-main-150 text-text-main-100 cursor-pointer whitespace-nowrap overflow-hidden text-ellipsis">
                {item.title}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
