'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';

const UserInfo = () => {

    const { data: session } = authClient.useSession();
    const user = session?.user

        const handleSignOut = async () => {
            await authClient.signOut()
        }

    return (
        <div>

            {
                user ? <div className='flex gap-2 items-center'>

                    <div className="avatar">
                        <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
                            <img alt="Tailwind-CSS-Avatar-component" src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                        </div>
                    </div>

                    <h2 className='text-lg'>{user?.name}</h2>
                    <button onClick={handleSignOut} className='btn btn-error'>Sign Out</button>

                </div> :

                    <div className="flex gap-2 p-2">
                        <Link href={`/signin`}
                            type="button"
                            className="rounded-md border border-gray-300 px-3 py-1 text-[17px] text-gray-700 hover:border-green-600 hover:text-green-700"
                        >
                            সাইন ইন
                        </Link>

                        <Link href={`/signup`}
                            type="button"
                            className="rounded-md bg-green-600 px-3 py-1 text-[17px] text-white shadow-sm hover:bg-green-700"
                        >
                            সাইন আপ
                        </Link>
                    </div>

            }


        </div>
    );
};

export default UserInfo;