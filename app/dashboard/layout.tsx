import { ChevronDown } from "lucide-react";
import Link from "next/link";
import React, { PropsWithChildren } from "react";

function Layout({ children }: PropsWithChildren) {
  return (
    <div className="w-full">
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
          <NavigationTab title="구매 / 배송대행, 무료픽업" />
          <NavigationTab title="입고/출고/픽업/반송 관리" />
          <NavigationTab title="회원 관리" />
          <NavigationTab title="메인홈 관리" />
          <NavigationTab title="몰 관리" />
          <NavigationTab title="매출 관리" />
          <NavigationTab title="배너 관리" />
          <NavigationTab title="환경설정" />
          <NavigationTab title="서비스 / 쇼핑몰 관리" />
          <NavigationTab title="약관 / 정책 관리" />
          <NavigationTab title="약관 / 정책 관리(영문)" />
          <NavigationTab title="게시판 관리" />
        </div>
      </nav>
      {children}
    </div>
  );
}

function NavigationTab({ title }: { title: string }) {
  return (
    <div className="flex items-center text-text-main-100 px-5 font-semibold gap-2 hover:bg-main-150 min-h-14 cursor-pointer whitespace-nowrap">
      <span>{title}</span>
      <ChevronDown />
    </div>
  );
}

export default Layout;
