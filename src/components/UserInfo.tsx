"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Image from "next/image";

const UserInfo = () => {
  const router = useRouter();

  const { data: session } = authClient.useSession();

  const user = session?.user;

  const [open, setOpen] = useState(false);

  const handleSignOut = async () => {
    await authClient.signOut();

    toast.success("সফলভাবে সাইন আউট হয়েছে");

    router.push("/signin");
  };

  return (
    <div className="relative">
      {user ? (
        <div>

          <button
            onClick={() => setOpen(!open)}
            className="
              flex
              items-center
              gap-2
              cursor-pointer
              max-w-full
            "
          >
            <Image
              src={user?.image || "/profile.png"}
              width={40}
              height={40}
              alt="profile"
              className="
                w-8
                h-8
                sm:w-9
                sm:h-9
                rounded-full
                object-cover
                shrink-0
              "
            />

            <div
              className="
                hidden
                sm:block
                text-left
                max-w-30
                lg:max-w-40
              "
            >
              <p
                className="
                  text-xs
                  sm:text-sm
                  font-medium
                  text-gray-800
                  truncate
                "
              >
                {user.name}
              </p>
            </div>

            <span
              className="
                text-xs
                text-gray-500
              "
            >
              ▾
            </span>
          </button>

          {open && (
            <div
              className="
                absolute
                right-0
                mt-3
                w-62
                sm:w-64
                bg-white
                rounded-2xl
                shadow-lg
                border
                border-gray-200
                p-4
                z-50
              "
            >

              <div
                className="
                  mb-4
                "
              >
                <h3
                  className="
                    font-semibold
                    text-gray-800
                    text-sm
                    truncate
                  "
                >
                  {user.name}
                </h3>

                <p
                  className="
                    text-xs
                    text-gray-500
                    truncate
                  "
                >
                  {user.email}
                </p>
              </div>

              <Link
                href="/profile"
                className="
                  flex
                  items-center
                  gap-2
                  text-sm
                  text-gray-700
                  hover:text-green-600
                  py-2
                  transition
                "
                onClick={() => setOpen(false)}
              >
                👤 আমার প্রোফাইল
              </Link>


              <button
                onClick={handleSignOut}
                className="
                  flex
                  items-center
                  gap-2
                  text-sm
                  text-red-500
                  hover:text-red-600
                  py-2
                  w-full
                  transition
                "
              >
                ↪ সাইন আউট
              </button>

            </div>
          )}
        </div>
      ) : (
        <div
          className="
            flex
            gap-2
            items-center
          "
        >
          <Link
            href="/signin"
            className="
              rounded-md
              border
              border-gray-300
              px-2
              sm:px-3
              py-1
              text-xs
              sm:text-sm
              text-gray-700
              hover:border-green-600
              hover:text-green-700
              whitespace-nowrap
            "
          >
            সাইন ইন
          </Link>

          <Link
            href="/signup"
            className="
              rounded-md
              bg-green-600
              px-2
              sm:px-3
              py-1
              text-xs
              sm:text-sm
              text-white
              hover:bg-green-700
              whitespace-nowrap
            "
          >
            সাইন আপ
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;