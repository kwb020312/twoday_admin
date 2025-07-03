"use client";

import Image from "next/image";
import Logo from "@/public/logo.svg";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useLogout from "./hooks/useLogout";

export default function Login() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  useLogout();
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const id = formData.get("id");
    const password = formData.get("password");
    if (id !== "admin" || password !== "1234") {
      setIsModalOpen(true);
      return;
    }
    document.cookie = "isLogin=true; path=/";
    router.push("/dashboard");
  }
  return (
    <div className="w-full flex justify-center items-center h-full">
      <div className="lg:py-12.5 lg:px-12.5 py-5 bg-white rounded-2xl flex justify-center flex-col items-center">
        {/* 로고 */}
        <div className="px-3 py-3.5 bg-main-100 w-fit rounded-2xl">
          <Image src={Logo} alt="2Day Logo" />
        </div>
        {/* 관리자 표시 */}
        <div className="mt-6 text-center ">
          <h1 className="text-main-50 font-bold text-3xl">관리자 로그인</h1>
        </div>
        <form onSubmit={handleSubmit}>
          {/* 아이디 비밀번호 */}
          <div className="lg:min-w-[500px] mt-10 flex flex-col gap-7.5">
            <Input type="text" placeholder="아이디*" name="id" required />
            <Input
              type="password"
              placeholder="비밀번호*"
              name="password"
              required
            />
          </div>
          {/* 로그인 버튼 */}
          <div className="mt-10 bg-main-50 transition-all duration-200 hover:bg-main-100 rounded-2xl w-full h-20">
            <button className="h-full text-center font-bold text-2xl text-white w-full cursor-pointer">
              로그인
            </button>
          </div>
        </form>
      </div>
      {/* 로그인 경고 모달 */}
      {isModalOpen && (
        <div className="absolute bg-black/50 w-full h-full flex justify-center items-center">
          <div className="bg-white rounded-2xl lg:w-[600px] px-12.5 py-7.5 shadow-2xl flex flex-col justify-between gap-20.5">
            <div className="mt-5 flex flex-col gap-8">
              <h3 className="font-bold text-xl">알림</h3>
              <p className="text-xl">아이디, 비밀번호를 확인해주세요.</p>
            </div>
            <div className="ml-auto">
              <button
                onClick={() => setIsModalOpen(false)}
                className="cursor-pointer hover:bg-main-100 bg-main-50 rounded-2xl font-semibold text-white lg:w-[140px] w-[70px] h-12.5"
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
