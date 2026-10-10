"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SignInPage = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });

    if (error) {
      toast.error("ইমেইল অথবা পাসওয়ার্ড ভুল");

      return;
    }

    if (data) {
      toast.success("সফলভাবে লগইন হয়েছে");

      router.push("/");
    }
  };

  const [loading, setLoading] = useState(false);

  const handleGithubSignIn = async () => {
    try {
      setLoading(true);

      await authClient.signIn.social({
        provider: "github",
        callbackURL: "/",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleRSignIn = async () => {
    try {
      setLoading(true);

      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      className="
        min-h-screen
        bg-[#F4F8F2]
        flex
        items-center
        justify-center
        px-3
        sm:px-4
        py-6
        sm:py-8
      "
    >
      <div
        className="
          w-full
          max-w-md
        "
      >
        <div
          className="
            text-center
            mb-5
            sm:mb-6
          "
        >
          <h1
            className="
              text-2xl
              sm:text-3xl
              font-bold
              text-[#263238]
              mb-2
            "
          >
            সাইন ইন
          </h1>

          <p
            className="
              text-gray-500
              text-xs
              sm:text-sm
              px-2
            "
          >
            বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
          </p>
        </div>

        <div
          className="
            bg-white
            rounded-2xl
            border
            border-gray-200
            shadow-sm
            p-4
            sm:p-6
          "
        >
          <form onSubmit={onSubmit}>

            <label
              className="
                block
                text-sm
                font-medium
                text-[#263238]
                mb-2
              "
            >
              ইমেইল
            </label>

            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="
                w-full
                h-10
                sm:h-11
                px-4
                rounded-xl
                border
                border-gray-200
                outline-none
                text-sm
                focus:border-green-600
                mb-4
                sm:mb-5
              "
              required
            />

            <label
              className="
                block
                text-sm
                font-medium
                text-[#263238]
                mb-2
              "
            >
              পাসওয়ার্ড
            </label>

            <input
              name="password"
              type="password"
              placeholder="কমপক্ষে ৮ অক্ষর"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="
                w-full
                h-10
                sm:h-11
                px-4
                rounded-xl
                border
                border-gray-200
                outline-none
                text-sm
                focus:border-green-600
                mb-4
                sm:mb-5
              "
              minLength={8}
              required
            />

            <button
              type="submit"
              className="
                w-full
                h-10
                sm:h-11
                bg-[#009639]
                hover:bg-[#00812f]
                text-white
                rounded-xl
                font-semibold
                text-sm
                shadow-md
                transition
              "
            >
              সাইন ইন
            </button>
          </form>

          <div
            className="
              flex
              items-center
              gap-3
              my-4
              sm:my-5
            "
          >
            <div
              className="
                flex-1
                h-px
                bg-gray-200
              "
            />

            <span
              className="
                text-xs
                text-gray-500
              "
            >
              অথবা
            </span>

            <div
              className="
                flex-1
                h-px
                bg-gray-200
              "
            />
          </div>

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              gap-3
            "
          >
            <button
              disabled={loading}
              onClick={handleGoogleRSignIn}
              type="button"
              className="
                h-10
                rounded-xl
                border
                border-gray-200
                text-xs
                sm:text-sm
                hover:bg-gray-50
                transition
              "
            >
              <div
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                "
              >
                <FcGoogle className="text-lg" />
                Google দিয়ে চালিয়ে যান
              </div>
            </button>

            <button
              disabled={loading}
              onClick={handleGithubSignIn}
              type="button"
              className="
                h-10
                rounded-xl
                border
                border-gray-200
                text-xs
                sm:text-sm
                hover:bg-gray-50
                transition
              "
            >
              <div
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                "
              >
                <FaGithub className="text-lg" />
                GitHub দিয়ে চালিয়ে যান
              </div>
            </button>
          </div>

          <p
            className="
              text-center
              mt-5
              text-sm
              text-gray-600
            "
          >
            অ্যাকাউন্ট নেই?
            <Link
              href="/signup"
              className="
                ml-1
                text-green-600
                font-medium
              "
            >
              সাইন আপ করুন
            </Link>
          </p>
        </div>

        <Link
          href="/"
          className="
            block
            text-center
            mt-5
            text-sm
            text-gray-500
            hover:text-green-700
          "
        >
          ← হোম পেজে ফিরে যান
        </Link>
      </div>
    </main>
  );
};

export default SignInPage;