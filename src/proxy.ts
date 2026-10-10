import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


export async function proxy(
    request: NextRequest
) {


    const session = await auth.api.getSession({

        headers: await headers()

    });


    if (!session?.user) {


        return NextResponse.redirect(
            new URL("/signin", request.url)
        );


    }



    return NextResponse.next();


}



export const config = {

    matcher: [

        "/profile/:path*",

        "/product/:path*"

    ]

};