
"use client";

import Image from "next/image";
import { useSyncExternalStore } from "react";
import UserInfo from "./UserInfo";

const subscribeToDate = () => () => {};
const getDateSnapshot = () =>
  new Date().toLocaleDateString("bn-BD", { dateStyle: "full" });
const getServerDateSnapshot = () => "";

const Header = () => {
  const date = useSyncExternalStore(
    subscribeToDate,
    getDateSnapshot,
    getServerDateSnapshot
  );

  return (
    <header className="w-full border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-5xl px-3 sm:px-4">
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-600 p-1">
              <Image
                src="/logo-icon.png"
                alt="বাজার দর"
                width={24}
                height={24}
                className="h-full w-full object-contain"
              />
            </div>

            <div className="leading-tight">
              <h2 className="text-xl font-bold text-gray-900">
                বাজার দর
              </h2>

              <p className="text-[12px] text-gray-500">
                {date || "তারিখ লোড হচ্ছে..."}
              </p>
            </div>
          </div>

          <UserInfo/>
        </div>
      </div>
    </header>
  );
};

export default Header;