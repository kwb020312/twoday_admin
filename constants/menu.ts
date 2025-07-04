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
  {
    title: "몰 관리",
    submenus: [
      { title: "Twoday 핫딜", href: "/dashboard/핫딜" },
      { title: "Twoday 핫딜 (영)", href: "/dashboard/핫딜-영" },
      { title: "카테고리 관리", href: "/dashboard/카테고리관리" },
      { title: "카테고리 관리 (영)", href: "/dashboard/카테고리관리-영" },
    ],
  },
  {
    title: "매출 관리",
    submenus: [{ title: "매출 관리", href: "/dashboard/매출관리" }],
  },
  {
    title: "배너 관리",
    submenus: [
      { title: "메인홈 배너", href: "/dashboard/메인홈배너" },
      { title: "메인홈 배너 (영어)", href: "/dashboard/메인홈배너-영어" },
      { title: "입점몰 배너", href: "/dashboard/입점몰배너" },
      { title: "입점몰 배너 (영어)", href: "/dashboard/입점몰배너-영어" },
      { title: "친구초대 배너", href: "/dashboard/친구초대배너" },
    ],
  },
  {
    title: "환경설정",
    submenus: [
      { title: "배송지(국가) 관리", href: "/dashboard/배송지관리" },
      { title: "물류센터 주소 관리", href: "/dashboard/물류센터주소관리" },
      {
        title: "물류센터 주소 관리 (영)",
        href: "/dashboard/물류센터주소관리-영",
      },
      { title: "수수료 관리", href: "/dashboard/수수료관리" },
      { title: "포인트 관리", href: "/dashboard/포인트관리" },
      { title: "예치금 관리", href: "/dashboard/예치금관리" },
      { title: "쿠폰 관리", href: "/dashboard/쿠폰관리" },
      { title: "환율 관리", href: "/dashboard/환율관리" },
      { title: "품목 관리", href: "/dashboard/품목관리" },
      { title: "품목 관리 (영)", href: "/dashboard/품목관리-영" },
      { title: "포장 유형 관리", href: "/dashboard/포장유형관리" },
      { title: "팝업 관리", href: "/dashboard/팝업관리" },
    ],
  },
  {
    title: "서비스 / 쇼핑몰 관리",
    submenus: [
      { title: "도움말 관리", href: "/dashboard/도움말관리" },
      { title: "도움말 관리 (영)", href: "/dashboard/도움말관리-영" },
      { title: "알림 관리", href: "/dashboard/알림관리" },
      { title: "리뷰 관리", href: "/dashboard/리뷰관리" },
      { title: "인기 검색어 관리", href: "/dashboard/인기검색어관리" },
      { title: "인기 검색어 관리 (영)", href: "/dashboard/인기검색어관리-영" },
    ],
  },
  {
    title: "약관 / 정책 관리",
    submenus: [
      { title: "가입 약관", href: "/dashboard/가입약관" },
      { title: "개인정보 수집 이용", href: "/dashboard/개인정보수집이용" },
      { title: "서비스 이용", href: "/dashboard/서비스이용" },
      { title: "마케팅 활용", href: "/dashboard/마케팅활용" },
      { title: "Twoday 유의사항", href: "/dashboard/유의사항" },
      { title: "요금 기준 안내 및 발송", href: "/dashboard/요금기준안내-발송" },
      { title: "보험관련 안내", href: "/dashboard/보험관련안내" },
      { title: "DDP 대납 수수료 안내", href: "/dashboard/DDP대납수수료안내" },
      { title: "예치금 안내 사항", href: "/dashboard/예치금안내" },
      { title: "회원 탈퇴 안내사항", href: "/dashboard/회원탈퇴안내" },
      { title: "파기, 반송주의", href: "/dashboard/파기반송주의" },
      { title: "파일 업로드 관련 안내", href: "/dashboard/파일업로드안내" },
      { title: "무료 국내 핍업 안내", href: "/dashboard/무료국내픽업안내" },
    ],
  },
  {
    title: "게시판 관리",
    submenus: [{ title: "게시판 관리", href: "/dashboard/게시판관리" }],
  },
];
