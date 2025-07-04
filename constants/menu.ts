export interface SubMenu {
  title: string;
  href: string;
}

export interface MainMenu {
  title: string;
  submenus: SubMenu[];
}

export const MENUS: MainMenu[] = [
  {
    title: "구매 / 배송대행, 무료픽업",
    submenus: [
      { title: "구매대행", href: "/dashboard/구매대행" },
      { title: "배송대행, 무료픽업", href: "/dashboard/배송대행-무료픽업" },
      { title: "데이터 관리", href: "/dashboard/데이터관리" },
    ],
  },
  {
    title: "입고/출고/픽업/반송 관리",
    submenus: [
      { title: "입고관리", href: "/dashboard/입고관리" },
      { title: "출고관리", href: "/dashboard/출고관리" },
      { title: "픽업관리", href: "/dashboard/픽업관리" },
      { title: "반송관리", href: "/dashboard/반송관리" },
      { title: "No Data", href: "/dashboard/nodata" },
    ],
  },
  {
    title: "회원 관리",
    submenus: [
      { title: "회원목록", href: "/dashboard/회원목록" },
      { title: "탈퇴회원 및 사유", href: "/dashboard/탈퇴회원-사유" },
    ],
  },
  {
    title: "메인홈 관리",
    submenus: [
      { title: "메인홈 관리", href: "/dashboard/메인홈관리" },
      { title: "쇼핑몰 목록", href: "/dashboard/쇼핑몰목록" },
      { title: "쇼핑몰 목록 (영)", href: "/dashboard/쇼핑몰목록-영" },
      { title: "Twoday 추천 상품", href: "/dashboard/추천상품" },
      { title: "Twoday 추천 상품 (영)", href: "/dashboard/추천상품-영" },
      { title: "Twoday 추천 해시태그", href: "/dashboard/추천해시태그" },
      {
        title: "Twoday 추천 해시태그 (영)",
        href: "/dashboard/추천해시태그-영",
      },
      { title: "Twoday 핫딜", href: "/dashboard/핫딜" },
      { title: "Twoday 핫딜 (영)", href: "/dashboard/핫딜-영" },
      { title: "부카테고리 관리", href: "/dashboard/부카테고리관리" },
      { title: "부카테고리 관리 (영)", href: "/dashboard/부카테고리관리-영" },
    ],
  },
];
