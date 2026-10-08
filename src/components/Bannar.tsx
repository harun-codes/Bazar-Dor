"use client";

import React, { useMemo } from "react";
import Image from "next/image";

const Banner = () => {
  const date = useMemo(
    () =>
      new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
      }),
    [],
  );

  return (
    <section className="flex w-full flex-col items-center justify-between gap-8 rounded-3xl border border-gray-100 bg-[#f8faf8] p-6 shadow-sm sm:p-8 md:p-10 lg:flex-row">
      
      <div className="flex-1 space-y-4 text-center lg:text-left">
        
        <div className="inline-block rounded-full bg-[#e8f5e9] px-4 py-1.5 text-xs font-medium text-[#1b5e20]">
          {date || "তারিখ লোড হচ্ছে..."}
        </div>

        <h1 className="text-2xl font-extrabold leading-tight text-[#1c1d1d] sm:text-3xl lg:text-4xl">
          আজকের বাজারের দাম এক নজরে
        </h1>

        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-gray-500 sm:text-base lg:mx-0">
          চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম —
          বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন
          এক জায়গায়।
        </p>

        <div className="pt-2">
          <button
            type="button"
            className="rounded-xl bg-[#008744] px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-emerald-700/20 transition-all duration-200 hover:bg-[#007038] active:scale-95"
          >
            সব পণ্য দেখুন
          </button>
        </div>
      </div>

    
      <div className="relative flex w-40 shrink-0 items-center justify-center sm:w-52 md:w-64">
        <Image
          src="/bazar-hero.png"
          alt="বাজারের পণ্য"
          width={400}
          height={400}
          priority
          className="h-auto w-full object-contain"
        />
      </div>
    </section>
  );
};

export default Banner;