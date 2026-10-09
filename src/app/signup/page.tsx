"use client"
import React from 'react';
import { FaGoogle, FaGithub, FaArrowLeft } from "react-icons/fa";
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';


const SignUpPage = () => {
    const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const user = Object.fromEntries(formData.entries()) as { name: string, email: string, password: string };

        const { data, error } = await authClient.signUp.email({
            ...user,
            callbackURL: "/"
        })
        if (error) {
            
            console.error("Signup failed:", error);
            return;
        }

    }

    return (

        <main className="min-h-screen bg-[#f1f6f2] px-4 py-6 text-[#26332b]">
            <div className="mx-auto w-full max-w-90">
                <header className="mb-5 text-center">
                    <h1 className="text-[22px] font-bold leading-tight">
                        অ্যাকাউন্ট তৈরি করুন
                    </h1>
                    <p className="mt-1 text-[13px] text-[#849087]">
                        বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
                    </p>
                </header>

                <section className="rounded-[14px] border border-[#e0e8e1] bg-[#fbfdfb] px-5 py-5">
                    <form onSubmit={onSubmit} className="space-y-3.5">
                        <div>
                            <label
                                htmlFor="name"
                                className="mb-1 block text-[12px] font-medium"
                            >
                                নাম
                            </label>
                            <input
                                id="name"
                                type="text"
                                placeholder="যেমন: রহিম উদ্দিন"
                                autoComplete="name"
                                required
                                className="h-9 w-full rounded-[7px] border border-[#e0e8e1] bg-transparent px-3 text-[12px] outline-none transition focus:border-[#078b43] focus:ring-2 focus:ring-[#078b43]/10"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="mb-1 block text-[12px] font-medium"
                            >
                                ইমেইল
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="you@example.com"
                                autoComplete="email"
                                required
                                className="h-9 w-full rounded-[7px] border border-[#e0e8e1] bg-transparent px-3 text-[12px] outline-none transition focus:border-[#078b43] focus:ring-2 focus:ring-[#078b43]/10"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="mb-1 block text-[12px] font-medium"
                            >
                                পাসওয়ার্ড
                            </label>
                            <input
                                id="password"
                                type="password"
                                placeholder="কমপক্ষে ৮ অক্ষরের"
                                autoComplete="new-password"
                                minLength={8}
                                required
                                className="h-9 w-full rounded-[7px] border border-[#e0e8e1] bg-transparent px-3 text-[12px] outline-none transition focus:border-[#078b43] focus:ring-2 focus:ring-[#078b43]/10"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="confirmPassword"
                                className="mb-1 block text-[12px] font-medium"
                            >
                                পাসওয়ার্ড নিশ্চিত করুন
                            </label>
                            <input
                                id="confirmPassword"
                                type="password"
                                placeholder="আবার লিখুন"
                                autoComplete="new-password"
                                minLength={8}
                                required
                                className="h-9 w-full rounded-[7px] border border-[#e0e8e1] bg-transparent px-3 text-[12px] outline-none transition focus:border-[#078b43] focus:ring-2 focus:ring-[#078b43]/10"
                            />
                        </div>

                        <button
                            type="submit"
                            className="h-9 w-full rounded-[7px] bg-[#078b43] text-[12px] font-semibold text-white shadow-[0_3px_2px_rgba(0,0,0,0.22)] transition hover:bg-[#067738] active:translate-y-px"
                        >
                            অ্যাকাউন্ট তৈরি করুন
                        </button>
                    </form>

                    <div className="my-4 flex items-center gap-3">
                        <div className="h-px flex-1 bg-[#e0e8e1]" />
                        <span className="text-[11px] text-[#7b857e]">অথবা</span>
                        <div className="h-px flex-1 bg-[#e0e8e1]" />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                        <button
                            type="button"
                            className="flex h-9 items-center justify-center gap-1.5 whitespace-nowrap rounded-[7px] border border-[#e0e8e1] text-[11px] font-medium transition hover:bg-[#f1f6f2]"
                        >
                            <FaGoogle className="shrink-0 text-[#4285F4]" />
                            Google দিয়ে চালিয়ে যান
                        </button>

                        <button
                            type="button"
                            className="flex h-9 items-center justify-center gap-1.5 whitespace-nowrap rounded-[7px] border border-[#e0e8e1] text-[11px] font-medium transition hover:bg-[#f1f6f2]"
                        >
                            <FaGithub className="shrink-0 text-[#24292f]" />
                            GitHub দিয়ে চালিয়ে যান
                        </button>
                    </div>

                    <p className="mt-3 text-center text-[12px]">
                        অ্যাকাউন্ট আছে?{" "}
                        <Link
                            href="/login"
                            className="font-medium text-[#078b43] hover:underline"
                        >
                            সাইন ইন করুন
                        </Link>
                    </p>
                </section>

                <Link
                    href="/"
                    className="mt-5 flex items-center justify-center gap-1.5 text-[12px] text-[#89948c] transition hover:text-[#078b43]"
                >
                    <FaArrowLeft className="text-[10px]" />
                    হোম পেজে ফিরে যান
                </Link>
            </div>
        </main>
    );
};

export default SignUpPage;