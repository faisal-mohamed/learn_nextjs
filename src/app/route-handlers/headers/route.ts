import { NextRequest } from "next/server"
import { headers, cookies } from "next/headers"
 

export async function GET(req: NextRequest) {

    const reqHeaders1 = new Headers(req.headers);
    console.log(reqHeaders1.get("Authorization"))

    const reqHeaders2 = await headers();
    console.log("method 2 : "+reqHeaders2.get("Authorization"))


    const cookie1 = req.cookies;
    console.log("cookie1", cookie1.get("theme"));

    const cookie2 = await cookies();
    cookie2.set("resultsPerPage", "10")
    console.log(cookie2.get("resultsPerPage"))


    

    return Response.json("<h1>Hi</h1>", {
        headers: {
            "Content-Type": "text/html",
            "Set-Cookie": "theme=dark"
        }
    })
}