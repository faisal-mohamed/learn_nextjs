import { NextRequest, NextResponse } from "next/server";

export default function  middleware(req: NextRequest) {
        const res = NextResponse.next();

        if(req.nextUrl.pathname == '/middleware/path1') {
            //res.cookies.set("theme", "dark");
            return NextResponse.redirect(new URL("/middleware/path2", req.url));
            
        }
        if(req.nextUrl.pathname == '/middleware/path2') {
            res.cookies.set("theme", "dark");
            //return NextResponse.rewrite(new URL("/middleware/path2", req.url));
            res.headers.set("Summa-Header", "Summa Value")
            
        }

        return res;
}



export const config = {
    matcher: ["/middleware/path1", "/middleware/path2"]
}