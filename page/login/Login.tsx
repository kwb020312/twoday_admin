"use client";
import React, { useState } from "react";

import { Eye, EyeOff, Mail, Lock, ArrowRight, Shield } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    // 로그인 로직 시뮬레이션
    setTimeout(() => {
      setIsLoading(false);
      router.push("/");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto">
        <div className="bg-white/95 rounded-3xl shadow-2xl p-8 border border-main">
          {/* 헤더 */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-main rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              관리자 로그인
            </h2>
            <p className="text-gray-600">관리자 시스템에 접속하세요</p>
          </div>

          {/* 로그인 폼 */}
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              {/* 이메일 입력 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  이메일 주소
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 border border-main rounded-xl focus:ring-2 focus:ring-main focus:border-transparent transition-all duration-200 bg-white/50"
                    placeholder="admin@2day.com"
                    required
                  />
                </div>
              </div>

              {/* 비밀번호 입력 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  비밀번호
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-11 pr-12 py-3 border border-main rounded-xl focus:ring-2 focus:ring-main focus:border-transparent transition-all duration-200 bg-white/50"
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-main transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* 옵션들 */}
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-main bg-gray-100 border-main rounded focus:ring-main focus:ring-2"
                  />
                  <span className="ml-2 text-sm text-gray-600">
                    로그인 상태 유지
                  </span>
                </label>
                <a
                  href="#"
                  className="text-sm text-main hover:underline transition-colors"
                >
                  비밀번호 찾기
                </a>
              </div>

              {/* 로그인 버튼 */}
              <button
                disabled={isLoading}
                className="w-full bg-main text-white py-3 px-4 rounded-xl font-medium hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-main focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center group"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <span>관리자 시스템 접속</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              {/* 보안 안내 */}
              <div className="mt-6 p-4 bg-gray-50 rounded-xl border border-main">
                <div className="flex">
                  <Shield className="w-5 h-5 text-main mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-main font-medium">보안 안내</p>
                    <p className="text-xs text-gray-600 mt-1">
                      관리자 계정은 2단계 인증이 활성화되어 있습니다. 로그인 후
                      추가 인증을 진행해주세요.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </form>

          {/* 하단 링크 */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              문제가 있으신가요?{" "}
              <a
                href="#"
                className="text-main hover:underline font-medium transition-colors"
              >
                기술 지원팀 연락
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
