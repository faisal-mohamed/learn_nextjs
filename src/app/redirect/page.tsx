"use client";

import { redirect, useRouter } from "next/navigation"

export default function Redirect() {

    const router = useRouter();

    const handleUseRouter = () => {
        router.push('/')
    }

    const handleRedirect = () => {
            redirect('/products')
    }


    return <div>
        redirect page

        <button onClick={handleUseRouter}>Redirect To Main Page using useRouter hook</button>

        <button onClick={handleRedirect}>Redirect to Products Page using redirect function</button>


    </div>
}