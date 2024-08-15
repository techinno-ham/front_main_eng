import { NextRequest, NextResponse } from "next/server"
import Services from "./src/shared/services/service"

export default async function middleware(req: NextRequest) {
    const protectedRoutes = ["/mybots", "/profile", "/invite"]
    const protectePrimiumdRoutes = ["/createbot"]
    const panelRoutePattern = /^\/panel(\/.*)?$/
    const pathname = req.nextUrl.pathname
    if (
        protectedRoutes.includes(pathname) ||
        panelRoutePattern.test(pathname)
    ) {
        const accessToken = req.cookies.get("accessToken")?.value
        if (accessToken) {
            const isUserAuthenticated =
                await Services.checkTokenWithCookie(accessToken)
            if (!isUserAuthenticated) {
                const absoluteUrl = new URL("/auth/login", req.nextUrl.origin)
                return NextResponse.redirect(absoluteUrl.toString())
            }
            return NextResponse.next()
        } else {
            const absoluteUrl = new URL("/auth/login", req.nextUrl.origin)
            return NextResponse.redirect(absoluteUrl.toString())
        }
    }
    if (protectePrimiumdRoutes.includes(pathname)) {
        const accessToken = req.cookies.get("accessToken")?.value
        if (accessToken) {
            const isUserAuthenticated =
                await Services.checkTokenWithCookie(accessToken)
            if (!isUserAuthenticated) {
                const absoluteUrl = new URL("/auth/login", req.nextUrl.origin)
                return NextResponse.redirect(absoluteUrl.toString())
            }
            const numberBots = await Services.checkNumberBots(accessToken)
            if (+numberBots.count >= 2) {
                const absoluteUrl = new URL("/mybots", req.nextUrl.origin)
                return NextResponse.redirect(absoluteUrl.toString())
            }

            return NextResponse.next()
        } else {
            const absoluteUrl = new URL("/auth/login", req.nextUrl.origin)
            return NextResponse.redirect(absoluteUrl.toString())
        }
    }

    return NextResponse.next()
}
