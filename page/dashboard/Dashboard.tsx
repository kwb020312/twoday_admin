import React from "react";

function Dashboard() {
  return (
    <div className="flex">
      {/* 메인 왼쪽 */}
      <div className="w-full">
        {/* Twoday 고객 현황 */}
        <div className="">
          <div className="flex items-center gap-5">
            <h3 className="font-semibold text-2xl">Twoday 고객 현황</h3>
            <p className="font-semibold text-xl text-[#7A7A7A]">
              오전 00시 업데이트
            </p>
          </div>
        </div>
      </div>
      {/* 분리선 */}
      <div className="bg-main-100 w-[1px] mx-24 h-full" />
      {/* 메인 오른쪽 */}
      <div className="w-full">111</div>
    </div>
  );
}

export default Dashboard;
