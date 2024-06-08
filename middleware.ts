import { NextRequest, NextResponse } from "next/server"
import Services from "./src/shared/services/service"

export default async function middleware(req: NextRequest) {
    const token = req.cookies.get("accessToken")?.value

    const isUserAuthenticated = await Services.checkTokenWithCookie(token)

    if (!isUserAuthenticated) {
        const absoluteUrl = new URL("/auth/login", req.nextUrl.origin)
        return NextResponse.redirect(absoluteUrl.toString())
    }
    return NextResponse.next()
}

export const config = {
    matcher: ["/mybots"],
}
