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
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

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
    <div className="lg:px-[180px] p-4 lg:py-20">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-y-24 gap-x-48">
        {/* 1. Twoday 고객 현황 */}
        <div className="flex flex-col justify-between">
          <div className="flex items-center gap-5 mb-6">
            <h3 className="font-semibold text-2xl">Twoday 고객 현황</h3>
            <p className="font-semibold text-xl text-[#7A7A7A]">
              오전 00시 업데이트
            </p>
          </div>
          <div className="w-full h-full flex flex-col justify-between">
            <div className="w-fit ml-auto font-semibold text-lg text-[#0047FF] mb-2">
              유입수 ({lastDate} 일 별) {lastTotal}회
            </div>
            <ChartContainer config={chartConfig} className="w-full h-full">
              <BarChart
                accessibilityLayer
                data={chartData}
                barCategoryGap="30%"
              >
                <CartesianGrid vertical={false} />
                <XAxis dataKey="date" tickLine={false} axisLine={false} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent payload={""} />} />
                <Bar dataKey="user" fill="#0047FF" radius={4} barSize={25} />
              </BarChart>
            </ChartContainer>
          </div>
        </div>

        {/* 2. 처리할 배송대행 주문 */}
        <div className="flex flex-col">
          <div className="w-full flex justify-between items-center mb-6">
            <h3 className="font-semibold text-2xl">처리할 배송대행 주문</h3>
            <div className="font-semibold text-xl text-main-50 flex items-center gap-2.5">
              <span>주문대행 페이지 이동</span>
              <ChevronRight />
            </div>
          </div>
          <div className="overflow-x-auto">
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
        {/* 3. 최근 리뷰 */}
        <div className="flex flex-col">
          <div className="w-full flex justify-between items-center mb-6">
            <h3 className="font-semibold text-2xl">최근 리뷰</h3>
            <div className="font-semibold text-xl text-main-50 flex items-center gap-2.5">
              <span>리뷰 페이지 이동</span>
              <ChevronRight />
            </div>
          </div>
          <div className="overflow-x-auto">
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
        {/* 4. 처리할 구매대행 주문 */}
        <div className="flex flex-col">
          <div className="w-full flex justify-between items-center mb-6">
            <h3 className="font-semibold text-2xl">처리할 구매대행 주문</h3>
            <div className="font-semibold text-xl text-main-50 flex items-center gap-2.5">
              <span>구매대행 페이지 이동</span>
              <ChevronRight />
            </div>
          </div>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>상태변경</TableHead>
                  <TableHead>건수</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>주문 및 재고확인 ▶ 한국 내 주문/배송</TableCell>
                  <TableCell>000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>한국 내 주문/배송 ▶ 검품 및 포장</TableCell>
                  <TableCell>000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>검품 및 포장 ▶ 2차 결제</TableCell>
                  <TableCell>000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2차 결제 ▶ 해외 배송 현황</TableCell>
                  <TableCell>000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>해외 배송 현황 ▶ 배송완료</TableCell>
                  <TableCell>000</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
      {/* 신규 가입회원 */}
      <div className="w-full h-full flex flex-col justify-between mt-32.5">
        <div className="w-full flex justify-between items-center mb-6">
          <h3 className="font-semibold text-2xl">신규 가입회원</h3>
        </div>
        {/* 가입 회원 테이블 */}
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>가입일</TableHead>
                <TableHead>회원 이름</TableHead>
                <TableHead>이메일</TableHead>
                <TableHead>상태</TableHead>
                <TableHead>국가</TableHead>
                <TableHead>상세</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>2024.06.01</TableCell>
                <TableCell>홍길동</TableCell>
                <TableCell>hong@gmail.com</TableCell>
                <TableCell>활동중</TableCell>
                <TableCell>한국</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">
                    <Eye className="w-4 h-4 mr-1" />
                    보기
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2024.06.01</TableCell>
                <TableCell>홍길동</TableCell>
                <TableCell>hong@gmail.com</TableCell>
                <TableCell>활동중</TableCell>
                <TableCell>한국</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">
                    <Eye className="w-4 h-4 mr-1" />
                    보기
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2024.06.01</TableCell>
                <TableCell>홍길동</TableCell>
                <TableCell>hong@gmail.com</TableCell>
                <TableCell>활동중</TableCell>
                <TableCell>한국</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">
                    <Eye className="w-4 h-4 mr-1" />
                    보기
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2024.06.01</TableCell>
                <TableCell>홍길동</TableCell>
                <TableCell>hong@gmail.com</TableCell>
                <TableCell>활동중</TableCell>
                <TableCell>한국</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">
                    <Eye className="w-4 h-4 mr-1" />
                    보기
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2024.06.01</TableCell>
                <TableCell>홍길동</TableCell>
                <TableCell>hong@gmail.com</TableCell>
                <TableCell>활동중</TableCell>
                <TableCell>한국</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">
                    <Eye className="w-4 h-4 mr-1" />
                    보기
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <div className="w-full flex justify-end mt-4">
            <button className="font-semibold text-sm text-white bg-main-50 px-4 py-2 rounded-md cursor-pointer transition-all duration-300 hover:bg-main-100">
              회원 전체보기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
