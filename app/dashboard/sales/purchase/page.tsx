"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

function PurchasePage() {
  const [selectedCategory, setSelectedCategory] = useState("전체목록");

  return (
    <div>
      {/* 타이틀 */}
      <div className="lg:px-44.5 px-14.5 py-6.5 border-b border-[#CACACA]">
        <h1 className="font-semibold text-2xl">구매대행</h1>
      </div>
      {/* 필터 & 테이블 */}
      <div className="px-15.5 py-5">
        {/* 탭 구분 */}
        <div className="flex border border-[#CACACA] overflow-hidden rounded-sm">
          <Category
            title="전체목록"
            count={5}
            isSelected={selectedCategory === "전체목록"}
            onClick={() => setSelectedCategory("전체목록")}
          />
          <Category
            title="신청취소"
            count={2}
            isSelected={selectedCategory === "신청취소"}
            onClick={() => setSelectedCategory("신청취소")}
          />
          <Category
            title="품절"
            count={1}
            isSelected={selectedCategory === "품절"}
            onClick={() => setSelectedCategory("품절")}
          />
          <Category
            title="입고대기"
            count={3}
            isSelected={selectedCategory === "입고대기"}
            onClick={() => setSelectedCategory("입고대기")}
          />
          <Category
            title="입고완료"
            count={7}
            isSelected={selectedCategory === "입고완료"}
            onClick={() => setSelectedCategory("입고완료")}
          />
          <Category
            title="출고완료"
            count={4}
            isSelected={selectedCategory === "출고완료"}
            onClick={() => setSelectedCategory("출고완료")}
          />
          <Category
            title="오류입고"
            count={1}
            isSelected={selectedCategory === "오류입고"}
            onClick={() => setSelectedCategory("오류입고")}
          />
        </div>
      </div>
    </div>
  );
}

function Category({
  title,
  count,
  isSelected,
  onClick,
}: {
  title: string;
  count: number;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className={cn(
        "border-r border-[#CACACA] cursor-pointer last:border-r-0 py-3 w-36 text-center transition-all hover:bg-black hover:text-white",
        isSelected && "bg-black text-white"
      )}
      onClick={onClick}
    >
      {title} ({count})
    </button>
  );
}

export default PurchasePage;
