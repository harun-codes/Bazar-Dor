"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";


const SignInPage = () => {


    const router = useRouter();


    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");



    const onSubmit = async(
        e: React.FormEvent<HTMLFormElement>
    )=>{

        e.preventDefault();



        const {data,error} =
        await authClient.signIn.email({
            email,
            password,
            callbackURL:"/"

        });



        if(error){

            toast.error(
                error.message ||
                "ইমেইল অথবা পাসওয়ার্ড ভুল"
            );

            return;
        }



        if(data){

            toast.success(
                "সফলভাবে লগইন হয়েছে"
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
                        সাইন ইন
                    </h1>



                    <p className="
                        text-gray-500
                        text-sm
                    ">
                        বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
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
                                outline-none
                                text-sm
                                focus:border-green-600
                                mb-5
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
                                outline-none
                                text-sm
                                focus:border-green-600
                                mb-5
                            "


                            minLength={8}

                            required

                        />








                        {/* Login Button */}


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
                                shadow-md
                                transition
                            "

                        >

                            সাইন ইন

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








                    {/* Social Login */}


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
                                rounded-xl
                                border
                                border-gray-200
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
                                rounded-xl
                                border
                                border-gray-200
                                text-xs
                                sm:text-sm
                                hover:bg-gray-50
                            "

                        >

                            ⚫ GitHub দিয়ে চালিয়ে যান

                        </button>



                    </div>








                    {/* Signup Link */}


                    <p className="
                        text-center
                        mt-5
                        text-sm
                        text-gray-600
                    ">


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








                {/* Home Link */}


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