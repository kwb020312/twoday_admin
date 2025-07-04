"use client";

import { Button } from "@/components/ui/button";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ChevronRight, Eye } from "lucide-react";
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

// 리뷰 목데이터
const reviewData = [
  {
    date: "2024.06.01",
    content: "서비스가 정말 편리하고 빠릅니다! 앞으로도 자주 이용할 것 같아요.",
  },
  {
    date: "2024.06.02",
    content: "고객 지원이 친절해서 만족스러웠어요.",
  },
  {
    date: "2024.06.03",
    content: "UI가 직관적이고 사용하기 쉬워요.",
  },
  {
    date: "2024.06.04",
    content: "다양한 기능이 추가되면 더 좋을 것 같아요.",
  },
  {
    date: "2024.06.05",
    content: "빠른 응답과 깔끔한 디자인이 인상적입니다.",
  },
];

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
        {/* 분리선 */}
        <div className="bg-[#CACACA] h-[1px] w-full my-10" />
        {/* 최근 리뷰 */}
        <div className="flex flex-col gap-7.5">
          {/* 최근 리뷰 및 리뷰 페이지 이동 */}
          <div className="w-full flex justify-between items-center">
            <h3 className="font-semibold text-2xl">최근 리뷰</h3>
            <div className="font-semibold text-xl text-main-50 flex items-center gap-2.5">
              <span>리뷰 페이지 이동</span>
              <ChevronRight />
            </div>
          </div>
          {/* 리뷰 테이블 */}
          <div className="">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>작성일</TableHead>
                  <TableHead>리뷰 내용</TableHead>
                  <TableHead>상세</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {reviewData.map((review, index) => (
                  <TableRow key={index}>
                    <TableCell>{review.date}</TableCell>
                    <TableCell>{review.content}</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-1" />
                        보기
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
      {/* 분리선 */}
      <div className="bg-main-100 w-[1px] mx-24 h-full" />
      {/* 메인 오른쪽 */}
      <div className="w-full">
        <div className="flex flex-col gap-7.5">
          {/* 처리할 배송대행 주문 */}
          <div className="w-full flex justify-between items-center">
            <h3 className="font-semibold text-2xl">처리할 배송대행 주문</h3>
            <div className="font-semibold text-xl text-main-50 flex items-center gap-2.5">
              <span>주문대행 페이지 이동</span>
              <ChevronRight />
            </div>
          </div>
          {/* 처리할 배송대행 주문 테이블 */}
          <div className="">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>상태변경</TableHead>
                  <TableHead>건수</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>배송 신청 확인 ▶ 물류 센터 이동중</TableCell>
                  <TableCell>000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>물류 센터 이동중 ▶ 배송비 측정 및 결제</TableCell>
                  <TableCell>000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>배송비 측정 및 결제 ▶ 해외 배송 현황</TableCell>
                  <TableCell>000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>해외 배송 현황 ▶ 배송 완료</TableCell>
                  <TableCell>000</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
        {/* 분리선 */}
        <div className="bg-[#CACACA] h-[1px] w-full my-10" />
        <div className="flex flex-col gap-7.5"></div>
      </div>
    </div>
  );
}

export default Dashboard;
