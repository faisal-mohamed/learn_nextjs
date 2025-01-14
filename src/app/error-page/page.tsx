"use client";
import { useEffect } from "react"

export default function ErrorPage() {

    useEffect(() => {
      throw  new Error("This Error is Triggered manually for testing...")
    }, [])

    return <div>

        This Page will Trigger error.tsx file
    </div>
}