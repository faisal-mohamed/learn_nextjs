import Link from "next/link";

export default function F1Page() {


    return <div>
        <h1>F1 Page</h1>
        <Link href={"/interceptor-routes/f2"}>F2</Link>
    </div>
}