import NavigationTab from "@/components/layout/NavigationTab";
import Link from "next/link";
import React, { PropsWithChildren } from "react";
import { MENUS } from "@/constants/menu";

function Layout({ children }: PropsWithChildren) {
  return (
    <div className="w-full bg-white">
      {/* 로고 및 로그아웃 */}
      <header className="w-full bg-main-50 py-5 px-10 flex justify-between items-center">
        <h1 className="font-bold text-2xl text-white">Twoday Admin</h1>
        <Link href={"/"}>
          <button className="bg-white text-main-50 font-bold text-sm rounded-sm w-[120px] h-10 cursor-pointer">
            로그아웃
          </button>
        </Link>
      </header>
      <hr />
      {/* 메뉴 */}
      <nav className="w-full bg-main-50 flex justify-between items-center">
        <div className="flex overflow-x-auto">
          {MENUS.map((menu) => (
            <NavigationTab
              key={menu.title}
              title={menu.title}
              submenus={menu.submenus}
            />
          ))}
        </div>
      </nav>
      <div className="lg:px-[180px] p-4 lg:py-20">{children}</div>
    </div>
  );
}

export default Layout;
