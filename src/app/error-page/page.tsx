"use client";
import { useEffect, useState } from "react"

export default function ErrorPage() {
    const [state, setState] = useState(0);

    useEffect(() => {
      setState(() => Math.floor(Math.random()*2) )
    }, [])

    if(state == 1) {
        throw new Error("Manually Triggerd Error for testing...")
    }

    return <div>

        This Page will Trigger error.tsx file
    </div>
}