import { NextRequest, NextResponse } from "next/server"
import Services from "./src/shared/services/service"
import { serialize } from "cookie"

export default async function middleware(req: NextRequest) {
    // if (req.nextUrl.pathname == "/mybots") {
    //     const accessToken = req.cookies.get("accessToken")?.value
    //     if (accessToken) {
    //         const isUserAuthenticated =
    //             await Services.checkTokenWithCookie(accessToken)
    //         if (!isUserAuthenticated) {
    //             const absoluteUrl = new URL("/auth/login", req.nextUrl.origin)
    //             return NextResponse.redirect(absoluteUrl.toString())
    //         }
    //         return NextResponse.next()
    //     } else {
    //         const absoluteUrl = new URL("/auth/login", req.nextUrl.origin)
    //         return NextResponse.redirect(absoluteUrl.toString())
    //     }
    // }

    // if (req.nextUrl.pathname == "/oauth") {
    //     const token = req.nextUrl.searchParams.get("token")
    //     if (token) {
    //         const cookie = serialize("accessToken", token, {
    //             maxAge: 3600,
    //             path: "/",
    //         })

    //         const absoluteUrl = new URL("/mybots", req.nextUrl.origin)
    //         const response = NextResponse.redirect(absoluteUrl.toString())
    //         response.headers.set("Origin", "localhost:3000");
    //         response.headers.set("Referer", "http://localhost:3000/mybots");
    //         response.headers.append("Set-Cookie", cookie)
    //         response.headers.set("Access-Control-Allow-Origin", req.nextUrl.origin);
    //         response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    //         response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

    //         return response
    //     } else {
    //         const absoluteUrl = new URL("/auth/login", req.nextUrl.origin)
    //         return NextResponse.redirect(absoluteUrl.toString())
    //     }
    // }

    return NextResponse.next()
}
