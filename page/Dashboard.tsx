"use client";
import {
  BarChart3,
  Bell,
  ChevronRight,
  DollarSign,
  Globe,
  Home,
  Package,
  Settings,
  ShoppingCart,
  Truck,
  Users,
  Calculator,
  Headphones,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { useEffect } from "react";
import { useAuthStore } from "@/store/auth";
import { useRouter } from "next/navigation";

const data = {
  user: {
    name: "관리자",
    email: "admin@buyingservice.com",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  navMain: [
    {
      title: "대시보드",
      url: "#",
      icon: Home,
      isActive: true,
    },
    {
      title: "주문 관리",
      url: "#",
      icon: ShoppingCart,
      badge: "12",
      items: [
        {
          title: "주문 추적",
          url: "#",
          badge: "5",
        },
        {
          title: "주문 기록",
          url: "#",
        },
        {
          title: "주문 상태 관리",
          url: "#",
        },
        {
          title: "취소/환불 관리",
          url: "#",
          badge: "2",
        },
      ],
    },
    {
      title: "회원 관리",
      url: "#",
      icon: Users,
      items: [
        {
          title: "회원 목록",
          url: "#",
        },
        {
          title: "회원 등급 관리",
          url: "#",
        },
        {
          title: "회원 통계",
          url: "#",
        },
        {
          title: "블랙리스트 관리",
          url: "#",
        },
      ],
    },
    {
      title: "상품 관리",
      url: "#",
      icon: Package,
      items: [
        {
          title: "상품 목록",
          url: "#",
        },
        {
          title: "카테고리 관리",
          url: "#",
        },
        {
          title: "재고 관리",
          url: "#",
        },
        {
          title: "상품 리뷰 관리",
          url: "#",
        },
      ],
    },
    {
      title: "배송 관리",
      url: "#",
      icon: Truck,
      badge: "3",
      items: [
        {
          title: "배송 추적",
          url: "#",
        },
        {
          title: "배송업체 관리",
          url: "#",
        },
        {
          title: "배송비 설정",
          url: "#",
        },
        {
          title: "창고 관리",
          url: "#",
        },
      ],
    },
    {
      title: "정산 관리",
      url: "#",
      icon: Calculator,
      items: [
        {
          title: "수수료 정산",
          url: "#",
        },
        {
          title: "환율 관리",
          url: "#",
        },
        {
          title: "결제 관리",
          url: "#",
        },
        {
          title: "매출 통계",
          url: "#",
        },
      ],
    },
    {
      title: "고객 지원",
      url: "#",
      icon: Headphones,
      badge: "7",
      items: [
        {
          title: "문의 관리",
          url: "#",
          badge: "7",
        },
        {
          title: "FAQ 관리",
          url: "#",
        },
        {
          title: "공지사항 관리",
          url: "#",
        },
        {
          title: "리뷰 관리",
          url: "#",
        },
      ],
    },
    {
      title: "통계 및 분석",
      url: "#",
      icon: BarChart3,
      items: [
        {
          title: "매출 분석",
          url: "#",
        },
        {
          title: "주문 통계",
          url: "#",
        },
        {
          title: "회원 분석",
          url: "#",
        },
        {
          title: "상품 분석",
          url: "#",
        },
      ],
    },
    {
      title: "설정",
      url: "#",
      icon: Settings,
      items: [
        {
          title: "시스템 설정",
          url: "#",
        },
        {
          title: "사용자 권한",
          url: "#",
        },
        {
          title: "알림 설정",
          url: "#",
        },
        {
          title: "백업 관리",
          url: "#",
        },
      ],
    },
  ],
};

export default function Dashboard() {
  const { isLogin } = useAuthStore();
  const router = useRouter();
  useEffect(() => {
    if (isLogin) router.push("/dashboard");
  }, [isLogin, router]);
  return (
    <SidebarProvider>
      <Sidebar variant="inset">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild>
                <Link href="#">
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                    <Globe className="size-4" />
                  </div>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">
                      구매대행 관리자
                    </span>
                    <span className="truncate text-xs">Admin Dashboard</span>
                  </div>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>메인 메뉴</SidebarGroupLabel>
            <SidebarMenu>
              {data.navMain.map((item) => (
                <Collapsible
                  key={item.title}
                  asChild
                  defaultOpen={item.isActive}
                  className="group/collapsible"
                >
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton tooltip={item.title}>
                        {item.icon && <item.icon />}
                        <span>{item.title}</span>
                        {item.badge && (
                          <Badge variant="secondary" className="ml-auto">
                            {item.badge}
                          </Badge>
                        )}
                        {item.items && (
                          <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                        )}
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    {item.items && (
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.items.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton asChild>
                                <Link href={subItem.url}>
                                  <span>{subItem.title}</span>
                                  <Badge
                                    variant="secondary"
                                    className="ml-auto"
                                  >
                                    {0}
                                  </Badge>
                                </Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    )}
                  </SidebarMenuItem>
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild>
                <Link href="#">
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-accent text-sidebar-accent-foreground">
                    <Settings className="size-4" />
                  </div>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">
                      {data.user.name}
                    </span>
                    <span className="truncate text-xs">{data.user.email}</span>
                  </div>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">구매대행 관리자</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>대시보드</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="ml-auto px-3">
            <Button variant="outline" size="icon">
              <Bell className="h-4 w-4" />
            </Button>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  총 주문 수
                </CardTitle>
                <ShoppingCart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,234</div>
                <p className="text-xs text-muted-foreground">
                  +20.1% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  활성 회원 수
                </CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2,350</div>
                <p className="text-xs text-muted-foreground">
                  +180.1% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">월 매출</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45,231.89</div>
                <p className="text-xs text-muted-foreground">
                  +19% from last month
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold tracking-tight">
                최근 주문 현황
              </h2>
              <Button variant="outline">전체 보기</Button>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    처리 대기
                  </CardTitle>
                  <Badge variant="secondary">12</Badge>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">
                    주문 처리 필요
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">배송 중</CardTitle>
                  <Badge variant="outline">45</Badge>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">45</div>
                  <p className="text-xs text-muted-foreground">배송 진행 중</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    배송 완료
                  </CardTitle>
                  <Badge variant="default">234</Badge>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">234</div>
                  <p className="text-xs text-muted-foreground">이번 달 완료</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    문의 대기
                  </CardTitle>
                  <Badge variant="destructive">7</Badge>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">7</div>
                  <p className="text-xs text-muted-foreground">답변 필요</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
