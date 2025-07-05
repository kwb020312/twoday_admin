export interface SubMenu {
  title: string;
  href: string;
}

export interface MainMenu {
  title: string;
  href: string;
  submenus: SubMenu[];
}

export const MENUS: MainMenu[] = [
  {
    title: "구매 / 배송대행, 무료픽업",
    href: "/dashboard/sales",
    submenus: [
      { title: "구매대행", href: "purchase" },
      { title: "배송대행, 무료픽업", href: "delivery" },
      { title: "데이터 관리", href: "data-management" },
    ],
  },
  {
    title: "입고/출고/픽업/반송 관리",
    href: "/dashboard/logistics",
    submenus: [
      { title: "입고관리", href: "inbound" },
      { title: "출고관리", href: "outbound" },
      { title: "픽업관리", href: "pickup" },
      { title: "반송관리", href: "return" },
      { title: "No Data", href: "nodata" },
    ],
  },
  {
    title: "회원 관리",
    href: "/dashboard/members",
    submenus: [
      { title: "회원목록", href: "list" },
      { title: "탈퇴회원 및 사유", href: "withdrawn" },
    ],
  },
  {
    title: "메인홈 관리",
    href: "/dashboard/home",
    submenus: [
      { title: "메인홈 관리", href: "management" },
      { title: "쇼핑몰 목록", href: "shopping-malls" },
      { title: "쇼핑몰 목록 (영)", href: "shopping-malls-en" },
      { title: "Twoday 추천 상품", href: "recommended-products" },
      { title: "Twoday 추천 상품 (영)", href: "recommended-products-en" },
      { title: "Twoday 추천 해시태그", href: "recommended-hashtags" },
      {
        title: "Twoday 추천 해시태그 (영)",
        href: "recommended-hashtags-en",
      },
      { title: "Twoday 핫딜", href: "hot-deals" },
      { title: "Twoday 핫딜 (영)", href: "hot-deals-en" },
      { title: "부카테고리 관리", href: "subcategories" },
      { title: "부카테고리 관리 (영)", href: "subcategories-en" },
    ],
  },
  {
    title: "몰 관리",
    href: "/dashboard/malls",
    submenus: [
      { title: "Twoday 핫딜", href: "hot-deals" },
      { title: "Twoday 핫딜 (영)", href: "hot-deals-en" },
      { title: "카테고리 관리", href: "categories" },
      { title: "카테고리 관리 (영)", href: "categories-en" },
    ],
  },
  {
    title: "매출 관리",
    href: "/dashboard/sales",
    submenus: [{ title: "매출 관리", href: "management" }],
  },
  {
    title: "배너 관리",
    href: "/dashboard/banners",
    submenus: [
      { title: "메인홈 배너", href: "main" },
      { title: "메인홈 배너 (영어)", href: "main-en" },
      { title: "입점몰 배너", href: "mall" },
      { title: "입점몰 배너 (영어)", href: "mall-en" },
      { title: "친구초대 배너", href: "referral" },
    ],
  },
  {
    title: "환경설정",
    href: "/dashboard/settings",
    submenus: [
      { title: "배송지(국가) 관리", href: "shipping-countries" },
      { title: "물류센터 주소 관리", href: "logistics-addresses" },
      {
        title: "물류센터 주소 관리 (영)",
        href: "logistics-addresses-en",
      },
      { title: "수수료 관리", href: "fees" },
      { title: "포인트 관리", href: "points" },
      { title: "예치금 관리", href: "deposits" },
      { title: "쿠폰 관리", href: "coupons" },
      { title: "환율 관리", href: "exchange-rates" },
      { title: "품목 관리", href: "items" },
      { title: "품목 관리 (영)", href: "items-en" },
      { title: "포장 유형 관리", href: "packaging-types" },
      { title: "팝업 관리", href: "popups" },
    ],
  },
  {
    title: "서비스 / 쇼핑몰 관리",
    href: "/dashboard/services",
    submenus: [
      { title: "도움말 관리", href: "help" },
      { title: "도움말 관리 (영)", href: "help-en" },
      { title: "알림 관리", href: "notifications" },
      { title: "리뷰 관리", href: "reviews" },
      { title: "인기 검색어 관리", href: "popular-searches" },
      { title: "인기 검색어 관리 (영)", href: "popular-searches-en" },
    ],
  },
  {
    title: "약관 / 정책 관리",
    href: "/dashboard/policies",
    submenus: [
      { title: "가입 약관", href: "terms" },
      { title: "개인정보 수집 이용", href: "privacy" },
      { title: "서비스 이용", href: "service-terms" },
      { title: "마케팅 활용", href: "marketing" },
      { title: "Twoday 유의사항", href: "notices" },
      { title: "요금 기준 안내 및 발송", href: "pricing" },
      { title: "보험관련 안내", href: "insurance" },
      { title: "DDP 대납 수수료 안내", href: "ddp-fees" },
      { title: "예치금 안내 사항", href: "deposit-guide" },
      { title: "회원 탈퇴 안내사항", href: "withdrawal-guide" },
      { title: "파기, 반송주의", href: "disposal-return" },
      { title: "파일 업로드 관련 안내", href: "file-upload" },
      { title: "무료 국내 핍업 안내", href: "free-pickup" },
    ],
  },
  {
    title: "게시판 관리",
    href: "/dashboard/boards",
    submenus: [{ title: "게시판 관리", href: "management" }],
  },
];
