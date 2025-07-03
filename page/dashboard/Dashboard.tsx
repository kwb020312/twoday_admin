"use client";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import React from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

const chartData = [
  { date: "01.01", user: 80 },
  { date: "02.01", user: 200 },
  { date: "03.01", user: 120 },
  { date: "04.01", user: 190 },
  { date: "05.01", user: 130 },
  { date: "06.01", user: 140 },
  { date: "07.01", user: 160 },
  { date: "08.01", user: 190 },
];
const chartConfig = {
  user: {
    label: "고객 유입수",
    color: "#0047FF",
  },
} satisfies ChartConfig;

function Dashboard() {
  // 마지막 날짜 데이터
  const lastData = chartData[chartData.length - 1];
  const lastDate = lastData.date;
  const lastTotal = lastData.user;
  return (
    <div className="flex">
      {/* 메인 왼쪽 */}
      <div className="w-full">
        {/* Twoday 고객 현황 */}
        <div className="flex flex-col gap-7.5">
          {/* 고객 현황 및 업데이트 시간 */}
          <div className="flex items-center gap-5">
            <h3 className="font-semibold text-2xl">Twoday 고객 현황</h3>
            <p className="font-semibold text-xl text-[#7A7A7A]">
              오전 00시 업데이트
            </p>
          </div>
          {/* 차트 영역 */}
          <div className="w-full">
            {/* 유입수 정보 */}
            <div className="w-fit ml-auto font-semibold text-lg text-[#0047FF]">
              유입수 ({lastDate} 일 별) {lastTotal}회
            </div>
            {/* 차트 */}
            <ChartContainer config={chartConfig} className="w-full">
              <BarChart
                accessibilityLayer
                data={chartData}
                barCategoryGap="30%"
              >
                <CartesianGrid vertical={false} />
                <XAxis dataKey="date" tickLine={false} axisLine={false} />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent payload={""} />} />
                <Bar dataKey="user" fill="#0047FF" radius={4} barSize={25} />
              </BarChart>
            </ChartContainer>
          </div>
        </div>
        {/* 최근 리뷰 */}
      </div>
      {/* 분리선 */}
      <div className="bg-main-100 w-[1px] mx-24 h-full" />
      {/* 메인 오른쪽 */}
      <div className="w-full">111</div>
    </div>
  );
}

export default Dashboard;
