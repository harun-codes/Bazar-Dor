"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";


const SignUpPage = () => {

    const router = useRouter();

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");



    const onSubmit = async(
        e: React.FormEvent<HTMLFormElement>
    )=>{

        e.preventDefault();


        if(password !== confirmPassword){

            toast.error(
                "পাসওয়ার্ড মিলছে না"
            );

            return;
        }



        const {data,error} =
        await authClient.signUp.email({
            name,
            email,
            password,
            callbackURL:"/"

        });



        if(error){

            toast.error(
                error.message || 
                "অ্যাকাউন্ট তৈরি করতে সমস্যা হয়েছে"
            );

            return;

        }



        if(data){

            toast.success(
                "অ্যাকাউন্ট সফলভাবে তৈরি হয়েছে"
            );


            router.push("/");

        }


    };



    return (

        <main className="
            min-h-screen
            bg-[#F4F8F2]
            flex
            items-center
            justify-center
            px-4
            py-8
        ">


            <div className="
                w-full
                max-w-md
            ">



                {/* Heading */}

                <div className="
                    text-center
                    mb-6
                ">

                    <h1 className="
                        text-2xl
                        sm:text-3xl
                        font-bold
                        text-[#263238]
                        mb-2
                    ">
                        অ্যাকাউন্ট তৈরি করুন
                    </h1>


                    <p className="
                        text-gray-500
                        text-sm
                    ">
                        বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
                    </p>


                </div>





                {/* Card */}

                <div className="
                    bg-white
                    rounded-2xl
                    border
                    border-gray-200
                    shadow-sm
                    p-5
                    sm:p-6
                ">



                    <form onSubmit={onSubmit}>



                        {/* Name */}

                        <label className="
                            block
                            text-sm
                            font-medium
                            text-[#263238]
                            mb-2
                        ">
                            নাম
                        </label>


                        <input

                            name="name"

                            type="text"

                            placeholder="যেমন: রহিম উদ্দিন"

                            value={name}

                            onChange={
                                e=>setName(e.target.value)
                            }


                            className="
                                w-full
                                h-11
                                px-4
                                rounded-xl
                                border
                                border-gray-200
                                text-sm
                                outline-none
                                focus:border-green-600
                                mb-4
                            "

                            required

                        />






                        {/* Email */}

                        <label className="
                            block
                            text-sm
                            font-medium
                            text-[#263238]
                            mb-2
                        ">
                            ইমেইল
                        </label>


                        <input

                            name="email"

                            type="email"

                            placeholder="you@example.com"

                            value={email}

                            onChange={
                                e=>setEmail(e.target.value)
                            }


                            className="
                                w-full
                                h-11
                                px-4
                                rounded-xl
                                border
                                border-gray-200
                                text-sm
                                outline-none
                                focus:border-green-600
                                mb-4
                            "

                            required

                        />







                        {/* Password */}

                        <label className="
                            block
                            text-sm
                            font-medium
                            text-[#263238]
                            mb-2
                        ">
                            পাসওয়ার্ড
                        </label>


                        <input

                            name="password"

                            type="password"

                            placeholder="কমপক্ষে ৮ অক্ষর"

                            value={password}

                            onChange={
                                e=>setPassword(e.target.value)
                            }


                            className="
                                w-full
                                h-11
                                px-4
                                rounded-xl
                                border
                                border-gray-200
                                text-sm
                                outline-none
                                focus:border-green-600
                                mb-4
                            "

                            minLength={8}

                            required

                        />







                        {/* Confirm Password */}

                        <label className="
                            block
                            text-sm
                            font-medium
                            text-[#263238]
                            mb-2
                        ">
                            পাসওয়ার্ড নিশ্চিত করুন
                        </label>


                        <input

                            type="password"

                            placeholder="আবার লিখুন"

                            value={confirmPassword}

                            onChange={
                                e=>setConfirmPassword(e.target.value)
                            }


                            className="
                                w-full
                                h-11
                                px-4
                                rounded-xl
                                border
                                border-gray-200
                                text-sm
                                outline-none
                                focus:border-green-600
                                mb-5
                            "

                            required

                        />







                        {/* Submit */}

                        <button

                            type="submit"

                            className="
                                w-full
                                h-11
                                bg-[#009639]
                                hover:bg-[#00812f]
                                text-white
                                rounded-xl
                                font-semibold
                                text-sm
                                transition
                            "

                        >

                            অ্যাকাউন্ট তৈরি করুন

                        </button>


                    </form>







                    {/* Divider */}

                    <div className="
                        flex
                        items-center
                        gap-3
                        my-5
                    ">


                        <div className="
                            flex-1
                            h-px
                            bg-gray-200
                        "/>


                        <span className="
                            text-xs
                            text-gray-500
                        ">
                            অথবা
                        </span>


                        <div className="
                            flex-1
                            h-px
                            bg-gray-200
                        "/>


                    </div>







                    {/* Social Buttons */}

                    <div className="
                        grid
                        grid-cols-1
                        sm:grid-cols-2
                        gap-3
                    ">


                        <button

                            type="button"

                            className="
                                h-10
                                border
                                border-gray-200
                                rounded-xl
                                text-xs
                                sm:text-sm
                                hover:bg-gray-50
                            "

                        >

                            🔴 Google দিয়ে চালিয়ে যান

                        </button>





                        <button

                            type="button"

                            className="
                                h-10
                                border
                                border-gray-200
                                rounded-xl
                                text-xs
                                sm:text-sm
                                hover:bg-gray-50
                            "

                        >

                            ⚫ GitHub দিয়ে চালিয়ে যান

                        </button>



                    </div>







                    {/* Sign in */}

                    <p className="
                        text-center
                        text-sm
                        text-gray-600
                        mt-5
                    ">


                        অ্যাকাউন্ট আছে?


                        <Link

                            href="/signin"

                            className="
                                ml-1
                                text-green-600
                                font-medium
                            "

                        >

                            সাইন ইন করুন

                        </Link>


                    </p>




                </div>







                {/* Home */}

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


export default SignUpPage;