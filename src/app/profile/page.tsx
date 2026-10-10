"use client";

import React, { useState } from "react";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const ProfilePage = () => {
  const router = useRouter();

  const { data: session, isPending } = authClient.useSession();

  const user = session?.user;

  const [name, setName] = useState(user?.name || "");

  const handleLogout = async () => {
    await authClient.signOut();

    toast.success("সফলভাবে সাইন আউট হয়েছে");

    router.push("/signin");
  };

  const handleUpdate = async () => {
    if (!name.trim()) {
      toast.error("নাম লিখুন");

      return;
    }

    const { error } = await authClient.updateUser({
      name: name,
    });

    if (error) {
      toast.error(error.message as string);

      return;
    }

    toast.success("তথ্য আপডেট হয়েছে");
  };

  if (isPending) {
    return (
      <div
        className="
          min-h-screen
          bg-[#F4F8F2]
          flex
          items-center
          justify-center
          px-4
        "
      >
        Loading...
      </div>
    );
  }

  return (
    <main
      className="
        min-h-screen
        bg-[#F4F8F2]
        px-3
        sm:px-4
        py-6
        sm:py-8
      "
    >
      <div
        className="
          w-full
          max-w-4xl
          mx-auto
        "
      >
        <div className="mb-5 sm:mb-6">
          <h1
            className="
              text-xl
              sm:text-2xl
              font-bold
              text-[#263238]
            "
          >
            আমার প্রোফাইল
          </h1>

          <p
            className="
              text-gray-500
              text-xs
              sm:text-sm
            "
          >
            আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
          </p>
        </div>

        <section
          className="
            bg-white
            border
            border-gray-200
            rounded-2xl
            p-4
            sm:p-6
            flex
            flex-col
            sm:flex-row
            items-start
            sm:items-center
            justify-between
            gap-4
          "
        >
          <div
            className="
              flex
              items-center
              gap-3
              sm:gap-4
              min-w-0
            "
          >
            <div
              className="
                w-14
                h-14
                sm:w-16
                sm:h-16
                rounded-xl
                overflow-hidden
                bg-gray-100
                shrink-0
              "
            >
              <Image
                src={user?.image || "/profile.png"}
                width={64}
                height={64}
                alt="profile"
                className="
                  w-full
                  h-full
                  object-cover
                "
              />
            </div>

            <div className="min-w-0">
              <h2
                className="
                  font-semibold
                  text-base
                  sm:text-lg
                  text-[#263238]
                  truncate
                "
              >
                {user?.name}
              </h2>

              <p
                className="
                  text-xs
                  sm:text-sm
                  text-gray-500
                  truncate
                "
              >
                {user?.email}
              </p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="
              w-full
              sm:w-auto
              border
              border-red-400
              text-red-500
              rounded-xl
              px-4
              py-2
              text-sm
              hover:bg-red-50
              transition
            "
          >
            ↪ সাইন আউট
          </button>
        </section>

        <section
          className="
            mt-5
            bg-white
            border
            border-gray-200
            rounded-2xl
            p-4
            sm:p-6
            md:p-7
          "
        >
          <h2
            className="
              font-semibold
              text-base
              sm:text-lg
              text-[#263238]
              mb-6
              sm:mb-8
            "
          >
            তথ্য
          </h2>

          <label
            className="
              block
              text-sm
              mb-2
              text-gray-700
            "
          >
            নাম
          </label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="
              w-full
              h-10
              sm:h-11
              rounded-xl
              border
              border-gray-200
              px-4
              text-sm
              outline-none
              focus:border-green-600
            "
          />

          <button
            onClick={handleUpdate}
            className="
              mt-4
              sm:mt-5
              w-full
              h-10
              sm:h-11
              rounded-xl
              bg-[#009639]
              hover:bg-[#00812f]
              text-white
              font-semibold
              text-sm
              shadow-md
              transition
            "
          >
            আপডেট
          </button>
        </section>
      </div>
    </main>
  );
};

export default ProfilePage;